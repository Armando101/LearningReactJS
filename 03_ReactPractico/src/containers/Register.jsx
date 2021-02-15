import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }

  return (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleInput}
        />
        <input
          className="input"
          type="text"
          placeholder="Correo"
          name="email"
          onChange={handleInput}
        />
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleInput}
        />
        <button className="button">Registrarme</button>
      </form>
      <Link to="/login">Iniciar sesión</Link>
    </section>
  </section>
  )
}

const mapDispatchProps = {
  registerRequest
}

export default connect(null, mapDispatchProps)(Register)
