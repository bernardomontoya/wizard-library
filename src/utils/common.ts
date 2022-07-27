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
    const { actions } = currentStep;
    machineConfiguration.states[step] = { on: actions, entry: 'navigate' };
  });

  return machineConfiguration;
};

export const getFormDefaultValues = (
  configuration: WizardConfig
): Record<string, any> => {
  const initialValues = {} as Record<string, any>;

  Object.keys(configuration.steps).forEach((step) => {
    const currentStep = configuration.steps[step];
    const { fields } = currentStep;

    if (fields) {
      fields.forEach((field) => {
        const { id, defaultValue } = field;
        initialValues[id as string] = defaultValue;
      });
    }
  });
  return initialValues;
};

export const getFormLabels = (
  configuration: WizardConfig
): Record<string, any> => {
  const formLabels = {} as Record<string, any>;

  Object.keys(configuration.steps).forEach((step) => {
    const currentStep = configuration.steps[step];
    const { fields } = currentStep;

    if (fields) {
      fields.forEach((field) => {
        const { id, label } = field;
        formLabels[id as string] = label;
      });
    }
  });
  return formLabels;
};

export const getRGBColor = (hex: string, type: string): string => {
  const color = hex.replace(/#/g, '');
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return `--color-${type}: ${r}, ${g}, ${b};`;
};
