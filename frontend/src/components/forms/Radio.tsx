import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  legend: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  helpText?: string;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name, legend, options, value, onChange, helpText, error,
}) => {
  const descId = `${name}-desc`;
  return (
    <fieldset className="form-field form-field--radio">
      <legend className="form-field__label">{legend}</legend>
      {options.map((opt) => (
        <label key={opt.value} className="form-field__radio-label">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
            aria-describedby={descId}
            className="form-field__radio"
          />
          {opt.label}
        </label>
      ))}
      {(helpText || error) && (
        <span id={descId} className={error ? 'form-field__error' : 'form-field__help'}>
          {error ?? helpText}
        </span>
      )}
    </fieldset>
  );
};
