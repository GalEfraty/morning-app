import { Link } from 'react-router-dom';

import accountStore from '../../../stores/account.store';
import logoUrl from '../../../assets/green_logo.svg';

import './navbar.scss';
import Button from '../../common/button/Button';
import { LogoutIcon } from '../../svg';

function Navbar() {
  return (
    <header className={`navbar ${accountStore.account ? 'authenticated' : ''}`}>
      <div className='nav-container'>
        <Link to={'/'} className='nav-logo'>
          <img src={logoUrl} alt='company logo' />
        </Link>
        <Button text={'יציאה'} />
      </div>
    </header>
  );
}

export default Navbar;
