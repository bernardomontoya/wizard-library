import React from 'react';

import useMachineContext from '../../../hooks/useMachineContext';
import Form from '../form/Form';
import Onboarding from '../onboarding/Onboarding';
import Summary from '../summary/Summary';

const Step: React.FC = () => {
  const { state, uiConfiguration, send } = useMachineContext();
  const displayOnboading = state.matches('iddle');
  const displaySummary = state.matches('summary');
  const displayForm = !displayOnboading && !displaySummary;
  const currentUIConfig = uiConfiguration.steps[state.value as string];

  return (
    <div className="container px-12 mx-auto text-center py-14 rounded-2xl h-xxl bg-wizard-wizard">
      {displayOnboading && (
        <Onboarding send={send} uiConfiguration={currentUIConfig} />
      )}
      {displayForm && <Form send={send} uiConfiguration={currentUIConfig} />}
      {displaySummary && (
        <Summary
          uiConfiguration={currentUIConfig}
          wizardConfiguration={uiConfiguration}
          send={send}
        />
      )}
    </div>
  );
};

export default Step;
