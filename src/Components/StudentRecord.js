import React, { useEffect, useState } from "react";

const StudentRecord = (props) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9yhynoqVVsO4v6jZHV49WhrMWWERp1M30auoijgOIa20nXBRGzdHzmbNg3cP882Vo_u-hnOMTIV-x1lkKEzlhMITROKIAmIA0ZwPg6NnwdOxkHsabiBqSTbH_UZyoWVXgYUD-tSaZMBGgV9E3XI0eKkJQvY1uxY5gWE1okWKtt95o3UVwWaTh015LeubzbBvqX1J0_9IO9kilz1AbnlSNbrI9Y-L5CLgLcfDuTxVIzTkdfGiHR4qyzTmeIoGU6KvR2AT0cAk8HegY1ZUGLv5QGKn_TY59Y7MuPsTX1k7OzZfMLK3oCXHoRxgBZTWBtMTHx4i1HlYAf7MhLiRW1O0axRgRVNyDaDpNvk96hBnLJhkqJV_QIb1-3wuq4ybLMBNpXdrzriEbTTLZ6Mq49ni_1bFl04_rqzovsnnVNRNlX6qqZEp_v0NPxk3mjlfBO5pBL10n4DORs3NmgLlPtjFWgA7JEYGwS7EadGoW1LeYsD4E0Vb-RnZx1F60a3c0Yo-eHLwYvOGzaGHByoCrwe0vRoqWGkOzta6hXgpk8bYuRNSxtpz6ZzRYlQQSQbzryMx8Mvmk6pfn2aFNY6U5tbcua5uAqul2cjihtDBRZWGgnub2JO23iwI6AAUlA7wipdaQSqCNZUKo2grodEl9KDMOiTomBzPNm72uBVK5Lrwqh-_JQ";
  useEffect(() => {
    props.setProgress(100);
    fetch("http://localhost:5112/api/Student___Record/All", {
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
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [token]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
   <div className="mainallrecord">
    <div className="tbl">
      <h3>All Student Records</h3>
      <table className="studenttable" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Session</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dep}</td>
              <td>{student.samester}</td>
              <td>{student.gender}</td>
              <td>{student.address}</td>
              <td>{student.session}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default StudentRecord;
