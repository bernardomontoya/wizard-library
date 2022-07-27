import React from 'react';
import { wizardStyles } from '../../consts/baseConfiguration';
import { WizardStyles } from '../../types/shared';
import { getRGBColor } from '../../utils/common';

type StyleVariablesProps = {
  configuration: WizardStyles;
};

const StyleVariables: React.FC<StyleVariablesProps> = ({ configuration }) => {
  const getCSSVariables = () => {
    let cssVariables = '';
    Object.keys(wizardStyles).map((configKey) => {
      const currentConfiguration =
        configuration[configKey as keyof WizardStyles] ||
        wizardStyles[configKey as keyof WizardStyles];

      if (typeof currentConfiguration === 'object') {
        Object.keys(currentConfiguration).map((childKey) => {
          const value =
            currentConfiguration[childKey as keyof typeof currentConfiguration];
          const propertiesPrefix = 'wizard';

          // Check for fonts
          if (childKey === 'font') {
            cssVariables += `--font-${propertiesPrefix}-${configKey}-${childKey}: ${value};`;
          } else {
            if (value) {
              const colorKey = `${propertiesPrefix}-${configKey}-${childKey}`;
              const primary = getRGBColor(value, colorKey);
              cssVariables += `${primary} `;
            }
          }
        });
      }
    });
    return `{${cssVariables}}`;
  };

  return <style id="wizard-variables">:root {getCSSVariables()}</style>;
};

export default StyleVariables;
