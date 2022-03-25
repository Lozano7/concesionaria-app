import { useEffect, useRef, useState } from 'react';
import { AttributesDatum } from '../types/api_types/interfaces';
import useAxiosFetch from './useAxiosFetch';

interface Props {
  setCategories: (categories: string[]) => void;
  setSelectedCategory: (selectedCategory: string) => void;
  selectedCategory: string | undefined;
}

const useVehiclesScreen = ({
  setCategories,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const [vehicles, setVehicles] = useState<AttributesDatum[]>([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    'https://concesioraria-api-strapi.herokuapp.com/api/dealerships'
  );

  useEffect(() => {
    if (data) {
      let categories = data.map((category) => category.attributes.name);
      setCategories(categories);
      setSelectedCategory(categories[0]);
    }
  }, [data]);

  useEffect(() => {
    if (selectedCategory) {
      let vehicles = data.filter(
        (category) => category.attributes.name === selectedCategory
      );
      setVehicles(vehicles[0].attributes.data);
    }
  }, [selectedCategory]);
  return {
    isLoading,
    vehicles,
  };
};

export default useVehiclesScreen;
