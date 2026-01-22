import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HotkeyHint from "../components/HotkeyHint";

const DashboardPage = () => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState<{ message: string, type: string } | null>(null);

    const showAlert = (message: string, type: string = 'info') => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 2000);
    };

    const handleAction = (action: string) => {
        switch (action) {
            case 'profile':
                showAlert('Navigating to Profile...', 'primary');
                // In a real app, you would navigate to the profile page
                break;
            case 'settings':
                showAlert('Navigating to Settings...', 'secondary');
                // We use navigate from react-router-dom to change pages
                setTimeout(() => navigate('/settings'), 500);
                break;
            case 'report':
                showAlert('Generating Report...', 'info');
                break;
            case 'logout':
                showAlert('Logging out...', 'danger');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!event.metaKey || !event.shiftKey) return;

            switch (event.key.toLowerCase()) {
                case 'i':
                    event.preventDefault();
                    handleAction('profile');
                    break;
                case 'e':
                    event.preventDefault();
                    handleAction('settings');
                    break;
                case 'r':
                    event.preventDefault();
                    handleAction('report');
                    break;
                case 'o':
                    event.preventDefault();
                    handleAction('logout');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Dashboard <span className="badge bg-success">Efficient Layout</span></h2>
                <span className="text-muted">Welcome, Harrison!</span>
            </div>
            <p>This dashboard is designed with an efficient layout. A "Super User" can use <strong>⌘+Shift+I, ⌘+Shift+E, ⌘+Shift+R, or ⌘+Shift+O</strong> to trigger actions.</p>
            
            {alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>}

            <div className="row">
                <div className="col-lg-8 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Quarterly Performance</h5>
                            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
                                <p className="text-muted">[Chart Placeholder]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Actions</h5>
                            <p className="card-text">All primary actions are grouped here for quick access.</p>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" onClick={() => handleAction('profile')}><HotkeyHint letter="I" word="View Profile" /></button>
                                <button className="btn btn-secondary" onClick={() => handleAction('settings')}><HotkeyHint letter="E" word="Edit Settings" /></button>
                                <button className="btn btn-info text-white" onClick={() => handleAction('report')}><HotkeyHint letter="R" word="Generate Report" /></button>
                                <button className="btn btn-danger" onClick={() => handleAction('logout')}><HotkeyHint letter="O" word="Logout" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
