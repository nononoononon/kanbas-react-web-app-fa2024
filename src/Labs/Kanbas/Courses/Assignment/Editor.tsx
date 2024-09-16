export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br/><br/>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
            </textarea>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>

                {/* Group Select */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="individual">Individual</option>
                            <option value="group">Group</option>
                        </select>
                    </td>
                </tr>

                {/* Display Grade As */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="points">Points</option>
                            <option value="percentage">Percentage</option>
                            <option value="complete/incomplete">Complete/Incomplete</option>
                        </select>
                    </td>
                </tr>

                {/* Submission Type */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="text-entry">Online</option>
                            <option value="file-upload">In person</option>
                        </select>
                    </td>
                </tr>

                {/* Online Entry Option */}
                <tr>
                    <td></td>
                    <td>
                        <label>Online Entry Options</label><br/>
                        <input type="checkbox" id="text-entry"/> Text Entry<br/>
                        <input type="checkbox" id="website-url"/> Website URL<br/>
                        <input type="checkbox" id="media-recordings"/> Media Recordings<br/>
                        <input type="checkbox" id="student-annotation"/> Student Annotation<br/>
                        <input type="checkbox" id="file-uploads"/> File Uploads<br/>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                </tr>
                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>
                        <input type="text" id="wd-assign-to" value="Everyone"/>
                    </td>
                </tr>

                {/* Due data */}
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13"/>
                    </td>
                </tr>

                {/* Available And Due Date */}
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>
                        <input type="date" id="wd-available-from" value="2024-05-06"/>
                    </td>
                    <td>
                        <input type="date" id="wd-available-until" value="2024-05-20"/>
                    </td>
                </tr>
            </table>
            <hr/>
            <table width="100%">
                <tr>
                    <td></td>
                    <td align="right">
                        <button>Cancel</button>
                        <button>Save </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
