/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import { useActor } from '@xstate/react';
import { GlobalStateContext } from '../machines/Wizard';

const useMachineContext = () => {
  const { wizardService } = useContext(GlobalStateContext);
  const [state] = useActor(wizardService);
  const {
    send,
    machine: { states },
  } = wizardService;
  console.log('--WIZARD', wizardService);

  return { state, send, states };
};

export default useMachineContext;
