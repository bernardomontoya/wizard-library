import {
  FormWidth,
  MachineConfiguration,
  WizardConfig,
  WizardState,
} from '../types/shared';

export const getColumnClasses = (width: FormWidth): string => {
  switch (width) {
    case 1:
      return 'col-span-1';

    case 2:
      return 'col-span-2';

    case 3:
      return 'col-span-3';

    case 6:
      return 'col-span-6';
    default:
      return '';
  }
};

export const sanitizeMachineConfiguration = (
  configuration: WizardConfig
): MachineConfiguration => {
  const machineConfiguration = {
    initial: configuration.initialStep,
    states: {} as WizardState,
  };
  Object.keys(configuration.steps).forEach((step) => {
    const currentStep = configuration.steps[step];
    const { on } = currentStep;
    machineConfiguration.states[step] = { on };
  });

  return machineConfiguration;
};
