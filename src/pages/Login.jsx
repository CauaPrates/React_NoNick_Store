import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link se estiver usando React Router
import noNickLogo from '../assets/noNickLogo 2.svg';

export const Login = () => {
  const processForm = () => {
    // Lógica de processamento do formulário aqui
    console.log('Formulário processado!');
  };

  return (
    <div>
      <div className="logoContainer">
        <Link to="/Html/Home.html">
          <img src={noNickLogo} className="logo" alt="NoNick" />
        </Link>

        <div className="welcomeContainer">
          <h2>Seja bem-vindo!!</h2>
          <p>
            Você já tem uma conta?<br />
            Acesse para efetuar suas compras
          </p>
        </div>

        <div className="buttomContainer">
          <Link to="/Html/Login.html" className="aButton">
            <button>Entrar</button>
          </Link>

          <a href="#">Estou com problemas</a>
        </div>

        <div className="rightContainer">
          <div className="LoginTittle">
            <h2>Faça seu registro</h2>
            <p>Preencha seus dados</p>
          </div>

          <form action="" id="noteForm" method="post">
            <label htmlFor="username"></label>
            <input
              type="text"
              placeholder="Usuário: "
              id="username"
              name="username"
              minLength="5"
              maxLength="10"
              required
            /><br/><br/>

            <label htmlFor="e-mail"></label>
            <input
              type="text"
              placeholder="E-mail:"
              id="e-mail"
              name="e-mail"
              maxLength="50"
              required
            /><br/><br/>

            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Senha:"
              id="password"
              name="password"
              minLength="8"
              maxLength="15"
              required
            /><br/><br/>
          </form>

          <div className="buttonRContainer">
            <button type="button" onClick={processForm}>
              Cadastrar
            </button>
          </div>
          <div id="result"></div>
        </div>
      </div>
    </div>
  );
};
