import './input.scss';

function Input({
  label,
  id,
  value,
  onChange,
  required,
  description,
  descriptionId,
  isError,
  type,
  ...props
}) {
  return (
    <div className='reusable-input'>
      <input
        type={type}
        id={id}
        aria-describedby={descriptionId}
        required={required}
        value={value}
        onChange={onChange}
        className={`${value ? 'has-value' : ''}`}
        {...props}
      />
      <label htmlFor={id}>{label}</label>

      <span id={descriptionId} className={`input-description ${isError ? 'error' : ''}`}>
        {description}
      </span>
    </div>
  );
}

export default Input;
