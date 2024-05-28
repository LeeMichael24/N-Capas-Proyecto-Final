import './dashboard.css'
import ButtonMenu from '../../../components/menu/menuButtom/menuButtom';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { useNavigate } from 'react-router-dom';

function dashboard(){

    const navigate = useNavigate('');
    const handleSubmit = () => {
        navigate ('/my-qr')
    }

    return(
        <div className='father' id='testDAD'>
            <div className='Left'>
                <h2> Bienvenido</h2>
                <button className='QR_Button' onClick={handleSubmit}>
                    <QrCode2RoundedIcon className='icon'/>
                    <span>Generar QR</span>
                </button>
                    <h4> Presione el boton para generar el codigo-QR</h4>
             </div>
             <div id='stay'>
                Aqui va el menu de @Limon.
             </div>
        </div>
    )
}

export default dashboard;