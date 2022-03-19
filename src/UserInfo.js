import React, { useState, useContext } from "react";
import { AuthContext } from "./auth";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const onChange = (evt) => {
    setNewDisplayName(evt.target.value);
  };
  const save = () => {
    if (newDisplayName !== "") {
      user.updateProfile({ displayName: newDisplayName });
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={newDisplayName}
        onChange={onChange}
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={save}
      >
        Save display name
      </button>
    </div>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);
  if (auth.user === null) {
    return null;
  }

  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");
  const dn = displayName || alternativeDisplayName;

  return (
    <div>
      <p>Olá {dn}!</p>
      <FormDisplayName displayName={dn} user={auth.user} />
      <button className="btn btn-primary" onClick={auth.signout}>
        Sair!
      </button>
    </div>
  );
};
export default UserInfo;
