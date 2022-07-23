import React from 'react';
import useMachineContext from '../../../hooks/useMachineContext';

const StepTracker: React.FC = () => {
  const { state, states } = useMachineContext();
  const arrayOfSteps = Object.keys(states);
  const currentStepNumber = arrayOfSteps.indexOf(state.value as string) + 1;
  const totalSteps = arrayOfSteps.length;

  return (
    <div className="absolute top-0 w-full">
      <div className="container p-8 mx-auto">
        <p className="mb-4 text-center">{`Step ${currentStepNumber} of ${totalSteps}`}</p>
        <div className="flex justify-center gap-2">
          {arrayOfSteps.map((step, i) => {
            const isActive = i < currentStepNumber;
            return (
              <div
                key={step}
                className={`w-20 h-1 ${
                  isActive ? 'bg-blue-vivid' : 'bg-gray-dark'
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepTracker;
