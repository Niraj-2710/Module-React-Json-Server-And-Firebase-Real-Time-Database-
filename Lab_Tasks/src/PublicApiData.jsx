import axios from "axios";
import React, { useEffect, useState } from "react";

const EmployesData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  const spinnerStyle = {
    margin: "50px auto",
    border: "5px solid lightgray",
    borderTop: "5px solid #3498db",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  };

  const keyframesStyle = ` @keyframes spin { to { transform: rotate(360deg); }} `;


  if (loading)
    return (
      <>
        <style>{keyframesStyle}</style>
        <div style={spinnerStyle}></div>
      </>
    );
  if (error)
    return (
      <div style={{ color: "red", marginTop: "20px" }}>Error: {error}</div>
    );
  return (
    <div>
      <h2>Employes Data</h2>
      <table border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployesData;
