import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="" key="default">No Contact Selected</option>
      {contacts.map((contact, index) => (
        <option value={contact.name} key={index}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
