import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";


const ComponentB = ({ contacto }) => {

    return (
      <div>
        <h2>Name: {contacto.nombre}</h2>
        <h3>Last name: {contacto.apellido}</h3>
        <h4>Email: {contacto.email}</h4>
        <h5>Conection Status: {contacto.conectado ? "enable" : "disable"}</h5>
      </div>
    );
  };
  
  ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
  };
  
  export default ComponentB;