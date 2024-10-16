import React, { useEffect, useState } from "react";

const StudentRecord = (props) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "CfDJ8AoeQFbgTAJMnj6hxPqS9ygK4jpifAWL_YnWy0ER2wtT6y_2MWlnGkhcc2zkHnlbmMDL5bk5xTCJkGKFrB7HFarfnjlUk0tcIqK1_nF2z0ZeEUsZ6-7mkUedfWL1oseQek7qRTA0lUHXXiC0HhHtyXfcL8zQ_J7AaQN5GcMeWGFD52WFR2xSNkGTYnY3aQ0K7Slb2TIk81brgkKnvl8IYnQLLrExl5LUNBJbhpBZ3pgc3HGY-ddSMpFnw3cQbSSblzaLqI5A8dN62hwHBMyJ3dZQpm-zuN-gIJI6SdoGK8CfcXPuhWqx3gHszgb-PWD2DLrlq4puAywt_wG-tosRb684q3PkTSl3C2Q-tWqKoC0VnuO_V9XJiJ4qQyocakAH6XdZoz-TYRFAMVpO6jJ_RlVQBJoyK2fqocRVWHucKT147NElg54isQMAMJvEFuZ9HUvziotLEsrc3DJXCWvI22y-fWBJt04z1XPyR12d8IgOtPLcE79Jwy94wJIBULHWLvF1o2UHA0ofnpZkH7FLEo_c-3T9ndtjXGUMg5sDVpdI0t9ndICAONaUixJnNfjSb9vwvQTolLLtLOyDYh_NWcN_hjqrZ9Oem0hOMfMIP9NDDyr133LbS4x7Ff_1GXJrALz-4odL71aStfcWtMgRGYMQAinZ6D8_LxV0T1raUHiJ9n_WYYLQC47CY_qJ7eEclw";
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
