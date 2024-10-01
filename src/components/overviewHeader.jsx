import React from 'react'
import '../style/overviewHeader.css'

const OverviewHeader = (
    <header>
        <h1>RESUMO</h1>
        <div class="right-header">
            <span>Período:</span>
            <select>
                <option value="24h">24 Horas</option>
                <option value="48h">48 Horas</option>
                <option value="1s">1 Semana</option>
                <option value="1m">1 Mês</option>
            </select>
        </div>
    </header>
);

export default OverviewHeader;