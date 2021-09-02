import React from 'react';
import './Login.css';

const Login = ({
  onLogin
}) => {

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChangePassword = event => setPassword(event.target.value);

  const handleChangeEnail = event => setEmail(event.target.value);

  const handleSubmitButton = event => {
    event.preventDefault();
    onLogin({ password, email});
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <h1 className="login__greeting-text">Добро пожаловать!</h1>
        <form className="login__form" onSubmit={handleSubmitButton} noValidate >

          <div className="login__input-wrapper">    
            <input
              id="input_type_email"
              type="url"
              name="email"
              value={email}
              className="login__input login__input_type_email"
              placeholder=" "
              onChange={handleChangeEnail}
              required
            />
            <label className="login__label">E-mail</label>
          </div>

          <div className="login__input-wrapper">
            <input
              id="input_type_password"
              type="password"
              name="password"
              value={password}
              className="login__input login__input_type_password"
              placeholder=" "
              onChange={handleChangePassword}
              required
            />
            <label className="login__label">Пароль</label>
          </div>

          <button className="button login__button">Войти</button>

        </form>
        
      </div>
    </section>
  );
}

export default Login;