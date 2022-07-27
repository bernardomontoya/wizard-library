import React from 'react';
import { useFormContext } from 'react-hook-form';

import { WizardConfig, WizardSend, WizardStep } from '../../../types/shared';
import { getFormLabels } from '../../../utils/common';
import Button from '../../button/Button';
import Title from '../../typography/Title';

type SummaryProps = {
  send: WizardSend;
  wizardConfiguration: WizardConfig;
  uiConfiguration: WizardStep;
};

const Summary: React.FC<SummaryProps> = ({
  wizardConfiguration,
  uiConfiguration,
  send,
}) => {
  const { getValues } = useFormContext();
  const values = getValues();
  const formLabels = getFormLabels(wizardConfiguration);
  const { title, description, backLabel, nextLabel } = uiConfiguration;

  const handleSubmit = () => {
    send({ type: 'SUBMIT', data: values });
  };

  const handleClickBack = () => {
    send('BACK');
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="max-w-xl mx-auto mb-14">
        <Title>{title}</Title>
        <p className="mb-8 text-wizard-paragraph">{description}</p>
        <div className="flex flex-col gap-2 text-left text-wizard-paragraph">
          {Object.keys(values).map((key) => {
            const currentValue = values[key];
            const currentLabel = formLabels[key];
            return (
              <span key={key}>
                <strong>{`${currentLabel}: `}</strong>
                {currentValue}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <Button label={backLabel || 'Back'} onClick={handleClickBack} />
        <Button label={nextLabel || 'Next'} onClick={handleSubmit} primary />
      </div>
    </div>
  );
};

export default Summary;
