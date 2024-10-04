import React from 'react'
import '../style/kpiMedias.css'

const KpiMedias = () => {
    return (
        <div className="container-caixa">
        <div className="caixa">
            <h3>MAIORES MÉDIAS</h3>
            <table>
                <tr>
                    <th>ID Sensor</th>
                    <th>Média</th>
                </tr>
                <tr>
                    <td>EQ-12492</td>
                    <td>78.3</td>
                </tr>
                <tr>
                    <td>EQ-12492</td>
                    <td>78.3</td>
                </tr>
                <tr>
                    <td>EQ-12492</td>
                    <td>78.3</td>
                </tr>
                <tr>
                    <td>EQ-12492</td>
                    <td>78.3</td>
                </tr>
                <tr>
                    <td>EQ-12492</td>
                    <td>78.3</td>
                </tr>
            </table>
            <div className="see-more">
                <span>Ver mais</span>
            </div>
        </div>
        <div className="caixa">
            <h3>MENORES MÉDIAS</h3>

        </div>
        <div className="caixa">
            <h3>MAIORES VALORES REGISTRADOS</h3>

        </div>
    </div>
)};

export default KpiMedias;