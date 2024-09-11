import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course1">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course2">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/0002/Home">
                            CS0002 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/0002/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course3">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/0003/Home">
                            CS0003 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/0003/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course4">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/0004/Home">
                            CS0004 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/0004/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course5">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/0005/Home">
                            CS0005 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/0005/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course6">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/0006/Home">
                            CS0006 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/0006/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course7">
                    <img src="/images/teslabot.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/0007/Home">
                            CS0007 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/0007/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
