import React from 'react';
import '../style/avgTabela.css';

const AvgTabela = (
    <div>
        <div class="registro-container">
            <div class="registro-header">
                <h3>TODAS AS MÉDIAS</h3>
                <div class="registro-header-right">
                    <select id="">
                        <option value="" disabled selected hidden>Filtro</option>
                        <option>Menor valor</option>
                        <option>Maior valor</option>
                        <option>Mais recente</option>
                        <option>Maior valor</option>
                    </select>
                    <input type="search" placeholder="ID do Sensor"/>
                </div>
            </div>
            <table class="table-registro">
                <tr>
                    <th>ID do Equipamento</th>
                    <th>Data</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>EQ-12495</td>
                    <td>12/03/2023</td>
                    <td>78.3</td>
                </tr>
                <tr>
                    <td>EQ-12492</td>
                    <td>12/03/2023</td>
                    <td>8.8</td>
                </tr>
            </table>
        </div>
    </div>
);

export default AvgTabela;