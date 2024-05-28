import './IconButton.css';

function IconButton({ icon, onClick, text }) {
    return (
        <button onClick={onClick} className='slim_button'>
            {icon}
            {text}
        </button>
    )
}

export default IconButton;