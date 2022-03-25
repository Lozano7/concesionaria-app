import { FormEvent, useState } from 'react';

const useForm = <initialValueForm>(initialState: initialValueForm) => {
  const [formValues, setForm] = useState(initialState);

  const handleInputChange = (e: FormEvent<HTMLInputElement>): void => {
    setForm({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const reset = (): void => {
    setForm(initialState);
  };

  return { formValues, handleInputChange, reset };
};

export default useForm;
