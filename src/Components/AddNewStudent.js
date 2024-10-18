import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate();

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9yhynoqVVsO4v6jZHV49WhrMWWERp1M30auoijgOIa20nXBRGzdHzmbNg3cP882Vo_u-hnOMTIV-x1lkKEzlhMITROKIAmIA0ZwPg6NnwdOxkHsabiBqSTbH_UZyoWVXgYUD-tSaZMBGgV9E3XI0eKkJQvY1uxY5gWE1okWKtt95o3UVwWaTh015LeubzbBvqX1J0_9IO9kilz1AbnlSNbrI9Y-L5CLgLcfDuTxVIzTkdfGiHR4qyzTmeIoGU6KvR2AT0cAk8HegY1ZUGLv5QGKn_TY59Y7MuPsTX1k7OzZfMLK3oCXHoRxgBZTWBtMTHx4i1HlYAf7MhLiRW1O0axRgRVNyDaDpNvk96hBnLJhkqJV_QIb1-3wuq4ybLMBNpXdrzriEbTTLZ6Mq49ni_1bFl04_rqzovsnnVNRNlX6qqZEp_v0NPxk3mjlfBO5pBL10n4DORs3NmgLlPtjFWgA7JEYGwS7EadGoW1LeYsD4E0Vb-RnZx1F60a3c0Yo-eHLwYvOGzaGHByoCrwe0vRoqWGkOzta6hXgpk8bYuRNSxtpz6ZzRYlQQSQbzryMx8Mvmk6pfn2aFNY6U5tbcua5uAqul2cjihtDBRZWGgnub2JO23iwI6AAUlA7wipdaQSqCNZUKo2grodEl9KDMOiTomBzPNm72uBVK5Lrwqh-_JQ";
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Are You Sure You Want to Add This Student?");
    if (!isConfirmed) {
      return; 
    }
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
        setTimeout(() => {
          navigate("/all-student-data");
        }, 2000);
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
