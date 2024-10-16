import React, { useState } from "react";

const DeleteStudentById = (props) => {
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9ygK4jpifAWL_YnWy0ER2wtT6y_2MWlnGkhcc2zkHnlbmMDL5bk5xTCJkGKFrB7HFarfnjlUk0tcIqK1_nF2z0ZeEUsZ6-7mkUedfWL1oseQek7qRTA0lUHXXiC0HhHtyXfcL8zQ_J7AaQN5GcMeWGFD52WFR2xSNkGTYnY3aQ0K7Slb2TIk81brgkKnvl8IYnQLLrExl5LUNBJbhpBZ3pgc3HGY-ddSMpFnw3cQbSSblzaLqI5A8dN62hwHBMyJ3dZQpm-zuN-gIJI6SdoGK8CfcXPuhWqx3gHszgb-PWD2DLrlq4puAywt_wG-tosRb684q3PkTSl3C2Q-tWqKoC0VnuO_V9XJiJ4qQyocakAH6XdZoz-TYRFAMVpO6jJ_RlVQBJoyK2fqocRVWHucKT147NElg54isQMAMJvEFuZ9HUvziotLEsrc3DJXCWvI22y-fWBJt04z1XPyR12d8IgOtPLcE79Jwy94wJIBULHWLvF1o2UHA0ofnpZkH7FLEo_c-3T9ndtjXGUMg5sDVpdI0t9ndICAONaUixJnNfjSb9vwvQTolLLtLOyDYh_NWcN_hjqrZ9Oem0hOMfMIP9NDDyr133LbS4x7Ff_1GXJrALz-4odL71aStfcWtMgRGYMQAinZ6D8_LxV0T1raUHiJ9n_WYYLQC47CY_qJ7eEclw";
    props.setProgress(10);
  const handleDeleteStudent = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    fetch(`http://localhost:5112/api/Student___Record/ID?Id=${studentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete student");
        }
        return response.json();
      })
      .then(() => {
        setSuccess("Student deleted successfully!");
        setLoading(false);
        setStudentId("");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  props.setProgress(100);
  return (
   <>
   <div className="Deletdata">
   <div className="frmstubyremove">
     <h4>Delete Student by ID</h4>
      <form className="frmremove" onSubmit={handleDeleteStudent}>
        <input
          type="text"
          placeholder="ENTER STUDENT ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Deleting..." : "Delete Student"}
        </button>
      </form>

      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
      <div className="btnline">
      </div>
      </div>
      <div className="mrgin">
          <h3>Student Record Management System</h3>
          <div className="ullist">
            <ul>
              <li>
                <h5><i class='bx bxs-right-arrow'></i>Backup Reminder</h5>
                <p>Consider exporting or backing up the student data before deletion, if needed.</p>
              </li>
              <li>
                <h5><i class='bx bxs-right-arrow'></i>Clarification Text</h5>
                <p>Clarify what data is affected by the deletion.</p>
              </li>
              <li>
                <h5><i class='bx bxs-right-arrow'></i>Time Sensitive Action</h5>
                <p> If your system has a soft delete or undo feature, include this point to reassure users.</p>
              </li>
              <li>
                <div className="delline">
                  
                </div>
              </li>
            </ul>
          </div>
      </div>
   </div>
   </>
  );
};

export default DeleteStudentById;
