import IconButton from '../../../components/buttons/IconButton/IconButton';
import './resident-qr.css'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';

function ResidentQr(){
    return (
        <div className='father'>
            <div className='Left'>
                <h2> Tu codigo-QR</h2>
                <div className='Hint'>
                    <ErrorOutlineRoundedIcon className='icon'/>
                    Tu codigo-QR se ha generado correctamente, acercate al escaner para entrar.
                </div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='QR' className='myQR'/>
                {/* <Button className='slim_button'>
                    <QrCode2RoundedIcon className='button_icon'/>
                    Refrescar
                </Button> */}
                <IconButton icon={<QrCode2RoundedIcon/>} text='Refrescar'/>
             </div>
             <div className='Right'>

             </div>
        </div>
    )
}

export default ResidentQr;