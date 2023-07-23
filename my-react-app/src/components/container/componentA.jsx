import React, { useState } from "react";
import { Contacto } from "../../models/contact.class";
import ComponentB from "../pure/componentB";

const ComponentA = () => {
  const [isActive, setIsActive] = useState(true);

  const changeStatus = () => {
    if (isActive === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  let defaultContact = new Contacto(
    "William",
    "Esteban",
    "sr.w@hotmail.com",
    isActive
  );

  return (
    <div>
      <div>Información de Contacto:</div>
      <ComponentB contacto={defaultContact} />
      <button
        onClick={changeStatus}
        style={{ fontSize: "16px", padding: "10px 20px" }}
      >
        Change Status
      </button>
    </div>
  );
};

export default ComponentA;
