import IconButton from '../../../components/buttons/IconButton/IconButton';
import './resident-qr.css'
import Menu from '../../../components/menu/menu';
import QRCode from "qrcode";


//material
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { Fab, useMediaQuery } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';



import { useEffect } from 'react';
import Navbar from '../../../components/navbar/navbar';
import residentButtons from '../../../assets/staticInfo/buttonsArray';


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

    const fabStyle = {
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#0d1b2a',
        '&:hover': {backgroundColor: '#D2E0FB'}
      };
      
    const matches = useMediaQuery('(max-width:768px)');

    const handleClick = () => {
        const element =  document.getElementById('hastaAbajoBaby');
        if (element) element.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Navbar/>
            {matches && (
                <Fab size='medium' color='primary' className='fab' aria-label='Ir al menu' sx={fabStyle} onClick={handleClick}>
                    <WidgetsIcon/>
                </Fab>
            )}
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
                <div className='Right' id='hastaAbajoBaby'>
                    <Menu buttons={residentButtons} className='funca'/>
                </div>
            </div>
        </>
    )
}

export default ResidentQr;