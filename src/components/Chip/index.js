import React, { useState } from "react";
import "./styles.css";

export default function Chip() {
  const [value, setValue] = useState("");
  const [emails, setEmail] = useState([]);
  const [error, setError] = useState("");

  function handleKeyDown(evt) {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();
      var email = value.trim();
      if (email && isValid(email)) {
        setValue("");
        setEmail((oldValue) => [...oldValue, email]);
      }
    }
  }

  function handleDelete(toBeRemoved) {
    let newEmails = emails.filter((emailIndex) => emailIndex !== toBeRemoved);
    setEmail(newEmails);
  }

  function isEmail(email) {
    return /[\w\d-]+@[\w\d-]+[\w\d-]+/.test(email);
  }

  function isInList(email) {
    return emails.includes(email);
  }

  function isValid(email) {
    var error = null;

    if (!isEmail(email)) {
      if (email === "") {
        setError("");
      } else error = `${email} is not a valid email address.`;
    } else {
      setError("");
    }

    if (isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (error) {
      setError(error);

      return false;
    }

    return true;
  }

  return (
    <div className="wrapper">
      {emails.map((emailItem) => (
        <div className="tag-item" key={emailItem}>
          {emailItem}

          <button className="button" onClick={() => handleDelete(emailItem)}>
            &times;
          </button>
        </div>
      ))}

      <input
        className={"input" + (error && " has-error")}
        placeholder="Type the e-mail here"
        value={value}
        onChange={(e) => {
          isValid(e.target.value);
          setValue(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e.nativeEvent)}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}
