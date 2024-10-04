import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../style/csvUpload.css';

const CsvUpload = () => {
    return(
        <form className="csv-upload-container">
            <div>
                <h3>Upload arquivos</h3>
                <label htmlFor="csv-input" className="csv-label">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className='uploadIcon'/>
                    <span>Arraste o item aqui ou <b>Procure nos arquivos</b></span>
                    <input type="file" accept="csv/*" id="csv-input"/>
                </label>
                <span className="guide-text">Apenas arquivos ".csv" • Arquivos sem caracteres especiais</span>
            </div>
            <button className="upload-button">Enviar</button>
        </form>
    )
};

export default CsvUpload;