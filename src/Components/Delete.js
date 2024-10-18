import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteStudentById = (props) => {
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9yhynoqVVsO4v6jZHV49WhrMWWERp1M30auoijgOIa20nXBRGzdHzmbNg3cP882Vo_u-hnOMTIV-x1lkKEzlhMITROKIAmIA0ZwPg6NnwdOxkHsabiBqSTbH_UZyoWVXgYUD-tSaZMBGgV9E3XI0eKkJQvY1uxY5gWE1okWKtt95o3UVwWaTh015LeubzbBvqX1J0_9IO9kilz1AbnlSNbrI9Y-L5CLgLcfDuTxVIzTkdfGiHR4qyzTmeIoGU6KvR2AT0cAk8HegY1ZUGLv5QGKn_TY59Y7MuPsTX1k7OzZfMLK3oCXHoRxgBZTWBtMTHx4i1HlYAf7MhLiRW1O0axRgRVNyDaDpNvk96hBnLJhkqJV_QIb1-3wuq4ybLMBNpXdrzriEbTTLZ6Mq49ni_1bFl04_rqzovsnnVNRNlX6qqZEp_v0NPxk3mjlfBO5pBL10n4DORs3NmgLlPtjFWgA7JEYGwS7EadGoW1LeYsD4E0Vb-RnZx1F60a3c0Yo-eHLwYvOGzaGHByoCrwe0vRoqWGkOzta6hXgpk8bYuRNSxtpz6ZzRYlQQSQbzryMx8Mvmk6pfn2aFNY6U5tbcua5uAqul2cjihtDBRZWGgnub2JO23iwI6AAUlA7wipdaQSqCNZUKo2grodEl9KDMOiTomBzPNm72uBVK5Lrwqh-_JQ";
    props.setProgress(10);
  const handleDeleteStudent = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Are You Sure You Want to Delete This Student?");
    if (!isConfirmed) {
      return; 
    }
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

         setTimeout(() => {
          navigate("/all-student-data"); 
        }, 2000);
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
