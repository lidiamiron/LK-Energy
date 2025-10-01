import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../client';
import './Login.css';

const Login = ({ setToken }) => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  let location = useLocation();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Obtener la ubicación desde donde se intentó acceder
  const from = location.state?.from || '/';

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      
      setToken(data);
      
      // Redirección inmediata SIN mensajes
      navigate(from, { replace: true });
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="login-title">{t('login.title', 'Iniciar Sesión')}</h2>
        
        {error && <div className="login-error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <input 
              className="login-input"
              placeholder={t('login.form.email', 'Email')}
              name='email'
              type="email"
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="login-input-group">
            <input 
              className="login-input"
              placeholder={t('login.form.password', 'Contraseña')}
              name='password'
              type="password"
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <button 
            type='submit' 
            className="login-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? t('login.status.sending', 'Iniciando Sesión...') : t('login.form.submit', 'Iniciar Sesión')}
          </button>
        </form>

        <div className="login-link-section">
          {t('login.noAccount', '¿No tienes una cuenta?')} <Link to='/signup' className="login-link">{t('login.signupLink', 'Regístrate aquí')}</Link> 
        </div>
      </div>
    </div>
  );
}

export default Login;