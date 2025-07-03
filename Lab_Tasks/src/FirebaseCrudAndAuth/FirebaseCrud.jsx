import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { addDoc,collection,deleteDoc,doc,getDoc,onSnapshot,query,updateDoc } from "firebase/firestore";

const FirebaseCrud = () => {
  const [data, setData] = useState({ name: "", age: "" });
  const [id, setId] = useState("");
  const [dataList, setDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id == "") {
      await addDoc(collection(db, "users"), data);
    } else {
      await updateDoc(doc(db, "users", id), data);
    }
    setData({ name: "", age: "", salary: "" });
    setId("");
  };

  useEffect(() => {
    const q = query(collection(db, "users"));
    const result = onSnapshot(q, (item) => {
      let allArray = [];
      item.forEach((i) => {
        allArray.push({ ...i.data(), id: i.id });
      });
      setDataList(allArray);
    });
    return () => result();
  }, []);

  const delData = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  const editData = async (id) => {
    let res = await getDoc(doc(db, "users", id));
    setData(res.data());
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="Enter Name" value={data.name} onChange={handleChange} name="name" />
        <br /><br />
        <label htmlFor="">Age: </label>
        <input type="text" placeholder="Enter Age" value={data.age} onChange={handleChange} name="age" />
        <br /><br />
        <input type="submit" value={id != "" ? "Edit Data" : "Save Data"} />
      </form>
      <br /><br />
      <table border="2">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => { editData(i.id)}} >Edit</button>
                  <button onClick={() => {delData(i.id)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FirebaseCrud;
