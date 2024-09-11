export default function AssignmentContent() {
    return (
        <div className="assignments-screen">
            <div className="assignments-controls">
                <h2>Assignments</h2>
                <input type="text"
                       id="assignment-input"
                       value="search for assignment"/>
                <button> +Group </button>
                <button> +Assignment </button>
            </div>
            <div className="assignment-categories">
                <div className="assignment-category">
                <h3>ASSIGNMENTS</h3>
                    <ul className="assignment-list">
                        <li className="assignment-item">
                            <span className="assignment-title">Assignment 1: Introduction to Web Development</span>
                            <span className="assignment-status">Due: September 15</span>
                        </li>
                        <li className="assignment-item">
                            <span className="assignment-title">Assignment 2: HTML Basics</span>
                            <span className="assignment-status">Due: September 20</span>
                        </li>
                        <li className="assignment-item">
                            <span className="assignment-title">Assignment 3: CSS Fundamentals</span>
                            <span className="assignment-status">Due: September 25</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}