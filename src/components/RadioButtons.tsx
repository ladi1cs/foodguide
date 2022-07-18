import React from 'react';
import {IOption} from './common';
import {RadioOption, Legend, Fieldset} from '../styles/styles';

interface IRBProps {
  options: IOption[],
  title: string;
  onChange: (opt: string) => void;
}

const RadioButtons = (props:IRBProps) => {
  const {options, title, onChange} = props;

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const renderOption = (opt: IOption, key: number) => {
    return (<RadioOption key={key}>
      <input
        type="radio"
        name={title}
        value={opt.value}
        id={opt.value}
        onChange={handleRadio}
      />
      <label htmlFor={opt.value}>{opt.label}</label>
    </RadioOption>
);
  }

  return (
      <Fieldset>
        <Legend >{title}</Legend>
        {options.map((opt, ind) => renderOption(opt, ind))}
      </Fieldset>
  );
  
}

export default RadioButtons;