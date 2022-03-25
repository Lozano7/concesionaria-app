export interface DataCurrent {
  name: string;
  price: number;
}

export interface DataStateContext {
  price: number;
  motor: DataCurrent;
  traction: DataCurrent;
  transmission: DataCurrent;
  packages: DataCurrent;
  accessories: DataCurrent[];
  color: string;
}

export interface DataContext {
  data: DataStateContext;
  handleDataCustomChange: (name: string, value: DataCurrent) => void;
  handleDataPriceChange: (value: number) => void;
  handleDataColorChange: (value: string) => void;
  handleDataPowerChange: ({
    motor,
    traction,
    transmission,
  }: {
    motor: DataCurrent;
    transmission: DataCurrent;
    traction: DataCurrent;
  }) => void;
  handleDataPackagesChange: (packages: DataCurrent) => void;
}
