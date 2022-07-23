import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { createMachine } from 'xstate';

import StepTracker from '../components/wizard/stepTracker/StepTracker';
import '../globals.css';
import Onboarding from '../components/wizard/onboarding/Onboarding';
import { useInterpretT } from '../types/shared';
import { baseMachine } from '../consts/baseMachine';

export const GlobalStateContext: React.Context<
  | {
      wizardService: useInterpretT;
    }
  | Record<string, never>
> = createContext({});

type WizardProps = {
  configuration: Record<string, any>;
};

export const Wizard: React.FC<WizardProps> = ({ configuration }) => {
  console.log('--Wizard: Configuration');
  const wizardMachine = createMachine(
    {
      id: 'wizard',
      initial: 'iddle',
      ...(configuration || baseMachine),
    },
    {
      actions: {
        // action implementations
        navigate: (context, event) => {
          console.log('--Wizard: Run client navigation');
        },
      },
    }
  );
  const wizardService = useInterpret(wizardMachine);

  return (
    <GlobalStateContext.Provider value={{ wizardService }}>
      <div className="flex flex-col justify-center h-screen bg-gray-light">
        <StepTracker />
        <Onboarding />
      </div>
    </GlobalStateContext.Provider>
  );
};
