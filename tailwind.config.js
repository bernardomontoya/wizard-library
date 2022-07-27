/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        xxl: '550px',
      },
      textColor: {
        wizard: {
          title: withOpacity('--color-wizard-text-title'),
          paragraph: withOpacity('--color-wizard-text-paragraph'),
          stepTracker: withOpacity('--color-wizard-steps_tracker-label'),
          primaryButton: withOpacity('--color-wizard-primary_button-text'),
          secondaryButton: withOpacity('--color-wizard-secondary_button-text'),
          disabledButton: withOpacity('--color-wizard-disabled_button-text'),
          field: withOpacity('--color-wizard-field-text'),
          fieldLabel: withOpacity('--color-wizard-field-label'),
        },
      },
      borderColor: {
        wizard: {
          secondaryButton: withOpacity(
            '--color-wizard-secondary_button-border'
          ),
          field: withOpacity('--color-wizard-field-border'),
        },
      },
      backgroundColor: {
        wizard: {
          main: withOpacity('--color-wizard-background-main'),
          wizard: withOpacity('--color-wizard-background-wizard'),
          primaryButton: withOpacity(
            '--color-wizard-primary_button-background'
          ),
          primaryButtonHover: withOpacity(
            '--color-wizard-primary_button-background_hover'
          ),
          secondaryButton: withOpacity(
            '--color-wizard-secondary_button-background'
          ),
          secondaryButtonHover: withOpacity(
            '--color-wizard-secondary_button-background_hover'
          ),
          disabledButton: withOpacity(
            '--color-wizard-disabled_button-background'
          ),
          disabledButtonHover: withOpacity(
            '--color-wizard-disabled_button-background_hover'
          ),
          stepTrackerActive: withOpacity(
            '--color-wizard-steps_tracker-activeTab'
          ),
          stepTrackerInactive: withOpacity(
            '--color-wizard-steps_tracker-inactiveTab'
          ),
          field: withOpacity('--color-wizard-field-background'),
        },
      },
    },
  },
  plugins: [],
};
