import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import '../../style/sessionForm.css';

const CadastroForm = () => {
    const navegacao = useNavigate();
    const navegar = (pagina) => {
        navegacao(pagina);
    }
    
    return (
        <div class="modal-wrapper">
            <div class="modal-header">
                <img src="./logo.png"/>
            </div>
            <div class="input-container">
                <div class="input-box">
                    <FontAwesomeIcon icon={faCircleUser} className='formIcon'/>
                    <input type="text" placeholder="Nome Completo"/>
                </div>
                <div class="input-box">
                    <FontAwesomeIcon icon={faEnvelope} className='formIcon'/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div class="input-box">
                    <FontAwesomeIcon icon={faKey} className='formIcon'/>
                    <input type="password" placeholder="Senha"/>
                </div>
                <div class="input-box">
                    <FontAwesomeIcon icon={faKey} className='formIcon'/>
                    <input type="password" placeholder="Repetir a senha"/>
                </div>
                <div class="input-box">
                    <FontAwesomeIcon icon={faKey} className='formIcon'/>
                    <input placeholder="Token"/>
                </div>
            </div>
            <div class="button-box">
                <button class="model-button solid-button">Cadastrar</button>
                <button class="model-button wired-butotn" onClick={() => navegar('/')}>Voltar</button>
            </div>
        </div>
    )
}

export default CadastroForm;