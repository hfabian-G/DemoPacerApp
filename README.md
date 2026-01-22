# Workflow Pacer - Demonstration Application

This is a web application built with React and TypeScript to serve as a demonstration target for the "Workflow Pacer" UX measurement tool. Its purpose is to provide a variety of realistic user workflows, UI layouts, and interaction models that can be measured and compared to showcase the capabilities of the Pacer tool.

## Core Demonstration Features

This application was specifically designed to highlight the following comparisons:

1.  **Efficient vs. Inefficient UI Design:**
    *   Navigate to the **Dashboard** and the **Inefficient Dashboard**. The former has a compact, logical layout, while the latter forces significant mouse travel and scrolling to perform the same set of actions. This provides a clear, measurable difference in "Pixel Distance".

2.  **Standard vs. "Super User" Workflows:**
    *   Nearly every action and navigation path has a keyboard hotkey alternative (`⌘+Shift+<Key>`), complete with underlined hints. You can measure the time and effort saved when using these shortcuts compared to standard mouse-only interaction.

3.  **Well-Designed vs. Poorly-Designed Processes:**
    *   Compare the **Generate Report** workflow linked from the *Efficient Dashboard* against the one linked from the *Inefficient Dashboard*.
    *   **Efficient:** A single-step form with smart fields (`t-7` date shortcuts).
    *   **Inefficient:** A multi-step process with scattered inputs and an unnecessary confirmation modal.

## Included Pages & Workflows

-   **Home Page**: A basic landing page.
-   **Login Page**: A standard login form. (Hotkey: `⌘+Shift+L`)
-   **Efficient Dashboard**: Features a compact layout, a sample chart, and a grouped action panel. (Hotkeys for actions: `⌘+Shift+I`, `⌘+Shift+E`, etc.)
-   **Inefficient Dashboard**: Features the same components as the efficient dashboard, but they are scattered across the page to maximize mouse travel and require scrolling.
-   **Profile Page**: A sample user profile page.
-   **Settings Page**: A sample settings form with various input types. (Hotkey: `⌘+Shift+S`)
-   **Efficient Report Generator**: A streamlined, single-step form with "smart" date inputs that parse shortcuts.
-   **Inefficient Report Generator**: A multi-step, poorly designed workflow requiring excessive clicks, scrolling, and confirmation.

## Getting Started

### Prerequisites

-   Node.js and npm installed.

### Installation

1.  Clone the repository or download the source code.
2.  Open your terminal in the project root directory.
3.  Install the required dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  In the project root directory, run the following command:
    ```bash
    npm run dev
    ```
2.  Open your web browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Technology Stack

-   **Framework:** React (with TypeScript)
-   **Build Tool:** Vite
-   **Styling:** Bootstrap & React-Bootstrap
-   **Routing:** React Router
-   **Charts:** Chart.js
-   **Date Utilities:** date-fns