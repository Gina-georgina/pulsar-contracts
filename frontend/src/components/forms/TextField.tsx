import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  error?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, helpText, error, id, ...props }) => {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const descId = `${fieldId}-desc`;
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={fieldId}>{label}</label>
      <input
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
