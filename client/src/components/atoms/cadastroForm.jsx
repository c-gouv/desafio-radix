import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import '../../style/sessionForm.css';

const CadastroForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [message, setMessage] = useState('');

    const navegacao = useNavigate();
    const navegar = (pagina) => {
        navegacao(pagina);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (senha !== repetirSenha) {
          setMessage('As senhas não correspondem. Tente novamente.');
          return;
        }
        console.log(nome, email, senha)
        try {
          const response = await axios.post('http://localhost:8080/users/register', {
            nome,
            email,
            senha,
          });

          sessionStorage.setItem('userEmail', response.data.email);
          sessionStorage.setItem('loggedIn', true);
        
          navegar('/home');
        } catch (error) {
          setMessage('Erro ao cadastrar usuário. Tente novamente.');
          console.error(error);
        }
    };
    
    return (
        <div className="modal-wrapper">
            <div className="modal-header">
                <img src="./logo.png"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className="input-box">
                        <FontAwesomeIcon icon={faCircleUser} className='formIcon'/>
                        <input
                        type="text"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faEnvelope} className='formIcon'/>
                        <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faKey} className='formIcon'/>
                        <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faKey} className='formIcon'/>
                        <input
                        type="password"
                        placeholder="Repetir a senha"
                        value={repetirSenha}
                        onChange={(e) => setRepetirSenha(e.target.value)}
                        required />
                    </div>
                </div>
                {<p className='log-message'>message</p> && <p className='log-message'>{message}</p>}
                <div className="button-box">
                    <button className="model-button solid-button" type='submit'>Cadastrar</button>
                    <button className="model-button wired-butotn" onClick={() => navegar('/')}>Voltar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastroForm;