import useMachineContext from '../../../hooks/useMachineContext';
import Form from '../form/Form';
import Onboarding from '../onboarding/Onboarding';

const Step: React.FC = () => {
  const { state, uiConfiguration, send } = useMachineContext();
  const displayOnboading = state.matches('iddle');
  const displaySummary = state.matches('summary');
  const displayForm = !displayOnboading && !displaySummary;
  const currentUIConfig = uiConfiguration.steps[state.value as string];
  const { title, description, fields } = currentUIConfig;

  return (
    <div className="container px-12 mx-auto text-center bg-white py-14 text-gray-very-dark rounded-2xl h-xxl">
      {displayOnboading && (
        <Onboarding send={send} uiConfiguration={currentUIConfig} />
      )}
      {displayForm && (
        <Form
          send={send}
          title={title}
          description={description}
          fieldset={fields || []}
        />
      )}
    </div>
  );
};

export default Step;
