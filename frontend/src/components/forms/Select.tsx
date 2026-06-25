import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  helpText?: string;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, helpText, error, id, ...props }) => {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const descId = `${fieldId}-desc`;
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={fieldId}>{label}</label>
      <select
        id={fieldId}
        className={`form-field__select${error ? ' form-field__select--error' : ''}`}
        aria-describedby={descId}
        aria-invalid={!!error}
        {...props}
      >
        {options.map(({ value, label: optLabel }) => (
          <option key={value} value={value}>{optLabel}</option>
        ))}
      </select>
      {(helpText || error) && (
        <span id={descId} className={error ? 'form-field__error' : 'form-field__help'}>
          {error ?? helpText}
        </span>
      )}
    </div>
  );
};
