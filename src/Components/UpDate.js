import React, { useState } from "react";

const UpdateStudentRecord = (props) => {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState({
    Id: "",
    Name: "",
    Dep: "",
    Samester: "",
    Gender: "",
    Address: "",
    Session: "",
    Phone: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  
  const token="CfDJ8AoeQFbgTAJMnj6hxPqS9ygK4jpifAWL_YnWy0ER2wtT6y_2MWlnGkhcc2zkHnlbmMDL5bk5xTCJkGKFrB7HFarfnjlUk0tcIqK1_nF2z0ZeEUsZ6-7mkUedfWL1oseQek7qRTA0lUHXXiC0HhHtyXfcL8zQ_J7AaQN5GcMeWGFD52WFR2xSNkGTYnY3aQ0K7Slb2TIk81brgkKnvl8IYnQLLrExl5LUNBJbhpBZ3pgc3HGY-ddSMpFnw3cQbSSblzaLqI5A8dN62hwHBMyJ3dZQpm-zuN-gIJI6SdoGK8CfcXPuhWqx3gHszgb-PWD2DLrlq4puAywt_wG-tosRb684q3PkTSl3C2Q-tWqKoC0VnuO_V9XJiJ4qQyocakAH6XdZoz-TYRFAMVpO6jJ_RlVQBJoyK2fqocRVWHucKT147NElg54isQMAMJvEFuZ9HUvziotLEsrc3DJXCWvI22y-fWBJt04z1XPyR12d8IgOtPLcE79Jwy94wJIBULHWLvF1o2UHA0ofnpZkH7FLEo_c-3T9ndtjXGUMg5sDVpdI0t9ndICAONaUixJnNfjSb9vwvQTolLLtLOyDYh_NWcN_hjqrZ9Oem0hOMfMIP9NDDyr133LbS4x7Ff_1GXJrALz-4odL71aStfcWtMgRGYMQAinZ6D8_LxV0T1raUHiJ9n_WYYLQC47CY_qJ7eEclw";
  props.setProgress(10);
  const handleUpdateStudent = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    fetch(`http://localhost:5112/api/Student___Record/ID?Id=${studentId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: studentId,
        Name: studentData.Name,
        Dep: studentData.Dep,
        Phone: studentData.Phone,
        Gender: studentData.Gender,
        Address: studentData.Address,
        Session: studentData.Session,
        Samester: studentData.Samester,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update student");
        }
        return response.json();
      })
      .then((data) => {
        setSuccess("Student record updated successfully!");
        setStudentId("");
        setStudentData({
          Id: "",
          Name: "",
          Dep: "",
          Samester: "",
          Gender: "",
          Address: "",
          Session: "",
          Phone: "",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleInputChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };
  props.setProgress(100);
  return (
    <>
    <div className="maindiv">
      <div className="updatetext">
        <h3>Student Record Management System</h3>
        <div className="uplist">
          <ul>
            <li>
            <h5><i class='bx bxs-right-arrow'></i> Review Changes Before Submitting</h5>
            <p>Encourage users to review the changes they’ve made before finalizing the update.</p>
            </li>
            <li>
              <h5><i class='bx bxs-right-arrow'></i> Undo Option for Recent Changes</h5>
              <p> If your system allows it, mention the possibility of undoing or reverting the changes within a certain timeframe after the update.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="updaterecord">
      <h4>Update Student Record</h4>
      <form className="uprecordfield" onSubmit={handleUpdateStudent}>
        <label>ID</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <label>Name</label>
        <input
          type="text"
          name="Name"
          value={studentData.Name}
          onChange={handleInputChange}
        />
        <label>Department</label>
        <input
          type="text"
          name="Dep"
          value={studentData.Dep}
          onChange={handleInputChange}
        />
        <label>Samester</label>
        <input
          type="text"
          name="Samester"
          value={studentData.Samester}
          onChange={handleInputChange}
        />
        <label>Gender</label>
        <input
          type="text"
          name="Gender"
          value={studentData.Gender}
          onChange={handleInputChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="Address"
          value={studentData.Address}
          onChange={handleInputChange}
        />
        <label>Session</label>
        <input
          type="text"
          name="Session"
          value={studentData.Session}
          onChange={handleInputChange}
        />
        <label>Phone</label>
        <input
          type="text"
          name="Phone"
          value={studentData.Phone}
          onChange={handleInputChange}
        />
      <button type="submit">
         submit
        </button>
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}
      </form>
    </div>
    </div>
    </>
   
  );
};

export default UpdateStudentRecord;
