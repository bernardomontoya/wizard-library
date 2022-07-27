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
          const color =
            currentConfiguration[childKey as keyof typeof currentConfiguration];
          if (color) {
            const colorPrefix = 'wizard';
            const colorKey = `${colorPrefix}-${configKey}-${childKey}`;
            const primary = getRGBColor(color, colorKey);
            cssVariables += `${primary} `;
          }
        });
      }
    });
    return `{${cssVariables}}`;
  };

  return <style id="wizard-variables">:root {getCSSVariables()}</style>;
};

export default StyleVariables;
