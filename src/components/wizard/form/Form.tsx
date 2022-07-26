import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormField, WizardSend } from '../../../types/shared';
import Button from '../../button/Button';
import Title from '../../typography/Title';
import Field from './Field';

type FormProps = {
  title: string;
  description: string;
  fieldset: FormField[];
  send: WizardSend;
};

const Form: React.FC<FormProps> = ({ title, description, fieldset, send }) => {
  const {
    formState: { errors },
    trigger,
  } = useFormContext();

  const checkIfPageHasErrors = () => {
    let hasErrors = true;
    fieldset.map((field) => {
      hasErrors = errors[field.id] ? true : false;
    });
    return hasErrors;
  };

  const handleClickNext = () => {
    send('NEXT');
  };
  const handleClickBack = () => {
    send('BACK');
  };

  useEffect(() => {
    trigger();
  }, [trigger, fieldset]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
      <div className="grid w-full max-w-xl grid-cols-6 gap-6 mx-auto">
        {fieldset.map((field) => (
          <Field key={field.id} configuration={{ ...field }} />
        ))}
      </div>
      <div className="flex justify-between">
        <Button label="Back" onClick={handleClickBack} />
        <Button
          label="Next"
          onClick={handleClickNext}
          disabled={checkIfPageHasErrors()}
          primary
        />
      </div>
    </div>
  );
};

export default Form;
