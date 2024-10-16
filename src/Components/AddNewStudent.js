import React, { useState } from "react";

const AddStudent = (props) => {
  const [student, setStudent] = useState({
    Name: "",
    Dep: "",
    Samester: "",
    Gender: "",
    Address: "",
    Session: "",
    Phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9ygK4jpifAWL_YnWy0ER2wtT6y_2MWlnGkhcc2zkHnlbmMDL5bk5xTCJkGKFrB7HFarfnjlUk0tcIqK1_nF2z0ZeEUsZ6-7mkUedfWL1oseQek7qRTA0lUHXXiC0HhHtyXfcL8zQ_J7AaQN5GcMeWGFD52WFR2xSNkGTYnY3aQ0K7Slb2TIk81brgkKnvl8IYnQLLrExl5LUNBJbhpBZ3pgc3HGY-ddSMpFnw3cQbSSblzaLqI5A8dN62hwHBMyJ3dZQpm-zuN-gIJI6SdoGK8CfcXPuhWqx3gHszgb-PWD2DLrlq4puAywt_wG-tosRb684q3PkTSl3C2Q-tWqKoC0VnuO_V9XJiJ4qQyocakAH6XdZoz-TYRFAMVpO6jJ_RlVQBJoyK2fqocRVWHucKT147NElg54isQMAMJvEFuZ9HUvziotLEsrc3DJXCWvI22y-fWBJt04z1XPyR12d8IgOtPLcE79Jwy94wJIBULHWLvF1o2UHA0ofnpZkH7FLEo_c-3T9ndtjXGUMg5sDVpdI0t9ndICAONaUixJnNfjSb9vwvQTolLLtLOyDYh_NWcN_hjqrZ9Oem0hOMfMIP9NDDyr133LbS4x7Ff_1GXJrALz-4odL71aStfcWtMgRGYMQAinZ6D8_LxV0T1raUHiJ9n_WYYLQC47CY_qJ7eEclw";
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    setLoading(false);
    setError(null);
    setSuccess(null);
    fetch("http://localhost:5112/api/Student___Record/Add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then(() => {
        setSuccess("Student added successfully!");
        setStudent({
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
  return (
<>
<div className="admain">
  <div className="addtext">
   <h3>Student Record Management System</h3>
   <div className="addlist">
    <ul>
      <li>
        <h5><i class='bx bxs-right-arrow'></i>Visual Consistency</h5>
        <p>Maintain consistent styling with other parts of the application (e.g., consistent button styles, form field styles, font sizes).</p>
      </li>
      <li>
        <h5><i class='bx bxs-right-arrow'></i>Progress Indicators</h5>
        <p>If the form is long, consider grouping fields logically and using collapsible sections or tabs for better organization.</p>
      </li>
      <li>
        <h5><i class='bx bxs-right-arrow'></i> Visual Validation</h5>
        <p>Provide immediate visual feedback for form validation.</p>
      </li>
    </ul>
   </div>
  </div>
  <div className="addstudent">
      <h4>Add New Student</h4>
      <form className="field" onSubmit={handleAddStudent}>
        <div className="addinput">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={student.Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="addinput" >
          <label>Department</label>
          <input
            type="text"
            name="Dep"
            value={student.Dep}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="addinput">
          <label>Semester</label>
          <input
            type="text"
            name="Samester"
            value={student.Samester}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="addinput">
          <label>Gender</label>
          <input
            type="text"
            name="Gender"
            value={student.Gender}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="addinput">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={student.Address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="addinput">
          <label>Session</label>
          <input
            type="text"
            name="Session"
            value={student.Session}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="addinput">
          <label>Phone</label>
          <input
            type="text"
            name="Phone"
            value={student.Phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Student</button>
        {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {success && <div className="clr">{success}</div>}
      </form>
    </div>
</div>
</>
  );
};

export default AddStudent;
