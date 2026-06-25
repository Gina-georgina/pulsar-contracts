import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  helpText?: string;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, helpText, error, id, ...props }) => {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const descId = `${fieldId}-desc`;
  return (
    <div className="form-field form-field--checkbox">
      <label className="form-field__checkbox-label" htmlFor={fieldId}>
        <input
          type="checkbox"
          id={fieldId}
          className="form-field__checkbox"
          aria-describedby={descId}
          aria-invalid={!!error}
          {...props}
        />
        {label}
      </label>
      {(helpText || error) && (
        <span id={descId} className={error ? 'form-field__error' : 'form-field__help'}>
          {error ?? helpText}
        </span>
      )}
    </div>
  );
};
