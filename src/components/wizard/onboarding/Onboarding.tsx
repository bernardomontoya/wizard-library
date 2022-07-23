import React from 'react';
import useMachineContext from '../../../hooks/useMachineContext';
import OrganizationIcon from '../../icons/organization';
import SavingsIcon from '../../icons/savings';
import VehicleIcon from '../../icons/vehicle';
import IconCard from './IconCard';

const Onboarding: React.FC = () => {
  const { state, send } = useMachineContext();

  if (!state.matches('iddle')) return null;

  return (
    <div className="container mx-auto text-center bg-white py-14 text-gray-very-dark rounded-2xl">
      <div className="max-w-xl mx-auto mb-14">
        <h1 className="mb-6 text-4xl font-bold">
          Going electric starts with understanding your needs
        </h1>
        <p>
          We need to understand your requirements so we can recommend the
          appropriate electric vehicle, charger and identify incentives.
        </p>
      </div>
      <div className="flex justify-center gap-12 mb-14">
        <IconCard
          icon={OrganizationIcon}
          label="Tell us about your organization"
        />
        <IconCard icon={VehicleIcon} label="Tell us about your vehicles" />
        <IconCard icon={SavingsIcon} label="See how much you can save" />
      </div>
      <button
        onClick={() => send('START')}
        className="px-10 py-3 font-semibold text-white uppercase rounded-full bg-blue-vivid hover:bg-blue-800"
      >
        Create Your First Vehicle Set
      </button>
    </div>
  );
};

export default Onboarding;
