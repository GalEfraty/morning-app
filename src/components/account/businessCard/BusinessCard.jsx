import { CheckIcon, UncheckIcon, LocationTagIcon } from '../../svg';

function BusinessCard({ business }) {
  const { name, active, address, city, creationDate } = business;
  const date = new Date(creationDate * 100);
  const normalizedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <li className='business-card'>
      <div className='title'>
        <h3>{name}</h3>
        <div>{active ? <CheckIcon color='#34A853' /> : <UncheckIcon color='#EA4335' />}</div>
      </div>
      <p className='address'>
        <LocationTagIcon /> {`${address}, ${city}`}
      </p>
      <p className='date'>{normalizedDate}</p>
    </li>
  );
}

export default BusinessCard;
