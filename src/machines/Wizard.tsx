import React from 'react';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

const wizardMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});

export const Wizard: React.FC = () => {
  const [state, send] = useMachine(wizardMachine);

  return (
    <button onClick={() => send('TOGGLE')}>
      {state.value === 'inactive'
        ? 'Click to activate'
        : 'Active! Click to deactivate'}
    </button>
  );
};
