import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { WizardSend, WizardStep } from '../../../types/shared';
import Button from '../../button/Button';
import Title from '../../typography/Title';
import Field from './Field';

type FormProps = {
  uiConfiguration: WizardStep;
  send: WizardSend;
};

const Form: React.FC<FormProps> = ({ uiConfiguration, send }) => {
  const {
    formState: { errors },
    trigger,
  } = useFormContext();

  const {
    title,
    description,
    fields = [],
    backLabel,
    nextLabel,
  } = uiConfiguration;

  const checkIfPageHasErrors = () => {
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];

      if (errors[field.id]) {
        return true;
      }
    }
  };

  const handleClickNext = () => {
    send('NEXT');
  };
  const handleClickBack = () => {
    send('BACK');
  };

  useEffect(() => {
    trigger();
  }, [trigger, fields]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Title>{title}</Title>
        <p className="text-wizard-paragraph">{description}</p>
      </div>
      <div className="grid w-full max-w-xl grid-cols-6 gap-6 mx-auto">
        {fields.map((field) => (
          <Field key={field.id} configuration={{ ...field }} />
        ))}
      </div>
      <div className="flex justify-between">
        <Button label={backLabel || 'Back'} onClick={handleClickBack} />
        <Button
          label={nextLabel || 'Next'}
          onClick={handleClickNext}
          disabled={checkIfPageHasErrors()}
          primary
        />
      </div>
    </div>
  );
};

export default Form;
