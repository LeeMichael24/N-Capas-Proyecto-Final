import "../dashboard/dashboard.css"
import '../resident-qr/resident-qr.css'
import './profile.css'
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Menu from '../../../components/menu/menu';
import { toast } from "react-toastify";

//mui
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { TextField, useMediaQuery, Fab } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WidgetsIcon from '@mui/icons-material/Widgets';



import IconButton from "../../../components/buttons/IconButton/IconButton";
import Navbar from "../../../components/navbar/navbar";
import residentButtons from '../../../assets/staticInfo/buttonsArray'



function Profile() {

    const [isChecked, setIsChecked] = useState(false);
    const [textFieldValue, setTextFieldValue] = useState('')

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
        if(event.target.checked){
            setTextFieldValue('00000000-0');
        }else setTextFieldValue('') 
    }

    const handleTextFieldChange = (event) => {
      const value = event.target.value;
      const regex = /^[0-9]{0,8}-?[0-9]{0,1}$/;
      
      if(regex.test(value)){
        setTextFieldValue(value)
      }
    };

    const notify = () => {
      toast.success("Datos registrados con exito", {
          position: "top-right",
          closeOnClick: true
      });
    };

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
          <Navbar />
          {matches && (
                <Fab size='medium' color='primary' className='fab' aria-label='Ir al menu' sx={fabStyle} onClick={handleClick}>
                    <WidgetsIcon/>
                </Fab>
            )}
          <div className="father" id="testDAD">
            <div className="Left">
              <h2> Mi perfil</h2>
                  <div className='Hint'>
                      <ErrorOutlineRoundedIcon className='icon'/>
                      Por seguridad solicitamos tu DUI, no te preocupes, esta información es confidencial.
                  </div>
                  <div className="dui_field">
                      <TextField className="white" label='DUI' disabled={isChecked} value={textFieldValue}
                        onChange={handleTextFieldChange}
                        inputProps={{maxLength: 10}}
                        placeholder="00000000-0"
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
                  <IconButton text={'Guardar Informacion'} onClick={notify}/>
              
            </div>
            <div id="hastaAbajoBaby" className="Right">
              <Menu buttons={residentButtons} className="funca" />
            </div>
          </div>
        </>
      );
}

export default Profile;