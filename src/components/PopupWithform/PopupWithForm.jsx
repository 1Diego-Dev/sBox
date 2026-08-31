import { useEffect, useState } from 'react';
import './popup-with-form.css';

function PopupWithForm({ isOpen, onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(false); 

  useEffect(() => {
    if (isOpen === false) {
      return;
    }

    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscClose);

    return () => document.removeEventListener('keydown', handleEscClose)

  }, [isOpen, onClose]);
  
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <h2 className="popup__title">{isLoginMode ? 'Iniciar Sesión': 'Inscribirse'}</h2>
        
        <form className="popup__form" name="register-form">
          {isLoginMode ? '' :  <input type="text" className="popup__input" placeholder="Nombre de usuario" required />}
          <input type="email" className="popup__input" placeholder="Correo electrónico" required />
          <input type="password" className="popup__input" placeholder="Contraseña" required />
          
          <div className="popup__actions">
            <button type="submit" className="popup__submit-btn"> {isLoginMode ? 'Iniciar Sesión': 'Inscribirse'}</button>
            <button type="button" className="popup__switch-btn" onClick={() => setIsLoginMode(!isLoginMode)}>{isLoginMode ? 'Inscribirse': 'Iniciar Sesión'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;