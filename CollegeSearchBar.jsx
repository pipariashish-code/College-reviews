import React, { useState } from 'react';

export default function CollegeSearchBar() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [notice, setNotice] = useState('');

  // Replace with your Render backend URL:
  const BACKEND_URL = "https://backend-1-fttw.onrender.com/";

  const handleSearch = async (e, overrideQuery) => {
    if (e) e.preventDefault();
    const searchQuery = overrideQuery || query;
    if (!searchQuery.trim()) return;

    setLoading(true);
    setNotice('');

    try {
      const response = await fetch(`${BACKEND_URL}/colleges?q=${encodeURIComponent(searchQuery)}&mode=smart`);
      const data = await response.json();
      
      const results = data.results || data.data || [];
      setColleges(results);

      if (data.autoUpdatedToDb > 0) {
        setNotice(`✨ Found ${data.autoUpdatedToDb} missing institutions using AI & automatically saved to database!`);
      } else if (results.length === 0) {
        setNotice(`No colleges found for "${searchQuery}".`);
      }
    } catch (err) {
      console.error(err);
      setNotice('Could not connect to the college database.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickChip = (chip) => {
    setQuery(chip);
    handleSearch(null, chip);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
          Search & Discover Verified Colleges
        </h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          Powered by Mentorex live registry and autonomous AI discovery
        </p>
      </div>

      {/* Search Input Bar */}
      <form onSubmit={(e) => handleSearch(e)} style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any college (e.g. RV College of Engineering, IIT, AIIMS)..."
          style={{
            flex: 1,
            padding: '14px 18px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1.5px solid #cbd5e1',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Quick Suggestion Chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Quick Try:</span>
        {['RV College of Engineering', 'IIT Bombay', 'AIIMS New Delhi', 'IIM Ahmedabad', 'PES University'].map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => handleQuickChip(chip)}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              borderRadius: '20px',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* AI Notification Banner */}
      {notice && (
        <div style={{
          padding: '12px 16px',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          color: '#1d4ed8',
          fontSize: '14px',
          marginBottom: '20px'
        }}>
          {notice}
        </div>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '30px 0', color: '#6366f1', fontSize: '15px' }}>
          Searching database & activating AI discovery...
        </div>
      )}

      {/* Results Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {colleges.map((col, idx) => (
          <div
            key={col.id || idx}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '18px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                  {col.name}
                </h3>
                {col.nirfRank && (
                  <span style={{ fontSize: '11px', fontWeight: 'bold', backgroundColor: '#ecfdf5', color: '#047857', padding: '2px 8px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                    NIRF #{col.nirfRank}
                  </span>
                )}
              </div>

              {col.source === 'ai_discovered' && (
                <div style={{ display: 'inline-block', fontSize: '11px', backgroundColor: '#f5f3ff', color: '#6d28d9', padding: '2px 8px', borderRadius: '10px', marginBottom: '8px', fontWeight: '500' }}>
                  ✨ AI Auto-Discovered
                </div>
              )}

              <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 8px 0' }}>
                📍 {col.city}, {col.state}
              </p>

              {col.description && (
                <p style={{ fontSize: '13px', color: '#334155', lineHeight: '1.4', margin: '8px 0' }}>
                  {col.description}
                </p>
              )}
            </div>

            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
              {col.averagePlacementInr && (
                <div style={{ fontSize: '12px', color: '#059669', fontWeight: '600', marginBottom: '8px' }}>
                  Avg Package: ₹{(col.averagePlacementInr / 100000).toFixed(1)} LPA
                </div>
              )}
              {col.websiteUrl && (
                <a
                  href={col.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '8px',
                    fontSize: '13px',
                    backgroundColor: '#f8fafc',
                    color: '#4f46e5',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  Visit Official Website →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
