import buttonStyles from '../../styles/Button.module.css';

const Button = ({ color , onClick, active, disabled }) => {
    
    return (
        <div onClick={() => onClick()} className={`${buttonStyles.simonButton} ${buttonStyles[color]} ${active && buttonStyles.activated}`} disabled={disabled}></div>
    )
};
    
export default Button;



