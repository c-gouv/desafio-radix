import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../atoms/header';
import SidebarMenu from '../atoms/sidebarMenu';

import AvgGraph from '../atoms/avgGraph';
import AvgTabela from '../atoms/avgTabela';
import KpiMedias from '../atoms/kpiMedias';
import '../../style/overviewHeader.css'
import '../../style/index.css'
import '../../style/kpiMedias.css'
import '../../style/graphAvg.css'

function Overview() {
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     const loggedIn = sessionStorage.getItem('loggedIn');
        
    //     if (!loggedIn) {
    //       navigate('/');
    //     }
    // }, [navigate]);

    const [timeRange, setTimeRange] = useState('1m');
    
    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    const handleRangeChange = (event) => {
        setTimeRange(event.target.value);
    };

    return (
        <>
        <Header/>
        <SidebarMenu/>
        <main>
            <div className='overview-container'>
                <h1>RESUMO</h1>
                <div className="right-header">
                    <span>Período:</span>
                    <select onChange={handleRangeChange} value={timeRange}>
                        <option value="24h">24 Horas</option>
                        <option value="48h">48 Horas</option>
                        <option value="1s">1 Semana</option>
                        <option value="1m">1 Mês</option>
                    </select>
                </div>
            </div>
            <div className='container-caixa'>
                <div className='graph-box'>
                    <h3>MAIORES MÉDIAS</h3>
                    <AvgGraph timeRange={timeRange} />
                </div>
                <KpiMedias timeRange={timeRange} />
            </div>
            <AvgTabela timeRange={timeRange} />
        </main>
        </>
    )
};

export default Overview;