import React from 'react';

interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  helpText?: string;
  error?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ label, helpText, error, id, ...props }) => {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const descId = `${fieldId}-desc`;
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={fieldId}>{label}</label>
      <input
        type="date"
        id={fieldId}
        className={`form-field__input${error ? ' form-field__input--error' : ''}`}
        aria-describedby={descId}
        aria-invalid={!!error}
        {...props}
      />
      {(helpText || error) && (
        <span id={descId} className={error ? 'form-field__error' : 'form-field__help'}>
          {error ?? helpText}
        </span>
      )}
    </div>
  );
};
