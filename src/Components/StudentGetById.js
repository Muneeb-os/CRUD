import React, { useState } from "react";

const StudentRecordById = (props) => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9ygK4jpifAWL_YnWy0ER2wtT6y_2MWlnGkhcc2zkHnlbmMDL5bk5xTCJkGKFrB7HFarfnjlUk0tcIqK1_nF2z0ZeEUsZ6-7mkUedfWL1oseQek7qRTA0lUHXXiC0HhHtyXfcL8zQ_J7AaQN5GcMeWGFD52WFR2xSNkGTYnY3aQ0K7Slb2TIk81brgkKnvl8IYnQLLrExl5LUNBJbhpBZ3pgc3HGY-ddSMpFnw3cQbSSblzaLqI5A8dN62hwHBMyJ3dZQpm-zuN-gIJI6SdoGK8CfcXPuhWqx3gHszgb-PWD2DLrlq4puAywt_wG-tosRb684q3PkTSl3C2Q-tWqKoC0VnuO_V9XJiJ4qQyocakAH6XdZoz-TYRFAMVpO6jJ_RlVQBJoyK2fqocRVWHucKT147NElg54isQMAMJvEFuZ9HUvziotLEsrc3DJXCWvI22y-fWBJt04z1XPyR12d8IgOtPLcE79Jwy94wJIBULHWLvF1o2UHA0ofnpZkH7FLEo_c-3T9ndtjXGUMg5sDVpdI0t9ndICAONaUixJnNfjSb9vwvQTolLLtLOyDYh_NWcN_hjqrZ9Oem0hOMfMIP9NDDyr133LbS4x7Ff_1GXJrALz-4odL71aStfcWtMgRGYMQAinZ6D8_LxV0T1raUHiJ9n_WYYLQC47CY_qJ7eEclw";
    props.setProgress(10);
  const handleFetchStudent = () => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5112/api/Student___Record/ID?Id=${studentId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStudent(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  props.setProgress(100);
  return (
   <>
   <div className="mainbox">
    <div className="textarea">
     <h3>Student Record Management System</h3>
    <div className="list">
    <ul>
      <li>
       <p><i class='bx bxs-right-arrow'></i> Easily view, update, and manage student records in one place.</p>
      </li>
      <li>
      <p><i class='bx bxs-right-arrow'></i> Keep track of student data with our reliable and user-friendly app</p>
      </li>
      <li>
       <p><i class='bx bxs-right-arrow'></i> Securely access student records anytime, ensuring data privacy and integrity</p>
      </li>
      <li>
      <div className="line">
    </div>
      </li>
     </ul>
    </div>
    </div>
    <div className="frmstubyid">
      <h4 className="hid">Find Student by ID</h4>
      <input
      className="input"
        type="text"
        placeholder="ENTER STUDENT ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={handleFetchStudent}>Fetch Student</button>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      {student && (
        <div className="showdata">
          <ul>
                <li>{student.id}</li>
                <li>{student.name}</li>
                <li>{student.dep}</li>
                <li>{student.samester}</li>
                <li>{student.gender}</li>
                <li>{student.address}</li>
                <li>{student.session}</li>
                <li>{student.phone}</li>
                </ul>
        </div>
      )}
      <div className="txtline">
      </div>
    </div>
   </div>
   </>
  );
};

export default StudentRecordById;
