import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  
  const token = "CfDJ8AoeQFbgTAJMnj6hxPqS9yhynoqVVsO4v6jZHV49WhrMWWERp1M30auoijgOIa20nXBRGzdHzmbNg3cP882Vo_u-hnOMTIV-x1lkKEzlhMITROKIAmIA0ZwPg6NnwdOxkHsabiBqSTbH_UZyoWVXgYUD-tSaZMBGgV9E3XI0eKkJQvY1uxY5gWE1okWKtt95o3UVwWaTh015LeubzbBvqX1J0_9IO9kilz1AbnlSNbrI9Y-L5CLgLcfDuTxVIzTkdfGiHR4qyzTmeIoGU6KvR2AT0cAk8HegY1ZUGLv5QGKn_TY59Y7MuPsTX1k7OzZfMLK3oCXHoRxgBZTWBtMTHx4i1HlYAf7MhLiRW1O0axRgRVNyDaDpNvk96hBnLJhkqJV_QIb1-3wuq4ybLMBNpXdrzriEbTTLZ6Mq49ni_1bFl04_rqzovsnnVNRNlX6qqZEp_v0NPxk3mjlfBO5pBL10n4DORs3NmgLlPtjFWgA7JEYGwS7EadGoW1LeYsD4E0Vb-RnZx1F60a3c0Yo-eHLwYvOGzaGHByoCrwe0vRoqWGkOzta6hXgpk8bYuRNSxtpz6ZzRYlQQSQbzryMx8Mvmk6pfn2aFNY6U5tbcua5uAqul2cjihtDBRZWGgnub2JO23iwI6AAUlA7wipdaQSqCNZUKo2grodEl9KDMOiTomBzPNm72uBVK5Lrwqh-_JQ"; 


  props.setProgress(10);

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Are You Sure You Want to Update This Student?");
    if (!isConfirmed) {
      return; 
    }
    setError(null);
    setSuccess(null);

    
    fetch(`http://localhost:5112/api/Student___Record/ID?Id=${studentId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: parseInt(studentId), 
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
        setTimeout(() => {
          navigate("/all-student-data");
        }, 2000);
      });
  };

  const handleInputChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

 
  props.setProgress(100);

  return (
    <div className="maindiv">
      <div className="updatetext">
        <h3>Student Record Management System</h3>
        <div className="uplist">
          <ul>
            <li>
              <h5><i className='bx bxs-right-arrow'></i> Review Changes Before Submitting</h5>
              <p>Encourage users to review the changes they’ve made before finalizing the update.</p>
            </li>
            <li>
              <h5><i className='bx bxs-right-arrow'></i> Undo Option for Recent Changes</h5>
              <p>If your system allows it, mention the possibility of undoing or reverting the changes within a certain timeframe after the update.</p>
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
            required
          />
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={studentData.Name}
            onChange={handleInputChange}
            required
          />
          <label>Department</label>
          <input
            type="text"
            name="Dep"
            value={studentData.Dep}
            onChange={handleInputChange}
            required
          />
          <label>Samester</label>
          <input
            type="text"
            name="Samester"
            value={studentData.Samester}
            onChange={handleInputChange}
            required
          />
          <label>Gender</label>
          <input
            type="text"
            name="Gender"
            value={studentData.Gender}
            onChange={handleInputChange}
            required
          />
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={studentData.Address}
            onChange={handleInputChange}
            required
          />
          <label>Session</label>
          <input
            type="text"
            name="Session"
            value={studentData.Session}
            onChange={handleInputChange}
            required
          />
          <label>Phone</label>
          <input
            type="text"
            name="Phone"
            value={studentData.Phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
          {error && <div style={{ color: "red" }}>Error: {error}</div>}
          {success && <div style={{ color: "green" }}>{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default UpdateStudentRecord;
