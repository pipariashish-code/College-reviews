import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize or reuse Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure Google Auth Provider with Google Drive scope
export const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const provider = new GoogleAuthProvider();
SCOPES.forEach(scope => provider.addScope(scope));

// In-memory cache for access token (never persisted to localStorage/sessionStorage)
let cachedAccessToken = null;
let isSigningIn = false;

/**
 * Initialize auth listener
 */
export const initAuth = (onAuthSuccess, onAuthFailure) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // User is known by Firebase, but we need fresh token via interaction if not cached
        if (onAuthFailure) onAuthFailure(user);
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure(null);
    }
  });
};

/**
 * Trigger Google Sign In with Drive permissions
 */
export const signInWithGoogleDrive = async () => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential || !credential.accessToken) {
      throw new Error('Google Drive access token could not be obtained.');
    }
    cachedAccessToken = credential.accessToken;
    return {
      user: result.user,
      accessToken: cachedAccessToken
    };
  } catch (err) {
    console.error('Google Drive sign in error:', err);
    throw err;
  } finally {
    isSigningIn = false;
  }
};

/**
 * Get the in-memory access token
 */
export const getAccessToken = () => {
  return cachedAccessToken;
};

/**
 * Sign out and clear in-memory tokens
 */
export const signOutGoogle = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

/**
 * Find or create "MentoreX Reports" folder in Google Drive
 */
async function getOrCreateMentorexFolder(token) {
  try {
    const q = "name = 'MentoreX Reports & Backups' and mimeType = 'application/vnd.google-apps.folder' and trashed = false";
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id, name)`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.files && data.files.length > 0) {
        return data.files[0].id;
      }
    }

    // Create folder
    const createRes = await fetch('https://www.googleapis.com/drive/v3/files', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'MentoreX Reports & Backups',
        mimeType: 'application/vnd.google-apps.folder',
        description: 'Automatic reports and college data generated from MentoreX'
      })
    });
    if (createRes.ok) {
      const folderData = await createRes.json();
      return folderData.id;
    }
  } catch (e) {
    console.warn('Folder creation fallback to root:', e);
  }
  return null;
}

/**
 * Upload a document/report to Google Drive
 */
export const saveReportToGoogleDrive = async ({ fileName, content, mimeType = 'text/plain', description = '' }) => {
  const token = getAccessToken();
  if (!token) {
    throw new Error('NOT_AUTHENTICATED');
  }

  const folderId = await getOrCreateMentorexFolder(token);

  const metadata = {
    name: fileName,
    mimeType: mimeType,
    description: description || 'Generated from MentoreX (mentorex.co.in)'
  };
  if (folderId) {
    metadata.parents = [folderId];
  }

  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const multipartRequestBody =
    delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) +
    delimiter +
    `Content-Type: ${mimeType}\r\n\r\n` +
    (typeof content === 'string' ? content : JSON.stringify(content, null, 2)) +
    closeDelimiter;

  const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink,webContentLink', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `multipart/related; boundary=${boundary}`
    },
    body: multipartRequestBody
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Failed to upload to Google Drive: ${res.statusText}`);
  }

  return await res.json();
};

/**
 * List MentoreX files stored in user's Google Drive
 */
export const listDriveFiles = async () => {
  const token = getAccessToken();
  if (!token) return [];

  const q = "trashed = false";
  const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id, name, mimeType, webViewLink, createdTime, size)&orderBy=createdTime desc&pageSize=30`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch files from Google Drive');
  }

  const data = await res.json();
  return data.files || [];
};

/**
 * Delete a file from Google Drive with required user confirmation
 */
export const deleteDriveFileWithConfirm = async (fileId, fileName) => {
  const token = getAccessToken();
  if (!token) throw new Error('NOT_AUTHENTICATED');

  // Mandatory explicit confirmation dialog for destructive operation
  const confirmed = window.confirm(`Are you sure you want to remove "${fileName}" from your Google Drive? This action cannot be undone.`);
  if (!confirmed) return false;

  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error('Failed to delete file from Google Drive');
  }

  return true;
};
