/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AnyEventObject,
  BaseActionObject,
  Interpreter,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from 'xstate';

export type useInterpretT = Interpreter<
  unknown,
  any,
  AnyEventObject,
  { value: any; context: unknown },
  ResolveTypegenMeta<
    TypegenDisabled,
    AnyEventObject,
    BaseActionObject,
    ServiceMap
  >
>;
