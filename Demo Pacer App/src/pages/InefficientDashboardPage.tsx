import SampleChart from "../components/SampleChart";
import { Link } from "react-router-dom";

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
                            <SampleChart />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-5">
                <button className="btn btn-primary">Download CSV</button>
                <button className="btn btn-info text-white">View Raw Data</button>
                <Link to="/report-generator" className="btn btn-secondary">Generate Report</Link>
            </div>
        </div>
    );
};

export default InefficientDashboardPage;