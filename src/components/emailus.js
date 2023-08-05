import React, { useState } from "react";
import "./emailus.css";

const Emailus = () => {
  return (
    <div className="email-us">
      <form className="form-style-9">
        <ul className="form-list">
          <li>
            <input
              type="text"
              name="field1"
              className="field-style field-split align-left"
              placeholder="Name"
            />
            <input
              type="email"
              name="field2"
              className="field-style field-split align-right"
              placeholder="Family Name"
            />
          </li>
          <li>
            <input
              type="text"
              name="field1"
              className="field-style field-split align-left"
              placeholder="Phone"
            />
            <input
              type="email"
              name="field2"
              className="field-style field-split align-right"
              placeholder="Email"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              className="field-style field-full align-none"
              placeholder="Subject"
            />
          </li>
          <li>
            <textarea
              name="field5"
              className="field-style"
              placeholder="Message"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Emailus;
