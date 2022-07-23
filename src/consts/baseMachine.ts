export const baseMachine = {
  states: {
    iddle: {
      on: { START: { target: 'secondStep', actions: ['navigate'] } },
    },
    secondStep: {
      on: { BACK: 'iddle', NEXT: 'thirdStep' },
    },
    thirdStep: {
      on: { BACK: 'secondStep', NEXT: 'finalStep' },
    },
    finalStep: {
      on: { BACK: 'thirdStep', SUBMIT: '' },
    },
  },
};
