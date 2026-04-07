import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      localStorage.setItem('medivault_token', data.token || data.data?.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
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

        <p className="auth-title">Welcome back</p>
        <p className="auth-subtitle">Sign in to your account</p>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleLogin}>
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
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        <p className="auth-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
