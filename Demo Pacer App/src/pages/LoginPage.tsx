import React, { useEffect, useState } from 'react';
import HotkeyHint from '../components/HotkeyHint';

const LoginPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000); // Reset after 2 seconds
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey && event.shiftKey && event.key.toLowerCase() === 'l') {
                event.preventDefault();
                // We are directly calling the submit logic here for the demo
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 2000);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <h2>Login</h2>
            <p>This page simulates a standard login form. A "Super User" can press <strong>⌘+Shift+L</strong> to log in instantly.</p>

            {submitted && <div className="alert alert-success">Successfully logged in!</div>}

            <form style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailInput" />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
                    <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
                </div>
                <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary">
                        <HotkeyHint letter="L" word="Login" />
                    </button>
                    <a href="#" className="ms-3">Forgot password?</a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;