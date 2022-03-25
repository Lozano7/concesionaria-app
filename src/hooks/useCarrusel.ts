import { useRef, useState } from 'react';

function useCarrusel<t>(data: t[] = []) {
  const [categories, setCategories] = useState<t[]>(data);
  const [selectedCategory, setSelectedCategory] = useState<t>();
  const indexCategoriesRef = useRef<number>(0);
  const handleChangeCategory = (num: number) => {
    if (
      indexCategoriesRef.current >= 0 &&
      indexCategoriesRef.current < categories?.length
    ) {
      indexCategoriesRef.current += num;
      setSelectedCategory(categories[indexCategoriesRef.current]);
    }
  };
  return {
    setCategories,
    setSelectedCategory,
    handleChangeCategory,
    categories,
    selectedCategory,
    indexCategoriesRef,
  };
}

export default useCarrusel;
