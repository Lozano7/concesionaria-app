import useCarrusel from '../../hooks/useCarrusel';
import useVehiclesScreen from '../../hooks/useVehiclesScreen';
import CarouselCategories from '../ui/CarouselCategories';
import Spinner from '../ui/Spinner';
import GridVehicles from './GridVehicles';

const VehiclesScreen = () => {
  const {
    categories,
    handleChangeCategory,
    indexCategoriesRef,
    selectedCategory,
    setCategories,
    setSelectedCategory,
  } = useCarrusel<string>();

  const { isLoading, vehicles } = useVehiclesScreen({
    selectedCategory,
    setCategories,
    setSelectedCategory,
  });

  if (isLoading) return <Spinner message='Loading Data' />;
  return (
    <div className='flex flex-col flex-grow'>
      <CarouselCategories
        handleChangeCategory={handleChangeCategory}
        categories={categories}
        indexCategoriesRef={indexCategoriesRef}
        selectedCategory={selectedCategory}
      />
      {vehicles.length > 0 ? (
        <GridVehicles vehicles={vehicles} />
      ) : (
        <Spinner message='Cargando Catálogo' />
      )}
    </div>
  );
};

export default VehiclesScreen;
