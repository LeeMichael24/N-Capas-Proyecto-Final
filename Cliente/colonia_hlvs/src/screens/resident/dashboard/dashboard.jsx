import './dashboard.css'
import ButtonMenu from '../../../components/menu/menuButtom/menuButtom';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { Icon } from '@mui/material';

function dashboard(){

    return(
        <div className='father'>
            <div className='Left'>
                <h2> Bienvenido</h2>
                <button className='QR_Button'>
                    <QrCode2RoundedIcon className='icon'/>
                    <span>Generar QR</span>
                </button>
                    <h4> Presione el boton para generar el codigo-QR</h4>
             </div>
             <div className='Right'>
                Aqui va el menu de @Limon.
             </div>
        </div>
    )
}

export default dashboard;