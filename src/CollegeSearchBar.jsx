import React, { useState } from 'react';

export default function CollegeSearchBar() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [notice, setNotice] = useState('');

  // Your Render backend URL (or this live gateway):
  const BACKEND_URL = "https://ais-pre-fg6tjdmo3v2peae77l4xe4-801775728769.asia-southeast1.run.app";

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setNotice('');

    try {
      const response = await fetch(`${BACKEND_URL}/colleges?q=${encodeURIComponent(query)}&mode=smart`);
      const data = await response.json();
      const results = data.results || data.data || [];
      setColleges(results);

      if (data.autoUpdatedToDb > 0) {
        setNotice(`✨ Found ${data.autoUpdatedToDb} colleges with AI & automatically saved to database!`);
      } else if (results.length === 0) {
        setNotice(`No colleges found for "${query}".`);
      }
    } catch (err) {
      console.error(err);
      setNotice('Could not connect to college database.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b' }}>
          Search & Discover Verified Colleges
        </h2>
        <p style={{ color: '#64748b' }}>Mentorex live registry with autonomous AI college discovery</p>
      </div>

      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any college (e.g. RV College of Engineering, IIT, AIIMS)..."
          style={{ flex: 1, padding: '14px', fontSize: '16px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '14px 24px', fontSize: '16px', fontWeight: '600', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {notice && (
        <div style={{ padding: '12px', backgroundColor: '#eff6ff', borderRadius: '8px', color: '#1d4ed8', marginBottom: '20px' }}>
          {notice}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {colleges.map((col, idx) => (
          <div key={col.id || idx} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#0f172a' }}>{col.name}</h3>
            {col.source === 'ai_discovered' && (
              <span style={{ fontSize: '11px', background: '#f5f3ff', color: '#6d28d9', padding: '2px 6px', borderRadius: '6px' }}>✨ AI Discovered</span>
            )}
            <p style={{ fontSize: '13px', color: '#64748b', margin: '6px 0' }}>📍 {col.city}, {col.state}</p>
            {col.nirfRank && <p style={{ fontSize: '12px', color: '#047857', fontWeight: 'bold' }}>NIRF #{col.nirfRank}</p>}
            {col.averagePlacementInr && (
              <p style={{ fontSize: '13px', color: '#059669', fontWeight: 'bold' }}>Avg: ₹{(col.averagePlacementInr / 100000).toFixed(1)} LPA</p>
            )}
            {col.websiteUrl && (
              <a href={col.websiteUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '8px', fontSize: '12px', color: '#4f46e5' }}>
                Visit Website →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
