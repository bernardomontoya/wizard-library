import React from 'react';

import {
  FormFieldDropdownOptions,
  FormFieldOptions,
  FormFieldRegister,
} from '../../../types/shared';
import Label from './Label';

type SelectProps = {
  id: string;
  label: string;
  options: FormFieldOptions;
  dropdownOptions: FormFieldDropdownOptions[] | undefined;
  register: FormFieldRegister;
};

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  register,
  dropdownOptions,
}) => {
  if (!dropdownOptions) return null;

  return (
    <div className="flex flex-col text-left">
      <Label id={id} text={label} />
      <select
        {...register(id, options)}
        className="bg-gray-50 border border-gray-300 text-gray-very-dark sm:text-sm rounded-lg block w-full p-2.5"
      >
        {dropdownOptions.map((option) => {
          const { value, label } = option;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
