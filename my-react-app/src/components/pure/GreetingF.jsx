import React, {useState} from "react";

const GreetingF = (props) => {

    //
    const [age,setage] = useState(29);

    const birthDay = ()=> {
        //metodo actualiza
        setage(age +1);
    }
  return (
    <div>
      <h1>
        Hola {props.name} desde componente funcional
      </h1>
      <h2>
        Tu edad es de: {age}
      </h2>
      <div>
        <button onClick={birthDay}>Cumplir años</button>
      </div>
    </div>
  );
};


export default GreetingF;
