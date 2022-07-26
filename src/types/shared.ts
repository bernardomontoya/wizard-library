/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import {
  BaseActionObject,
  Event,
  EventData,
  Interpreter,
  MachineConfig,
  MachineOptions,
  ResolveTypegenMeta,
  SCXML,
  ServiceMap,
  SingleOrArray,
  TypegenDisabled,
} from 'xstate';

export type useInterpretT = Interpreter<
  WizardContext,
  WizardState,
  WizardEvents,
  { value: any; context: WizardContext },
  ResolveTypegenMeta<
    TypegenDisabled,
    WizardEvents,
    BaseActionObject,
    ServiceMap
  >
>;

export type WizardSend = (
  event: SCXML.Event<WizardEvents> | SingleOrArray<Event<WizardEvents>>,
  payload?: EventData | undefined
) => void;

export type WizardContext = Record<string, any>;
export type WizardState = Record<string, any>;

export type WizardEvents =
  | { type: 'START' }
  | { type: 'NEXT' }
  | { type: 'BACK' }
  | { type: 'SUBMIT' };

export type WizardCard = {
  icon: React.FC;
  label: string;
};

export type WizardStep = {
  on: Record<string, any>;
  title: string;
  description: string;
  fields?: FormField[];
  cards?: WizardCard[];
};

export type WizardConfig = {
  initialStep: string;
  steps: Record<string, WizardStep>;
};

export type MachineConfiguration = MachineConfig<
  WizardContext,
  WizardState,
  WizardEvents
>;

export type WizardOptions = Partial<
  MachineOptions<WizardContext, WizardEvents>
>;

export type StepConfiguration = {
  title: string;
  description: string;
  fields: [];
};

export type FormWidth = 1 | 2 | 3 | 6;

export type FormFieldOptions = RegisterOptions | undefined;

export type FormFieldDropdownOptions = { value: string; label: string };

export type FormField = {
  id: string;
  label: string;
  type: 'text' | 'select';
  defaultValue: string;
  width: FormWidth;
  options: FormFieldOptions;
  dropdownOptions?: FormFieldDropdownOptions[];
};

export type FormFieldRegister = UseFormRegister<FieldValues>;
