import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import '../../style/sessionForm.css';

const LoginForm = () =>{
    const navegacao = useNavigate();
    const navegar = (pagina) => {
        navegacao(pagina);
    }

    return (
            <div className="modal-wrapper">
            <div className="modal-header">
                <img src="./logo.png"/>
            </div>
            <div className="input-container">
                <div className="input-box">
                    <FontAwesomeIcon icon={faEnvelope} className='formIcon'/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input-box">
                    <FontAwesomeIcon icon={faKey} className='formIcon'/>
                    <input type="password" placeholder="Senha"/>
                </div>
                <span className="forgot-password">Esqueci minha senha</span>
            </div>
            <div className="button-box">
                <button className="model-button solid-button">Entrar</button>
                <button className="model-button wired-butotn" onClick={() => navegar('/cadastro')}>Cadastrar</button>
            </div>
        </div>
    )
}

export default LoginForm;