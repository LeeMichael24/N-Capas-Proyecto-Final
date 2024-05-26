import './resident-qr.css'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

function ResidentQr(){
    return (
        <div className='father'>
            <div className='Left'>
                <h2> Tu codigo-QR</h2>
                <div className='Hint'>
                    <ErrorOutlineRoundedIcon className='icon'/>
                    Tu codigo-QR se ha generado correctamente, acercate al escaner para entrar.
                </div>
             </div>
             <div className='Right'>

             </div>
        </div>
    )
}

export default ResidentQr;