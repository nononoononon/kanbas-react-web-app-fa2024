import {BsPlus, BsSearch} from "react-icons/bs";
import {FaPlusCircle} from "react-icons/fa";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center">
                    <BsSearch className="me-2 fs-4" />
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search for Assignments"
                        style={{ width: "300px" }}
                    />
                </div>
                <div>
                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-success me-2"
                    >
                        <FaPlusCircle className="me-1" /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-primary">
                        <FaPlusCircle className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
                ASSIGNMENTS 40% of Total
                <button className="btn btn-outline-primary btn-sm">
                    <BsPlus />
                </button>
            </h3>

            <ul id="wd-assignment-list" className="list-group">
                <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-start border-3 border-success">
                    <a className="wd-assignment-link fs-5 fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <div className="assignment-title text-muted">
                        Assignment 1 | <strong>Not available at</strong> May 6 at 12:00 pm
                    </div>
                    <div className="assignment-status">
                        <strong>Due</strong> : September 25 at 11:59pm | 32 pt
                    </div>
                </li>

                <li className="wd-assignment-list-item2 list-group-item p-3 mb-3 border-start border-3 border-success">
                    <a className="wd-assignment-link2 fs-5 fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - ENV + HTML
                    </a>
                    <div className="assignment-title text-muted">
                        Assignment 2 | <strong>Not available at</strong> May 8 at 12:00 pm
                    </div>
                    <div className="assignment-status">
                        <strong>Due</strong> : September 27 at 11:59pm | 32 pt
                    </div>
                </li>

                <li className="wd-assignment-list-item3 list-group-item p-3 mb-3 border-start border-3 border-success">
                    <a className="wd-assignment-link fs-5 fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - ENV + HTML
                    </a>
                    <div className="assignment-title text-muted">
                        Assignment 3 | <strong>Not available at</strong> May 11 at 12:00 pm
                    </div>
                    <div className="assignment-status">
                        <strong>Due</strong> : September 31 at 11:59pm | 32 pt
                    </div>
                </li>
            </ul>
        </div>
    );
}
