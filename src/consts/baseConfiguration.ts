import OrganizationIcon from '../components/icons/organization';
import SavingsIcon from '../components/icons/savings';
import VehicleIcon from '../components/icons/vehicle';
import { WizardConfig } from '../types/shared';

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
        SUBMIT: '',
      },
      title: 'Step 4',
      description:
        'We use this information to calculate fuel costs and applicable incentives',
      route: '/wizard/review',
    },
  },
  actions: {
    navigate: (route: string) => {
      console.log('--NAVIGATE TO', route);
    },
  },
};
