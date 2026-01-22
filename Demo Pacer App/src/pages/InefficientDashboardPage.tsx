const InefficientDashboardPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                 <h2>Dashboard <span className="badge bg-danger">Inefficient Layout</span></h2>
                <button className="btn btn-danger">Logout</button>
            </div>
            <p>This dashboard demonstrates an inefficient layout. Key information and controls are scattered across the screen, requiring maximum mouse travel and scrolling.</p>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Quarterly Performance</h5>
                            {/* Placeholder for a chart */}
                            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
                                <p className="text-muted">[Chart Placeholder]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20vh', textAlign: 'left' }}>
                <button className="btn btn-primary">View Profile</button>
            </div>

            <div style={{ marginTop: '30vh', textAlign: 'center' }}>
                 <button className="btn btn-info text-white">Generate Report</button>
            </div>

             <div style={{ marginTop: '40vh', textAlign: 'right', marginBottom: '50vh' }}>
                <button className="btn btn-secondary">Edit Settings</button>
            </div>
        </div>
    );
};

export default InefficientDashboardPage;