export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                   placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <div className="assignment-title">Assignment 1 | <strong> Not available at </strong> May 6 at 12:00
                        pm
                    </div>
                    <div className="assignment-status"><strong>Due</strong> : September 25 at 11:59pm | 32 pt</div>
                </li>
                <li className="wd-assignment-list-item2">
                    <a className="wd-assignment-link2"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - ENV + HTML
                    </a>
                    <div className="assignment-title">Assignment 2 | <strong> Not available at </strong> May 8 at 12:00
                        pm
                    </div>
                    <div className="assignment-status"><strong>Due</strong> : September 27 at 11:59pm | 32 pt</div>
                </li>
                <li className="wd-assignment-list-item3">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - ENV + HTML
                    </a>
                    <div className="assignment-title">Assignment 1 | <strong> Not available at </strong> May 11 at 12:00
                        pm
                    </div>
                    <div className="assignment-status"><strong>Due</strong> : September 31 at 11:59pm | 32 pt</div>
                </li>
            </ul>
        </div>
    );
}
