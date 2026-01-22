const HomePage = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to the Workflow Pacer Demo</h1>
                <p className="col-md-8 fs-4">
                    This application is a demonstration target for the "Workflow Pacer" tool.
                    Use the navigation above to explore different workflows and UI layouts.
                </p>
                <p>You can measure things like:</p>
                <ul>
                    <li>The efficiency of a standard login form.</li>
                    <li>The difference between a well-structured dashboard and a poorly-structured one.</li>
                    <li>The time saved by using "Super User" hotkeys versus standard mouse navigation.</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
