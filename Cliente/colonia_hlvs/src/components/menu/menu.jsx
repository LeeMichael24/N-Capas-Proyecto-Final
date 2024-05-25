/* eslint-disable react/prop-types */
import ButtonMenu from './menuButtom/menuButtom';
import './Menu.css'; // Asegúrate de definir estilos aquí

const Menu = ({ buttons }) => {
  const isSingleButton = buttons.length === 1; // Verificar si hay solo un botón
  return (
    <div className="menu-container">
      {buttons.map((button, index) => (
        <ButtonMenu 
          key={index}
          icon={button.icon}
          name={button.name}
          path={button.path}
          isSingleButton={isSingleButton}
        />
      ))}
    </div>
  );
};

export default Menu;
