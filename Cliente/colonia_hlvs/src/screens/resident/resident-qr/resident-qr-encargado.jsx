import IconButton from '../../../components/buttons/IconButton/IconButton';
import './resident-qr.css'
import Menu from '../../../components/menu/menu';
import QRCode from "qrcode";


//material
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { useEffect } from 'react';
import Navbar from '../../../components/navbar/navbar';
import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';


function ResidentQr(){

    const handlerQrCodeChanger = () => {

        let ranmdom = Math.floor(Math.random() * 1000);
        let newQrText = "new qr text" + ranmdom;
        console.log(newQrText)

        QRCode.toCanvas(document.getElementById('canvas'), newQrText, { toSJISFunc: QRCode.toSJIS, width: 300 }, function (error) {
            if (error) console.error(error)
                console.log('success!');
        })

        
    }

    useEffect(() => {
        handlerQrCodeChanger()
    })

    return (
        <>
            <Navbar/>
            <div className='father'>
                <div className='Left'>
                    <h2> Tu codigo-QR</h2>
                    <div className='Hint'>
                        <ErrorOutlineRoundedIcon className='icon'/>
                        Su codigo QR se ha generado exitosamente, acerquese al escaner para ingresar.
                    </div>
                    <canvas id='canvas' className='myQR'/>
                    <IconButton icon={<QrCode2RoundedIcon/>} text='Refrescar' onClick={handlerQrCodeChanger}/>
                </div>
                <div className='Right'>
                    <Menu buttons={residentInChargeBtn} className='funca'/>
                </div>
            </div>
        </>
    )
}

export default ResidentQr;