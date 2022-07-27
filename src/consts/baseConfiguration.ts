import OrganizationIcon from '../components/icons/organization';
import SavingsIcon from '../components/icons/savings';
import VehicleIcon from '../components/icons/vehicle';
import { WizardConfig, WizardContext, WizardStyles } from '../types/shared';

const colors = {
  white: '#FFFFFF',
  vividBlue: '#0072CE',
  grayDark: '#595959',
  grayVeryDark: '#404040',
  gray: '#f9fafb',
  grayLight: '#d1d5db',
};

export const wizardStyles: WizardStyles = {
  background: {
    main: '#F0F3F5',
    wizard: colors.white,
  },
  primary_button: {
    background: colors.vividBlue,
    background_hover: '#1e40af',
    text: colors.white,
  },
  secondary_button: {
    background: colors.white,
    background_hover: '#f3f4f6',
    text: colors.grayVeryDark,
    border: colors.vividBlue,
  },
  disabled_button: {
    background: '#9ca3af',
    background_hover: '#4b5563',
    text: colors.white,
  },
  text: {
    title: colors.grayVeryDark,
    paragraph: colors.grayVeryDark,
  },
  steps_tracker: {
    label: colors.grayVeryDark,
    activeTab: colors.vividBlue,
    inactiveTab: colors.grayDark,
  },
  field: {
    background: colors.gray,
    border: colors.grayLight,
    text: colors.grayVeryDark,
    label: '#111827',
  },
};

export const wizardConfiguration: WizardConfig = {
  initialStep: 'iddle',
  steps: {
    iddle: {
      actions: { START: 'secondStep' },
      title: 'Going electric starts with understanding your needs',
      description:
        'We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.',
      cards: [
        { label: 'Tell us about your organization', icon: OrganizationIcon },
        { label: 'Tell us about your vehicles', icon: VehicleIcon },
        { label: 'See how much you can save', icon: SavingsIcon },
      ],
      route: '/wizard/onboarding',
      nextLabel: 'Create Your First Vehicle Set',
    },
    secondStep: {
      actions: {
        BACK: 'iddle',
        NEXT: 'thirdStep',
      },
      title: 'General Information',
      description:
        'We use this information to calculate fuel costs and applicable incentives',
      fields: [
        {
          id: 'zipCode',
          type: 'text',
          label: 'Zip Code',
          defaultValue: '',
          width: 6,
          options: {
            required: 'This field is required',
          },
        },
      ],
      route: '/wizard/step-2',
    },
    thirdStep: {
      actions: {
        BACK: 'secondStep',
        NEXT: 'summary',
      },
      title: 'Step 3',
      description:
        'We use this information to calculate fuel costs and applicable incentives',
      fields: [
        {
          id: 'buildingType',
          type: 'select',
          label: 'Building Type',
          defaultValue: '',
          width: 6,
          dropdownOptions: [
            {
              value: 'home',
              label: 'Home (garage)',
            },
            {
              value: 'smallOffice',
              label: 'Small Office',
            },
            {
              value: 'largeOffice',
              label: 'Large Office',
            },
            {
              value: 'warehouse',
              label: 'Wharehouse',
            },
            {
              value: 'depot',
              label: 'Depot',
            },
            {
              value: 'school',
              label: 'Apartment Building',
            },
          ],
          options: {
            required: 'This field is required',
          },
        },
      ],
      route: '/wizard/step-3',
    },
    summary: {
      actions: {
        BACK: 'thirdStep',
        SUBMIT: { actions: 'submit' },
      },
      title: 'Review',
      description:
        'We use this information to calculate fuel costs and applicable incentives',
      route: '/wizard/review',
      nextLabel: 'Send',
    },
  },
  actions: {
    navigate: (route: string) => {
      console.log('--NAVIGATE TO', route);
    },
    submit: (data: WizardContext) => {
      console.log('--SUBMIT DATA', data);
    },
  },
};
