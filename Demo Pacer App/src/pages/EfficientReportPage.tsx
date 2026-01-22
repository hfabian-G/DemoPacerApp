import React, { useState } from 'react';
import SmartDateInput from '../components/SmartDateInput';

const EfficientReportPage = () => {
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generation is instant in an efficient workflow
        setIsComplete(true);
        setTimeout(() => setIsComplete(false), 3000); // Reset for another demo run
    };

    return (
        <div>
            <h2>Generate Report (Efficient Workflow)</h2>
            <p>This workflow is efficient. All options are logically grouped, and it uses smart fields to accelerate input.</p>

            <div className="card" style={{ maxWidth: '600px' }}>
                <div className="card-body">
                    {isComplete ? (
                        <div className="alert alert-success">Report generated successfully!</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <h5 className="card-title">Report Options</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <SmartDateInput id="startDate" label="Start Date" placeholder="e.g., t-7" />
                                </div>
                                <div className="col-md-6">
                                    <SmartDateInput id="endDate" label="End Date" placeholder="e.g., t" />
                                </div>
                            </div>
                            
                            <h6>Output Format</h6>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="format" id="formatPdf" defaultChecked />
                                    <label className="form-check-label" htmlFor="formatPdf">PDF</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="format" id="formatCsv" />
                                    <label className="form-check-label" htmlFor="formatCsv">CSV</label>
                                </div>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Generate Report</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EfficientReportPage;
