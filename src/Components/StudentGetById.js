import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentRecordById = (props) => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9yhynoqVVsO4v6jZHV49WhrMWWERp1M30auoijgOIa20nXBRGzdHzmbNg3cP882Vo_u-hnOMTIV-x1lkKEzlhMITROKIAmIA0ZwPg6NnwdOxkHsabiBqSTbH_UZyoWVXgYUD-tSaZMBGgV9E3XI0eKkJQvY1uxY5gWE1okWKtt95o3UVwWaTh015LeubzbBvqX1J0_9IO9kilz1AbnlSNbrI9Y-L5CLgLcfDuTxVIzTkdfGiHR4qyzTmeIoGU6KvR2AT0cAk8HegY1ZUGLv5QGKn_TY59Y7MuPsTX1k7OzZfMLK3oCXHoRxgBZTWBtMTHx4i1HlYAf7MhLiRW1O0axRgRVNyDaDpNvk96hBnLJhkqJV_QIb1-3wuq4ybLMBNpXdrzriEbTTLZ6Mq49ni_1bFl04_rqzovsnnVNRNlX6qqZEp_v0NPxk3mjlfBO5pBL10n4DORs3NmgLlPtjFWgA7JEYGwS7EadGoW1LeYsD4E0Vb-RnZx1F60a3c0Yo-eHLwYvOGzaGHByoCrwe0vRoqWGkOzta6hXgpk8bYuRNSxtpz6ZzRYlQQSQbzryMx8Mvmk6pfn2aFNY6U5tbcua5uAqul2cjihtDBRZWGgnub2JO23iwI6AAUlA7wipdaQSqCNZUKo2grodEl9KDMOiTomBzPNm72uBVK5Lrwqh-_JQ";
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
        setTimeout(() => {
          navigate("/all-student-data")
        },2000);
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
