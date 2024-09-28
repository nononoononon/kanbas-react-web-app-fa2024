import {BsBookHalf, BsGripVertical, BsPlus, BsSearch} from "react-icons/bs";
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
                    <span
                        className="border border-1 rounded px-3 py-2 text-muted fs-5 d-inline-block">40% of Total</span>
                    <button className="btn btn-secondary btn-sm ms-2 text-muted fs-3">
                        <BsPlus/>
                    </button>
                    <IoEllipsisVertical className="fs-1 text-muted ms-2"/>
                </div>
            </h5>

            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="list-group-item p-3 d-flex align-items-center wd-lesson">
                    <a href="#/Kanbas/Courses/1234/Assignments/123" className="w-100 d-flex align-items-center text-decoration-none">
                        <BsGripVertical className="fs-1 me-2 text-muted text-black"/>
                        <BsBookHalf className="fs-1 me-3 text-success"/>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <div>
                                <span className="fs-5 fw-bold text-black">A1</span>
                                <div className="assignment-title text-muted">
                                    <span className="text-danger">Assignment 1</span> |
                                    <strong>Not available at</strong> May 6 at 12:00 pm <br/>
                                    <strong>Due</strong> : September 25 at 11:59pm | 100 pt
                                </div>
                            </div>
                            <div className="text-muted text-black">
                            <LessonControlButtons />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="list-group-item p-3 d-flex align-items-center wd-lesson">
                    <a href="#/Kanbas/Courses/1234/Assignments/124" className="w-100 d-flex align-items-center text-decoration-none">
                        <BsGripVertical className="fs-1 me-2 text-muted text-black"/>
                        <BsBookHalf className="fs-1 me-3 text-success"/>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <div>
                                <span className="fs-5 fw-bold text-black">A2</span>
                                <div className="assignment-title text-muted">
                                    <span className="text-danger">Assignment 2</span> |
                                    <strong>Not available at</strong> May 8 at 12:00 pm <br/>
                                    <strong>Due</strong> : September 28 at 11:59pm | 100 pt
                                </div>
                            </div>
                            <div className="text-muted text-black">
                                <LessonControlButtons/>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="list-group-item p-3 d-flex align-items-center wd-lesson">
                    <a href="#/Kanbas/Courses/1234/Assignments/125" className="w-100 d-flex align-items-center text-decoration-none">
                        <BsGripVertical className="fs-1 me-2 text-muted text-black"/>
                        <BsBookHalf className="fs-1 me-3 text-success"/>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <div>
                                <span className="fs-5 fw-bold text-black">A3</span>
                                <div className="assignment-title text-muted">
                                    <span className="text-danger">Assignment 3</span> |
                                    <strong>Not available at</strong> May 10 at 12:00 pm <br/>
                                    <strong>Due</strong> : October 25 at 11:59pm | 20 pt
                                </div>
                            </div>
                            <div className="text-muted text-black">
                                <LessonControlButtons/>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}