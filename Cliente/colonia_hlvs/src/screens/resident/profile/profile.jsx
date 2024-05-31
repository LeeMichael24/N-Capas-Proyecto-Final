import "../dashboard/dashboard.css"
import '../resident-qr/resident-qr.css'
import './profile.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Menu from '../../../components/menu/menu';

//mui
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "../../../components/buttons/IconButton/IconButton";


function Profile() {

    const [isChecked, setIsChecked] = useState(false);
    const [textFieldValue, setTextFieldValue] = useState('')

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
        if(event.target.checked){
            setTextFieldValue('00000000-0');
        }else setTextFieldValue('') 
    }

    const buttonsVisit = [
        {
          icon: <InsertInvitationRoundedIcon />,
          name: "Invitacion Simple",
          path: "/invitacion-simple",
        },
        {
          icon: <EventRepeatRoundedIcon />,
          name: "Invitacion Recurrente",
          path: "/invitacion-recurrente",
        },
        { icon: <PersonRoundedIcon />, name: "Mi perfil", path: "/myprofile" },
        { icon: <LogoutRoundedIcon />, name: "Cerrar Sesion", path: "/" },
      ];
    
      return (
        <div className="father" id="testDAD">
          <div className="Left">
            <h2> Mi perfil</h2>
                <div className='Hint'>
                    <ErrorOutlineRoundedIcon className='icon'/>
                    Por seguridad solicitamos tu DUI, no te preocupes, esta información es confidencial.
                </div>
                <div className="dui_field">
                    <TextField className="white" label='DUI' disabled={isChecked} value={textFieldValue}
                        onChange={(event) => {
                            setTextFieldValue(event.target.value);
                        }}
                    />
                    <FormControlLabel className="check_field"
                        value="end"
                        control={<Checkbox 
                            sx={{color: '#0d1b2a', '&.Mui-checked': {color: '#0d1b2a'},}}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />}
                        label="Soy menor"
                        labelPlacement="end"
                    />
                </div>
                <IconButton text={'Guardar Informacion'} />
            
          </div>
          <div id="stay">
            <Menu buttons={buttonsVisit} className="funca" />
          </div>
        </div>
      );
}

export default Profile;