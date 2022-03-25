export interface Step {
  text: string;
  to: string;
  stepNumber: number;
}

export const stepsHome: Step[] = [
  {
    text: 'Elije tu vehiculo',
    to: '/',
    stepNumber: 1,
  },
  {
    text: 'Personaliza',
    to: 'customize',
    stepNumber: 2,
  },
  {
    text: 'Resumen',
    to: 'resume',
    stepNumber: 3,
  },
];
