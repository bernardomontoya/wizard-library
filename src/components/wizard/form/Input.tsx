import React from 'react';

import { FormFieldOptions, FormFieldRegister } from '../../../types/shared';
import Label from './Label';

type InputProps = {
  id: string;
  label: string;
  options: FormFieldOptions;
  register: FormFieldRegister;
};

const Input: React.FC<InputProps> = ({ id, label, options, register }) => {
  return (
    <div className="flex flex-col text-left">
      <Label id={id} text={label} />
      <input
        {...register(id, options)}
        id={id}
        className="bg-wizard-field border border-wizard-field text-wizard-field sm:text-sm rounded-lg block w-full p-2.5"
      />
    </div>
  );
};

export default Input;
