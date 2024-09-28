import {BsBook, BsBookHalf, BsBookmark, BsGripVertical, BsPlus, BsSearch} from "react-icons/bs";
import {FaPlusCircle} from "react-icons/fa";
import {IoAdd, IoEllipsisVertical} from "react-icons/io5";
import React from "react";
import LessonControlButtons from "./LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group " style={{width: "300px"}}>
                    <span className="input-group-text bg-white border-end-0 fs-6 ">
                    <BsSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control border-start-0"
                        placeholder="Search for Assignments"
                    />
                </div>
                <div>
                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-secondary me-2"
                    >
                        <IoAdd className="fs-5" /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger ">
                        <IoAdd className="fs-5" /> Assignment
                    </button>
                </div>
            </div>

            <h5 id="wd-assignments-title"
                className="d-flex justify-content-between align-items-center bg-secondary p-3 mb-0">
                <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-1 me-2"/>
                    ASSIGNMENTS
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <span className="border border-1 rounded px-1 py-1 text-muted fs-5">40% of Total</span>
                    <button className="btn btn-secondary btn-sm ms-2 text-muted fs-3">
                        <BsPlus/>
                    </button>
                    <IoEllipsisVertical className="fs-1 text-muted ms-2"/>
                </div>
            </h5>

            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="list-group-item p-3 d-flex align-items-center wd-lesson">
                    <BsGripVertical className="fs-1 me-2"/>
                    <BsBookHalf className="fs-1 me-3 text-success"/>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div>
                            <a className="fs-5 fw-bold text-black text-muted text-decoration-none"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A1
                            </a>
                            <div className="assignment-title text-muted">
                                <span className="text-danger">Assignment 1</span> |
                                <strong>Not available at</strong> May 6 at 12:00 pm <br/>
                                <strong>Due</strong> : September 25 at 11:59pm | 100 pt
                            </div>
                        </div>
                        <LessonControlButtons/>
                    </div>
                </li>
                <li className="list-group-item p-3 d-flex align-items-center wd-lesson">
                    <BsGripVertical className="fs-1 me-3"/>
                    <BsBookHalf className="fs-1 me-3 text-success"/>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div>
                            <a className="fs-5 fw-bold text-black text-muted text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                                A2
                            </a>
                            <div className="assignment-title text-muted">
                                <span className="text-danger">Assignment 1</span> |
                                <strong>Not available at</strong> May 8 at 12:00 pm <br/>
                                <strong>Due</strong> : September 28 at 11:59pm | 100 pt
                            </div>
                        </div>
                        <LessonControlButtons/>
                    </div>
                </li>
                <li className="list-group-item p-3 d-flex align-items-center wd-lesson">
                    <BsGripVertical className="fs-1 me-3"/>
                    <BsBookHalf className="fs-1 me-3 text-success"/>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div>
                            <a className="fs-5 fw-bold text-black text-muted text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                            </a>
                            <div className="assignment-title text-muted">
                                <span className="text-danger">Assignment 1</span> |
                                <strong>Not available at</strong> May 10 at 12:00 pm <br/>
                                <strong>Due</strong> : October 25 at 11:59pm | 20 pt
                            </div>
                        </div>
                        <LessonControlButtons/>
                    </div>
                </li>
            </ul>
        </div>
    );
}
