import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    contactNumber: "",
    hotel: "",
    gender: "",
    textArea: ""
  });

  const onChnageHandler = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Thank you!");
    console.log(data);
  };

  return (
    <>
      <h1>Hotel Online Booking</h1>
      <form id="form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <lable>
            Name:-
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={data.name}
              onChange={onChnageHandler}
            />
          </lable>
        </div>

        <div className="form-control">
          <lable>
            Email:-
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={data.email}
              onChange={onChnageHandler}
            />
          </lable>
        </div>
        <div className="form-control">
          <lable>
            Age:-
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={data.age}
              onChange={onChnageHandler}
            />
          </lable>
        </div>

        <div className="form-control">
          <lable>
            Contact No:-
            <input
              type="number"
              name="contactNumber"
              value={data.contactNumber}
              onChange={onChnageHandler}
            />
          </lable>
        </div>

        <div class="form-control">
          <label>Please salect your gender :-</label>
          <label for="recommed-1">
            Male
            <input
              type="radio"
              id="recommed-1"
              name="recommed"
              value={data.gender}
            />
          </label>

          <label for="recommed-2">
            Female
            <input
              type="radio"
              id="recommed-2"
              name="recommed"
              value={data.gender}
            />
          </label>
        </div>

        <div className="form-control">
          <lable>Location:-</lable>
          <select
            name="location"
            value={data.location}
            onChange={onChnageHandler}
          >
            <option>Choose Your City</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Nanded</option>
            <option>Hydrabad</option>
          </select>
        </div>

        <div className="form-control">
          <lable>
            Salect Hotel:-
            <select name="hotel" value={data.hotel} onChange={onChnageHandler}>
              <option>Salect Your Hotel</option>
              <option>JW Marriott</option>
              <option>Grand Hyat</option>
              <option>Conrad</option>
              <option>City Pride</option>
              <option>Pride Plaza</option>
            </select>
          </lable>
        </div>

        <div class="form-control">
          <label for="comment">Any Personal requirment</label>

          <textarea
            name="comment"
            id="comment"
            placeholder="Enter your requirment here"
          ></textarea>
        </div>
        <div className="btn">
          <button type="submit">submit</button>
        </div>
      </form>

      {/* <h2> Booking Details :</h2>
      <table border="1" style={{width: "50%"}}>
        <tbody> 
        <tr>
            <th> Sr. No</th>
            <th> Name </th>
            <th> Email </th>
            <th> Age </th>
            <th> Conatct No </th>
            <th> Hotel Name </th>
            <th> City </th>
            <th> Requirment </th>
        </tr>
      
          
      {data.map((user, id)=>(
        
            <tr key={id} style={{textAlign: 'center'}}>
            <td> {id +1} </td>
            <td> {user.name} </td>
            <td> {user.email} </td>
            <td>{user.age}</td>
            <td> {user.contactNumber} </td>
            <td>{user.location}</td>
            <td> {user.hotel} </td>
           <td>{user.textArea}</td>
        </tr>
        
      ))}
      </tbody>
      </table> */}
    </>
  );
};

export default Form;
