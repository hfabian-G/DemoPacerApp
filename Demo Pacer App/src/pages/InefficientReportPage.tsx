import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

const InefficientReportPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleGenerateClick = () => {
        // In an efficient UI, this would just generate the report.
        // Here, we show an unnecessary confirmation modal.
        setShowModal(true);
    };

    const handleConfirmGenerate = () => {
        setShowModal(false);
        setIsGenerating(true);
        // Simulate a delay for report generation
        setTimeout(() => {
            setIsGenerating(false);
            setIsComplete(true);
        }, 2500);
    };


    return (
        <div>
            <h2>Generate Report (Inefficient Workflow)</h2>
            <p>This workflow is inefficient because options are scattered and it requires an unnecessary confirmation step.</p>
            
            {!isGenerating && !isComplete && (
                <form>
                    <div className="row">
                        {/* Step 1: Date range on the left */}
                        <div className="col-md-4">
                            <h5>Step 1: Select Date Range</h5>
                            <div className="mb-3">
                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                <input type="date" className="form-control" id="startDate" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endDate" className="form-label">End Date</label>
                                <input type="date" className="form-control" id="endDate" />
                            </div>
                        </div>

                        {/* Step 2: Columns in the middle, but with extra space */}
                        <div className="col-md-4 offset-md-4">
                            <h5>Step 2: Choose Output Format</h5>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="format" id="formatPdf" defaultChecked />
                                <label className="form-check-label" htmlFor="formatPdf">PDF</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="format" id="formatCsv" />
                                <label className="form-check-label" htmlFor="formatCsv">CSV</label>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Button at the bottom, forcing a scroll */}
                    <div style={{marginTop: '30vh'}}>
                        <h5>Step 3: Generate</h5>
                        <button type="button" className="btn btn-primary" onClick={handleGenerateClick}>
                            Generate Report
                        </button>
                    </div>
                </form>
            )}

            {isGenerating && (
                <div className="text-center">
                    <Spinner animation="border" role="status" className="me-2" />
                    <strong>Generating your report... Please wait.</strong>
                </div>
            )}

            {isComplete && (
                 <div className="alert alert-success">
                    Report generated successfully!
                 </div>
            )}


            {/* Unnecessary Confirmation Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Generation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to generate this report? This process cannot be stopped.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmGenerate}>
                        Yes, Generate
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default InefficientReportPage;
