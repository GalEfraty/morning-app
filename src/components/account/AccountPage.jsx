import { useEffect, useMemo } from 'react';

import accountStore from '../../stores/account.store';
import BusinessCard from './businessCard/BusinessCard';

import './accountPage.scss';

function AccountPage() {
  const LastLoginDateMemo = useMemo(() => {
    const date = new Date(accountStore.account.lastLoginDate * 1000);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }, []);

  useEffect(() => {
    document.title = 'החשבון שלי';
  }, []);

  return (
    <main className='page account-page'>
      <div className='account-container'>
        <section className='account-details'>
          <h1>פרטי החשבון שלי:</h1>
          <ul>
            <li>
              מייל: <span>{accountStore.account.email}</span>
            </li>
            <li>
              שם פרטי: <span>{accountStore.account.firstName}</span>
            </li>
            <li>
              שם משפחה: <span>{accountStore.account.lastName}</span>
            </li>
            <li>
              טלפון: <span>{accountStore.account.phone}</span>
            </li>
            <li>
              התחברות אחרונה: <span>{LastLoginDateMemo}</span>
            </li>
          </ul>
        </section>
        <section className='account-related-businesses'>
          <h1>עסקים מקושרים לחשבון שלי:</h1>
          {accountStore.account.businesses?.length ? (
            <ul>
              {accountStore.account.businesses.map((business, index) => {
                return <BusinessCard key={`buis-${index}-${business.id}`} business={business} />;
              })}
            </ul>
          ) : (
            <p className='empty'>נראה שעוד לא קישרת אף עסק לחשבונך</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default AccountPage;
