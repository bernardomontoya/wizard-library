import React from 'react';
import { useFormContext } from 'react-hook-form';

import { WizardConfig, WizardSend } from '../../../types/shared';
import { getFormLabels } from '../../../utils/common';
import Button from '../../button/Button';
import Title from '../../typography/Title';

type SummaryProps = {
  send: WizardSend;
  uiConfiguration: WizardConfig;
};

const Summary: React.FC<SummaryProps> = ({ uiConfiguration, send }) => {
  const { getValues } = useFormContext();
  const values = getValues();
  const formLabels = getFormLabels(uiConfiguration);

  const handleSubmit = () => {
    console.log('--Wizard: Run client submit');
  };

  const handleClickBack = () => {
    send('BACK');
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="max-w-xl mx-auto mb-14">
        <Title>Review</Title>
        <p className="mb-8 text-wizard-paragraph">
          We use this information to calculate fuel costs and applicable
          incentives
        </p>
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
        <Button label="Back" onClick={handleClickBack} />
        <Button label="Next" onClick={handleSubmit} primary />
      </div>
    </div>
  );
};

export default Summary;
