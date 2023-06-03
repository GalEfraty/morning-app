import { Link } from 'react-router-dom';

import accountStore from '../../stores/account.store';

import './errorPages.scss';

function NotFoundPage() {
  return (
    <main className='page error-page'>
      <div className='error-container'>
        <h1>אופס! העמוד שניסית להגיע אליו אינו קיים</h1>
        {accountStore.account ? (
          <Link to={'/account'}>לחשבון שלי</Link>
        ) : (
          <Link to='/login'>התחבר</Link>
        )}
      </div>
    </main>
  );
}

export default NotFoundPage;
