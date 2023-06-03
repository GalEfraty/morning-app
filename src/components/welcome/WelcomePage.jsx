import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/button/Button';
import accountStore from '../../stores/account.store';

import './welcomePage.scss';

function WelcomePage() {
  useEffect(() => {
    document.title = 'ברוך הבא!';
  }, []);

  return (
    <main className='page welcome-page'>
      <div className='welcome-container'>
        <h1>
          שלום {`${accountStore.account.firstName} ${accountStore.account.lastName}`}! ברוך הבא
          לחשבון העסקי שלך
        </h1>
        <Link to={'/account'}>לחשבון שלי</Link>
      </div>
    </main>
  );
}

export default WelcomePage;
