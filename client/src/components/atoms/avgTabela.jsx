import React, {useState, useEffect} from 'react';
import '../../style/avgTabela.css';

const AvgTabela = ({ timeRange }) => {
    const [valores, setValores] = useState([]);
    const [filter, setFilter] = useState("ASC");

    const handleRangeChange = (event) => {
        setFilter(event.target.value);
    };

    const fetchData = async (range, filter) => {
        try {
            const response = await fetch(`http://localhost:8080/highestData/data/${range}/${filter}`);
            const data = await response.json();
            console.log(data);
            setValores(data);
        } catch (error) {
            console.error('Erro ao buscar os valores:', error.message);
            console.error('Stack trace:', error.stack);
            throw new Error(`Erro no banco de dados: ${error.message}`);
        }
    };

    useEffect(() => {
        if (timeRange && filter) {
          fetchData(timeRange, filter);
        }
    }, [timeRange, filter]);

    return (
        <div>
            <div className="registro-header">
                <h3>TODAS AS MÉDIAS</h3>
                <div className="registro-header-right">
                    <select onChange={handleRangeChange} value={filter}>
                        <option disabled default hidden>Filtro</option>
                        <option value="ASC">Menor valor</option>
                        <option value="DESC">Maior valor</option>
                    </select>
                    <input type="search" placeholder="ID do Sensor"/>
                </div>
            </div>
            <div className="registro-container all-avg">
                <table className="table-registro">
                    <thead>
                        <tr>
                            <th>ID do Equipamento</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {valores.length > 0 ? (
                            valores.map((valor, index) => (
                                <tr key={index}>
                                    <td>{valor.equipmentId}</td>
                                    <td>{valor.avg_value}</td>
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
        </div>
    )
};

export default AvgTabela;