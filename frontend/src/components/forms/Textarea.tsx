import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helpText?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, helpText, error, id, rows = 4, ...props }) => {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const descId = `${fieldId}-desc`;
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={fieldId}>{label}</label>
      <textarea
        id={fieldId}
        rows={rows}
        className={`form-field__textarea${error ? ' form-field__textarea--error' : ''}`}
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
