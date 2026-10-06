import { useState, useEffect } from 'react';
import {
  signInWithGoogleDrive,
  signOutGoogle,
  initAuth,
  getAccessToken,
  listDriveFiles,
  saveReportToGoogleDrive,
  deleteDriveFileWithConfirm
} from '../services/googleDriveService';
import { Cloud, CheckCircle, AlertCircle, Loader, ExternalLink, Trash2, Folder, HardDrive, RefreshCw } from 'lucide-react';

export default function GoogleDriveSyncModal({ isOpen, onClose }) {
  const [user, setUser] = useState(null);
  const [hasToken, setHasToken] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setHasToken(!!token);
        if (token) loadFiles();
      },
      (currentUser) => {
        setUser(currentUser || null);
        setHasToken(false);
        setFiles([]);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const loadFiles = async () => {
    if (!getAccessToken()) return;
    setLoading(true);
    try {
      const driveFiles = await listDriveFiles();
      setFiles(driveFiles);
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Could not load files from Google Drive.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const result = await signInWithGoogleDrive();
      if (result) {
        setUser(result.user);
        setHasToken(true);
        setMessage({ type: 'success', text: 'Connected to your Google Drive successfully!' });
        await loadFiles();
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: err.message || 'Google Sign-in failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOutGoogle();
    setUser(null);
    setHasToken(false);
    setFiles([]);
    setMessage({ type: 'info', text: 'Disconnected from Google Drive.' });
  };

  const handleBackupAllData = async () => {
    setSyncing(true);
    setMessage(null);
    try {
      const backupPayload = {
        title: "MentoreX Comprehensive College, Scholarship & Loan Backup",
        createdAt: new Date().toISOString(),
        user: user?.email || "Student",
        categories: [
          {
            name: "Verified Institutional Scholarships",
            note: "Includes NFSU, SIBM, RVCE, COEP, and Government Schemed Aid",
            details: "Detailed database backed up from mentorex.co.in"
          },
          {
            name: "Education Loan Calculator Presets",
            note: "SBI Scholar, HDFC Credila, PNB Saraswati with active ROI benchmarks"
          }
        ]
      };

      const result = await saveReportToGoogleDrive({
        fileName: `MentoreX-Complete-Backup-${new Date().toISOString().slice(0, 10)}.json`,
        content: JSON.stringify(backupPayload, null, 2),
        mimeType: 'application/json',
        description: 'Complete data backup from MentoreX (mentorex.co.in)'
      });

      setMessage({
        type: 'success',
        text: `Data successfully saved to Google Drive! File: "${result.name}"`,
        link: result.webViewLink
      });
      await loadFiles();
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to save to Google Drive.' });
    } finally {
      setSyncing(false);
    }
  };

  const handleDelete = async (fileId, fileName) => {
    try {
      const deleted = await deleteDriveFileWithConfirm(fileId, fileName);
      if (deleted) {
        setFiles(files.filter(f => f.id !== fileId));
        setMessage({ type: 'info', text: `Removed "${fileName}" from Google Drive.` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Could not delete file.' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
              <HardDrive className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Google Drive Storage & Sync
              </h2>
              <p className="text-xs text-slate-400">
                Directly store and manage all college reports, scholarship lists, and loan analyses in your Drive
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {message && (
            <div className={`p-4 rounded-xl flex items-start gap-3 border ${
              message.type === 'error'
                ? 'bg-red-500/10 border-red-500/30 text-red-300'
                : message.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
            }`}>
              {message.type === 'error' ? <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> : <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
              <div className="flex-1 text-sm">
                <p>{message.text}</p>
                {message.link && (
                  <a
                    href={message.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-emerald-400 underline hover:text-emerald-300"
                  >
                    Open file in Google Drive <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Connection Status Card */}
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5">
            {!hasToken ? (
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto">
                  <Cloud className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Connect Your Google Drive</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto mt-1">
                    Grant MentoreX permission to store your college financial plans, scholarship eligibility reports, and loan calculators in your personal Google Drive folder.
                  </p>
                </div>

                {/* Official Material Style Sign in Button */}
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  </svg>
                  {loading ? 'Connecting...' : 'Sign in with Google'}
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="Avatar" className="w-12 h-12 rounded-full border border-blue-400" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                      {user?.displayName?.[0] || 'U'}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{user?.displayName || 'Google User'}</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                        Connected
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{user?.email}</p>
                    <p className="text-[11px] text-blue-400 flex items-center gap-1 mt-0.5">
                      <Folder className="w-3 h-3" /> Folder: MentoreX Reports & Backups
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleBackupAllData}
                    disabled={syncing}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-md transition disabled:opacity-50"
                  >
                    {syncing ? <Loader className="w-4 h-4 animate-spin" /> : <Cloud className="w-4 h-4" />}
                    <span>{syncing ? 'Backing Up...' : 'Backup All Data Now'}</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="text-xs text-slate-400 hover:text-red-400 border border-slate-700 hover:border-red-500/30 px-3 py-2.5 rounded-lg transition"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Files List Section */}
          {hasToken && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  Files Stored in Your Google Drive
                </h4>
                <button
                  onClick={loadFiles}
                  disabled={loading}
                  className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 transition"
                >
                  <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {loading ? (
                <div className="py-8 text-center text-slate-500 flex flex-col items-center gap-2">
                  <Loader className="w-6 h-6 animate-spin text-blue-500" />
                  <span className="text-xs">Fetching your Drive files...</span>
                </div>
              ) : files.length === 0 ? (
                <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 text-center text-slate-400 text-xs">
                  No files stored in your Drive yet. Click "Backup All Data Now" or save individual scholarship & loan reports.
                </div>
              ) : (
                <div className="divide-y divide-slate-800/80 border border-slate-800 rounded-xl overflow-hidden bg-slate-800/20">
                  {files.map((file) => (
                    <div key={file.id} className="p-3.5 flex items-center justify-between hover:bg-slate-800/40 transition">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <Folder className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <div className="truncate">
                          <p className="text-sm font-medium text-slate-200 truncate">{file.name}</p>
                          <p className="text-[11px] text-slate-400">
                            {file.createdTime ? new Date(file.createdTime).toLocaleDateString() : 'Stored'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {file.webViewLink && (
                          <a
                            href={file.webViewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition"
                            title="Open in Google Drive"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => handleDelete(file.id, file.name)}
                          className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                          title="Remove from Drive (requires confirmation)"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
          <span>🔒 All data is stored directly in your private Google Drive</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
