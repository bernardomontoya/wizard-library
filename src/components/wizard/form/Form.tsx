import useMachineContext from '../../../hooks/useMachineContext';
import { FormField } from '../../../types/shared';
import Button from '../../button/Button';
import Title from '../../typography/Title';
import Field from './Field';

type FormProps = {
  title: string;
  description: string;
  fieldset: FormField[];
};

const Form: React.FC<FormProps> = ({ title, description, fieldset }) => {
  const { send } = useMachineContext();

  const handleClickNext = () => {
    send('NEXT');
  };
  const handleClickBack = () => {
    send('BACK');
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
      <div className="grid w-full max-w-xl grid-cols-6 gap-6 mx-auto">
        {fieldset.map((field) => (
          <Field key={field.id} configuration={{ ...field }} />
        ))}
      </div>
      <div className="flex justify-between">
        <Button label="Back" onClick={handleClickBack} />
        <Button label="Next" onClick={handleClickNext} primary />
      </div>
    </div>
  );
};

export default Form;
