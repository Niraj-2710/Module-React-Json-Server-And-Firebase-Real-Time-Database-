import axios from "axios";
import React, { useEffect, useState } from "react";

const JsonCrudData = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({ name: "", age: "" });
  const [id, setId] = useState("");

  useEffect(() => { displayData() }, []);

  const displayData = () => {
    axios.get("http://localhost:3001/users").then((res) => setData(res.data));
    setInfo({ name: "", age: "" });
    setId("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      axios
        .put(`http://localhost:3001/users/${id}`, info)
        .then(() => console.log("Updated Successfully"));
    } else {
      axios
        .post("http://localhost:3001/users", info)
        .then(() => console.log("Inserted Successfully"));
    }
    displayData();
    setInfo({ name: "", age: "" });
    setId("");
  };

  const delData = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then(() => {
      console.log("Deleted Successfully");
      displayData();
    });
  };

  const updateData = (id) => {
    axios
      .patch(`http://localhost:3001/users/${id}`)
      .then((res) => setInfo(res.data));
    setId(id);
  };

  return (
    <div>
      <h2>Json Crud Data</h2>

      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" placeholder="Enter Name" value={info.name} onChange={handleChange} />
        <br />

        <label htmlFor="">Age: </label>
        <input type="number" name="age" placeholder="Enter Age" value={info.age} onChange={handleChange} />
        <br /><br />
        <input type="submit" value="Save" />
      </form>
      <br /><br />

      <table border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, In) => {
            return (
              <tr key={In}>
                <td>{In + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => updateData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JsonCrudData;
