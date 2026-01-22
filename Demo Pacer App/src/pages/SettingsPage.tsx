import React, { useEffect, useState } from 'react';
import HotkeyHint from "../components/HotkeyHint";

const SettingsPage = () => {
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey && event.shiftKey && event.key.toLowerCase() === 's') {
                event.preventDefault();
                setSaved(true);
                setTimeout(() => setSaved(false), 2000);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return (
        <div>
            <h2>Settings</h2>
            <p>A more realistic settings page with various options to interact with. A "Super User" can press <strong>⌘+Shift+S</strong> to save.</p>
            
            {saved && <div className="alert alert-success mb-3">Settings saved!</div>}

            <form onSubmit={handleSave}>
                <div className="card">
                    <div className="card-header">
                        Profile Settings
                    </div>
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="fullName" defaultValue="Harrison Fabian" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" defaultValue="harrison.fabian@example.com" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="card-header">
                        Notification Preferences
                    </div>
                    <div className="card-body">
                        <p>How would you like to receive notifications?</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="notifications" id="notifEmail" defaultChecked />
                            <label className="form-check-label" htmlFor="notifEmail">
                                Email
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="notifications" id="notifSms" />
                            <label className="form-check-label" htmlFor="notifSms">
                                SMS
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="notifications" id="notifNone" />
                            <label className="form-check-label" htmlFor="notifNone">
                                No notifications
                            </label>
                        </div>
                        <hr />
                        <div className="form-check form-switch mt-3">
                            <input className="form-check-input" type="checkbox" role="switch" id="promoEmails" defaultChecked />
                            <label className="form-check-label" htmlFor="promoEmails">Receive promotional emails</label>
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-success mt-4">
                    <HotkeyHint letter="S" word="Save Changes" />
                </button>
            </form>
        </div>
    );
};

export default SettingsPage;
