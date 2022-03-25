import { DataStateContext } from '../types/contex_interfaces/interfaces';

export function getInitialPrice(title: string, data: DataStateContext): number {
  if (title.toLocaleLowerCase() === 'motor') {
    return data.motor.price;
  } else if (title.toLocaleLowerCase() === 'transmission') {
    return data.transmission.price;
  } else if (title.toLocaleLowerCase() === 'traction') {
    return data.traction.price;
  } else if (title.toLocaleLowerCase() === 'packages') {
    return data.packages.price;
  }
  return 0;
}
