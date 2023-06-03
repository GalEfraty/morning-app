import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import accountStore from '../../../stores/account.store';
import Button from '../../common/button/Button';
import Input from '../../common/input/Input';

import './loginPage.scss';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'כניסה';
    if (accountStore.account) {
      navigate('/welcome');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (email && password) {
      accountStore.login(email, password);
      navigate('/welcome');
    }
  }

  return (
    <main className='auth-frame'>
      <div className='auth-container'>
        <form onSubmit={handleSubmit} className='auth-form'>
          <h1>היי, טוב לראות אותך</h1>
          <div className='form-control'>
            <Input
              label={'מייל'}
              type={'email'}
              id={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              descriptionId={'email-description'}
              description={'כתובת המייל איתה נרשמת לחשבונית ירוקה'}
            />
          </div>
          <div className='form-control'>
            <Input
              label={'סיסמה'}
              type={'password'}
              id={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              descriptionId={'password-description'}
              description={''}
            />
          </div>
          <Link to={'/forgot-password'} className='forgot-password-link'>
            שכחת סיסמה?
          </Link>
          <div className='form-actions'>
            <Button text={'כניסה'} type={'submit'} />
          </div>
          <p className='trial-link'>
            עוד לא הצטרפת? <Link to='/'>ל-30 יום ניסיון חינם</Link>
          </p>
        </form>
      </div>
      <div className='auth-image'></div>
    </main>
  );
}

export default LoginPage;
