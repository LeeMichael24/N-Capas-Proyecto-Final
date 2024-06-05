import IconButton from '../../../components/buttons/IconButton/IconButton'
import Menu from "../../../components/menu/menu"
import { useNavigate } from 'react-router-dom';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import residentInChargeBtn from '../../../assets/staticInfo/buttonEncargadoArray';

// Styles
import '../../resident/dashboard/dashboard.css'
import './gestion_hogar.css'
import Navbar from '../../../components/navbar/navbar';

const residenteCasa = {
    owner: "Lee Michael",
    houseNumber: 35,
    members: [
        "Mauricio Aguilar",
        "Flavio Josefo",
        "Denys Campos"
    ]
}


const GestionHogar = () => {
    const navigate = useNavigate();

    const onGoToAddMember = () => {
        navigate("/residente/agregar-miembro");
    }

    const onGoToEntries = () => {
        navigate("/residente/entradas");
    }


    return (
        <>
            <Navbar />
            <div className='father'>
                <div className='Left'>
                    <h2>Gestionar mi hogar</h2>

                    <div className='members'>
                        <h3 className='membersTitle'>Integrantes Casa #{residenteCasa.houseNumber}</h3>
                        {
                            residenteCasa.members.map(member => {
                                return <p key={member}> {member} </p>;
                            })
                        }
                    </div>

                    <IconButton icon={<AddRoundedIcon />} text={'Agregar miembro a familia'} className="samesize" onClick={onGoToAddMember} />
                    <IconButton icon={<FormatListBulletedRoundedIcon />} text={'Revisar lista de entrada'} className="samesize" onClick={onGoToEntries} />
                </div>
                <div className='Right'>
                    <Menu buttons={residentInChargeBtn} className='funca' />
                </div>
            </div>
        </>
    )
}

export default GestionHogar;