import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      navigate('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-blob-1" />
      <div className="auth-blob-2" />
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="7.5" y="1" width="5" height="18" rx="2" fill="white" />
              <rect x="1" y="7.5" width="18" height="5" rx="2" fill="white" />
            </svg>
          </div>
          <h1>MediVault</h1>
        </div>

        <p className="auth-title">Create account</p>
        <p className="auth-subtitle">Join MediVault today</p>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
