import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartColumn} from '@fortawesome/free-solid-svg-icons';
import {faFileArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

import '../style/sidebarMenu.css'

const SidebarMenu = () => {
    const navegacao = useNavigate();
    const local = useLocation();

    const estaNaPagina = (path) => local.pathname === path;
    const navegar = (pagina) => {
        navegacao(pagina);
    }

    return (
        <aside className="sidebar">
        <div className="sidebar-header">
            <img src="./logo.png"/>
        </div>
        <ul className="sidebar-content">
            <li onClick={() => navegar('/')} style={{
                backgroundColor: estaNaPagina('/') ? '#d1d1d1' : ''
            }}>
                <FontAwesomeIcon icon={faChartColumn} className='sidebarIcon'/>
                <span>Dashboard</span>
            </li>
            <li onClick={() => navegar('/upload')} style={{
                backgroundColor: estaNaPagina('/upload') ? '#d1d1d1' : ''
            }}>
                <FontAwesomeIcon icon={faFileArrowUp} className='sidebarIcon'/>
                <span>Inserir Registros</span>
            </li>
        </ul>
        <ul className="sidebar-footer">
            <li>
                <FontAwesomeIcon icon={faRightFromBracket} className='sidebarIcon'/>
                <span>Logout</span>
            </li>
        </ul>
    </aside>
    )};

export default SidebarMenu;