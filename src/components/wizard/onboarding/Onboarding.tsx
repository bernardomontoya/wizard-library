import React from 'react';

import { WizardSend, WizardStep } from '../../../types/shared';
import Button from '../../button/Button';
import Title from '../../typography/Title';
import IconCard from './IconCard';

type OnboardingProps = {
  uiConfiguration: WizardStep;
  send: WizardSend;
};

const Onboarding: React.FC<OnboardingProps> = ({ uiConfiguration, send }) => {
  const { title, description, nextLabel } = uiConfiguration;
  const cards = uiConfiguration && uiConfiguration.cards;

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div>
        <div className="max-w-xl mx-auto mb-14">
          <Title>{title}</Title>
          <p className="text-wizard-paragraph">{description}</p>
        </div>
        <div className="flex justify-center gap-12 mb-14">
          {cards &&
            cards.length > 0 &&
            cards.map((card) => (
              <IconCard key={card.label} icon={card.icon} label={card.label} />
            ))}
        </div>
      </div>
      <Button
        label={nextLabel || 'Create Your First Vehicle Set'}
        onClick={() => send('START')}
        primary
      />
    </div>
  );
};

export default Onboarding;
