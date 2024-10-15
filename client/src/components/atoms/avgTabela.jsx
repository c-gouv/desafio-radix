import React from 'react';
import '../../style/avgTabela.css';

const AvgTabela = () => {
    return (
        <div>
            <div className="registro-container">
                <div className="registro-header">
                    <h3>TODAS AS MÉDIAS</h3>
                    <div className="registro-header-right">
                        <select>
                            <option disabled default hidden>Filtro</option>
                            <option>Menor valor</option>
                            <option>Maior valor</option>
                            <option>Mais recente</option>
                            <option>Maior valor</option>
                        </select>
                        <input type="search" placeholder="ID do Sensor"/>
                    </div>
                </div>
                <table className="table-registro">
                    <thead>
                        <tr>
                            <th>ID do Equipamento</th>
                            <th>Data</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default AvgTabela;