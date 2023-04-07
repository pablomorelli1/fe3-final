import React, { useState } from "react";
import './Form.css'

const Form = () => {

  const [user, setUser] = useState({
    fullName: '',
    email: ''
  })

  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const [valid, setValid] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (user.fullName.length > 5 && regex.test(user.email)) {
      setValid(true)
      setError(false)
    } else {
      setValid(false)
      setError(true)
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese su nombre completo' value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} />
        <input type="text" placeholder='Ingrese su email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <button className="submitButton">Enviar</button>
      </form>

      {error ? <p className='error'>Por favor verifique su información nuevamente </p> : null}
      {valid && <p className="validInfo">Gracias {user.fullName}, te contactaremos cuanto antes vía mail</p>}

    </div>
  );
};

export default Form;
