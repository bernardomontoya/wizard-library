/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import { useActor } from '@xstate/react';
import { GlobalStateContext } from '../machines/Wizard';

const useMachineContext = () => {
  const { wizardService, uiConfiguration } = useContext(GlobalStateContext);
  const [state] = useActor(wizardService);
  const {
    send,
    machine: { states },
  } = wizardService;

  return { state, send, states, uiConfiguration };
};

export default useMachineContext;
