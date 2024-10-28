import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import '../../style/sessionForm.css';

const LoginForm = () =>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const [valores, setValores] = useState('');

    const navegacao = useNavigate();
    const navegar = (pagina) => {
        navegacao(pagina);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            console.log("1 - Enviando requisição de login");            
            const response = await axios.post('http://localhost:8080/users/login', {
                email,
                senha,
            }, []);

            console.log("2 - Resposta recebida:", response);
            if(response.status === 200){
                sessionStorage.setItem('userEmail', email);
                console.log(response.data.userName);
                sessionStorage.setItem('userName', response.data.userName);
                sessionStorage.setItem('loggedIn', true);
                navegar('/home');
            } else {
                console.log('4 - Status não é 200, status recebido:', response.status);
            }

            console.log("Bombom")
        } catch (error) {
            setMessage('Erro ao tentar login. Tente Novamente.');
            console.error('Erro no login:', error);

            if (error.response) {
                console.error('Mensagem do servidor:', error.response.data.message);
            } else if (error.request) {
                console.error('Sem resposta do servidor');
            } else {
                console.error('Erro ao configurar a requisição:', error.message);
            }
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
                    <span className="forgot-password">Esqueci minha senha</span>
                </div>
                {<p className='log-message'>message</p> && <p className='log-message'>{message}</p>}
                <div className="button-box">
                    <button className="model-button solid-button" type='submit'>Entrar</button>
                    <button className="model-button wired-butotn" onClick={() => navegar('/cadastro')}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;