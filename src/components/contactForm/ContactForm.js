import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" value = {name} onChange={(e)=>setName(e.target.value)} required>
        </input>
      </div>
      <div>
        <label>Phone: </label>
        <input type = "tel" value = {phone} onChange={(e) => setPhone(e.target.value)} pattern="\\d{3}-\\d{3}-\\d{4}" required  ></input>
      </div>
      <div>
        <label>Email: </label>
        <input type = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)} required></input>
      </div>
      <button type = "submit">Add Contact</button>
    </form>
  );
};

