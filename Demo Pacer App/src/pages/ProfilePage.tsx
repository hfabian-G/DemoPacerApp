const ProfilePage = () => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>This page displays user information and could be another workflow to measure.</p>
            <div className="card" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <img 
                            src="/profile.png" 
                            className="rounded-circle" 
                            alt="User Avatar"
                            width="100" 
                            height="100" 
                        />
                        <div className="ms-3">
                            <h4 className="card-title mb-0">Harrison Fabian</h4>
                            <p className="text-muted mb-0">harrison.fabian@example.com</p>
                            <span className="badge bg-primary mt-1">Administrator</span>
                        </div>
                    </div>
                    <hr />
                    <h5 className="card-title">Details</h5>
                    <p className="card-text"><strong>Member Since:</strong> January 1, 2023</p>
                    <p className="card-text"><strong>Last Login:</strong> Today</p>
                    <button className="btn btn-secondary">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
