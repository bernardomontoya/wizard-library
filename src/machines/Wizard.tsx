import React, { createContext, useMemo } from 'react';
import { createMachine } from 'xstate';
import { useInterpret } from '@xstate/react';
import { FormProvider, useForm } from 'react-hook-form';

import StepTracker from '../components/wizard/stepTracker/StepTracker';
import Step from '../components/wizard/step/Step';
import { wizardConfiguration } from '../consts/baseConfiguration';
import {
  useInterpretT,
  MachineConfiguration,
  WizardOptions,
  WizardConfig,
} from '../types/shared';
import '../globals.css';
import {
  getFormDefaultValues,
  sanitizeMachineConfiguration,
} from '../utils/common';

export const GlobalStateContext: React.Context<
  | {
      wizardService: useInterpretT;
      uiConfiguration: WizardConfig;
    }
  | Record<string, never>
> = createContext({});

type WizardProps = {
  configuration: WizardConfig;
};

export const Wizard: React.FC<WizardProps> = ({ configuration }) => {
  const wizardConfig = configuration || wizardConfiguration;
  const sanitizedMachineConfiguration = useMemo(
    () => sanitizeMachineConfiguration(wizardConfig),
    [wizardConfig]
  );
  const wizardMachine = useMemo(() => {
    const machineConfiguration: MachineConfiguration = {
      id: 'wizard',
      ...sanitizedMachineConfiguration,
    };

    const machineOptions: WizardOptions = {
      actions: {
        navigate: (_, __, meta) => {
          const currentStep = meta.state.value;
          const currentStepConfiguration =
            wizardConfig.steps[currentStep as string];
          if (currentStepConfiguration.route) {
            wizardConfig.actions.navigate(currentStepConfiguration.route);
          }
        },
      },
    };
    return createMachine(machineConfiguration, machineOptions);
  }, [sanitizedMachineConfiguration, wizardConfig]);

  const wizardService = useInterpret(wizardMachine);
  const formDefaultValues = getFormDefaultValues(wizardConfig);
  const methods = useForm({
    defaultValues: formDefaultValues,
    mode: 'all',
  });

  return (
    <GlobalStateContext.Provider
      value={{ wizardService, uiConfiguration: wizardConfig }}
    >
      <FormProvider {...methods}>
        <div className="flex flex-col justify-center h-screen bg-gray-light">
          <StepTracker />
          <Step />
        </div>
      </FormProvider>
    </GlobalStateContext.Provider>
  );
};
