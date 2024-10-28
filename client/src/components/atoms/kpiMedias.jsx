import React, { useState, useEffect } from 'react'
import '../../style/avgTabela.css';
import '../../style/kpiMedias.css';

const KpiMedias = ({ timeRange }) => {
    const [valores, setValores] = useState([]);

    const fetchData = async (range) => {
        console.log(range)
        try {
            const response = await fetch(`http://localhost:8080/highestData/data/${range}`);
            const data = await response.json();
            console.log(data);
            setValores(data);
        } catch (error) {
            console.error('Erro ao buscar os valores:', error.message);  // Mensagem mais específica
            console.error('Stack trace:', error.stack);  // Stack trace para debugar
            throw new Error(`Erro no banco de dados: ${error.message}`);
        }
    };

    useEffect(() => {
        if (timeRange) {
          fetchData(timeRange);
        }
    }, [timeRange]);

    return (
        <div className="registro-container">
            <h3>MAIORES VALORES REGISTRADOS</h3>
            <table className='table-registro'>
                <thead>
                    <tr>
                        <th>ID Sensor</th>
                        <th>Período</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {valores.length > 0 ? (
                        valores.map((valor, index) => (
                            <tr key={index}>
                                <td>{valor.equipmentId}</td>
                                <td>{valor.periodo}</td>
                                <td>{valor.value}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>Carregando...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
)};

export default KpiMedias;