import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../client';
import './SignUp.css';

const SignUp = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '', 
    email: '', 
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' o 'error'
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName, // Esto se guardará en user_metadata
          }
        }
      });

      if (error) throw error;
      
      setMessage(t('signup.successMessage', '¡Cuenta creada exitosamente! Revisa tu email para el enlace de verificación.'));
      setMessageType('success');
      
      // Limpiar el formulario
      setFormData({ 
        fullName: '', 
        email: '', 
        password: '' 
      });

      // Redirigir al login después de 3 segundos
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      
    } catch (error) {
      setMessage(error.message);
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h2 className="signup-title">{t('signup.title', 'Crear Cuenta')}</h2>
        
        {message && (
          <div className={messageType === 'success' ? 'signup-success-message' : 'signup-error-message'}>
            {message}
            {messageType === 'success' && (
              <div className="signup-redirect-message">
                {t('signup.redirectMessage', 'Serás redirigido al login en 3 segundos...')}
              </div>
            )}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <input 
              className="signup-input"
              placeholder={t('signup.form.fullName', 'Nombre completo')}
              name='fullName'
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="signup-input-group">
            <input 
              className="signup-input"
              placeholder={t('signup.form.email', 'Email')}
              name='email'
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="signup-input-group">
            <input 
              className="signup-input"
              placeholder={t('signup.form.password', 'Contraseña')}
              name='password'
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              disabled={isLoading}
            />
            <div className="signup-password-requirements">
              {t('signup.passwordRequirements', 'Mínimo 6 caracteres')}
            </div>
          </div>

          <button 
            type='submit' 
            className="signup-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? t('signup.status.creating', 'Creando Cuenta...') : t('signup.form.submit', 'Registrarse')}
          </button>
        </form>

        <div className="signup-link-section">
          {t('signup.haveAccount', '¿Ya tienes una cuenta?')} <Link to='/login' className="signup-link">{t('signup.loginLink', 'Inicia Sesión')}</Link> 
        </div>
      </div>
    </div>
  );
}

export default SignUp;