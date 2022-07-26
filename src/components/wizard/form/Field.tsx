import { useFormContext } from 'react-hook-form';

import { FormField } from '../../../types/shared';
import { getColumnClasses } from '../../../utils/common';
import Input from './Input';

type FieldProps = {
  configuration: FormField;
};

const Field: React.FC<FieldProps> = ({ configuration }) => {
  const { id, label, type, width, options } = configuration;
  const { register } = useFormContext();
  const widthClasses = getColumnClasses(width);

  const getField = () => {
    switch (type) {
      case 'text':
        return (
          <Input id={id} label={label} options={options} register={register} />
        );

      default:
        return null;
    }
  };
  return <div className={widthClasses}>{getField()}</div>;
};

export default Field;
