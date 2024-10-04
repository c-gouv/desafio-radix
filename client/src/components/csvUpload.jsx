import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../style/csvUpload.css';

const CsvUpload = () => {
    const [file, setFile] = useState(null);
    
    const mudarArquivo = (e) => {
        setFile(e.target.files[0]);
    };

    const enviarArquivo = async (e) => {
        e.preventDefault();

        const portaApp= process.end.HOST_PORT;
        const hostApp= process.env.HOST_APP;
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(`http://${hostApp}:${portaApp}/upload`, formData, {
                headers: {
                    'Content Type': 'multipart/form-data'
                }
            });

            console.log('Arquivo subiu:', response.data);
        } catch(error){
            console.log('Deu erro no arquivo:', response.data)
        }
    }

    return(
        <form className="csv-upload-container" onSubmit={enviarArquivo}>
            <div>
                <h3>Upload arquivos</h3>
                <label htmlFor="csv-input" className="csv-label">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className='uploadIcon'/>
                    <span>Arraste o item aqui ou <b>Procure nos arquivos</b></span>
                    <input type="file" accept=".csv" id="csv-input" onChange={mudarArquivo} required/>
                </label>
                <span className="guide-text">Apenas arquivos ".csv" • Arquivos sem caracteres especiais</span>
            </div>
            <button className="upload-button">Enviar</button>
        </form>
    )
};

export default CsvUpload;