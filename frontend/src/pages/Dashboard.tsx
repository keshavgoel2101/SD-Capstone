import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import type { User, MedicalRecord } from '../types';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const token = localStorage.getItem('medivault_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await fetch('http://localhost:3001/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const profileData = await profileRes.json();
        if (!profileRes.ok) throw new Error(profileData.message || 'Failed to load profile');
        const userData: User = profileData.user || profileData.data || profileData;
        setUser(userData);

        const recordsRes = await fetch('http://localhost:3001/api/records', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const recordsData = await recordsRes.json();
        if (recordsRes.ok) {
          setRecords(recordsData.data || recordsData);
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'An error occurred';
        setError(msg);
        if (msg.includes('Token') || msg.includes('Not authorized')) {
          localStorage.removeItem('medivault_token');
          navigate('/login');
        }
      }
    };

    if (!token) {
      navigate('/login');
      return;
    }
    fetchData();
  }, [token, navigate]);

  const fetchRecordsOnly = async () => {
    try {
      const recordsRes = await fetch('http://localhost:3001/api/records', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const recordsData = await recordsRes.json();
      if (recordsRes.ok) {
        setRecords(recordsData.data || recordsData);
      }
    } catch {
      // silent refresh
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('medivault_token');
    navigate('/login');
  };

  if (!user) return <div className="loading-screen">Loading MediVault…</div>;

  return (
    <>
      <Sidebar user={user} onLogout={handleLogout} />
      <main className="page-layout">
        <div className="page-header">
          <h1 className="page-title">
            {user.role === 'doctor' ? `Welcome, Dr. ${user.name}` : `Welcome, ${user.name}`}
          </h1>
          <p className="page-subtitle">
            {user.role === 'doctor' ? 'Manage patient records from your dashboard.' : 'Your health records at a glance.'}
          </p>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {user.role === 'doctor' ? (
          <div className="grid-2">
            <div className="col">
              <div className="card">
                <p className="card-title">Doctor Profile</p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text)' }}>
                  <strong>Name:</strong> Dr. {user.name}<br />
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <p className="card-title">Patient Records</p>
                {records.length === 0 ? (
                  <p className="no-data">No patient records found.</p>
                ) : (
                  <ul className="records-list">
                    {records.map((record) => (
                      <li key={record._id} className="record-item">
                        <div className="record-info">
                          <strong>{record.originalName}</strong>
                          <span>Patient: {record.user?.name || 'Unknown'}</span>
                          <span>
                            {(record.size / 1024 / 1024).toFixed(2)} MB &bull;{' '}
                            {new Date(record.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <a
                          href={record.fileUrl || `http://localhost:3001/uploads/${record.fileName}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-link"
                        >
                          View
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid-2">
            <div className="col">
              <div className="card">
                <p className="card-title">Patient Profile</p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text)' }}>
                  <strong>Name:</strong> {user.name}<br />
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="card">
                <p className="card-title">Upload Medical Document</p>
                <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 16 }}>
                  Securely upload reports, prescriptions, and scans to share with your doctors.
                </p>
                <button
                  onClick={() => navigate('/documents/upload')}
                  className="btn-primary"
                  style={{ marginTop: 0 }}
                >
                  Upload &amp; Share Document
                </button>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <p className="card-title">My Medical Records</p>
                {records.length === 0 ? (
                  <p className="no-data">No medical records found. Upload one to get started.</p>
                ) : (
                  <ul className="records-list">
                    {records.map((record) => (
                      <li key={record._id} className="record-item">
                        <div className="record-info">
                          <strong>{record.originalName}</strong>
                          <span>
                            {(record.size / 1024 / 1024).toFixed(2)} MB &bull;{' '}
                            {new Date(record.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <a
                          href={record.fileUrl || `http://localhost:3001/uploads/${record.fileName}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-link"
                        >
                          View
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
