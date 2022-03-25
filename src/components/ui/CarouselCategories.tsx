interface Props {
  indexCategoriesRef: React.MutableRefObject<number>;
  handleChangeCategory: (direction: number) => void;
  selectedCategory: string | undefined;
  categories: string[];
}

const CarouselCategories = ({
  indexCategoriesRef,
  handleChangeCategory,
  selectedCategory,
  categories,
}: Props) => {
  return (
    <div className='flex justify-center w-full mt-[25px]'>
      <button
        className='flex flex-row items-center mr-1'
        onClick={() => handleChangeCategory(-1)}
        disabled={indexCategoriesRef.current === 0}
      >
        <i className='bx bx-chevron-left text-base flex items-center'></i>
        Regresar
      </button>
      <h3 className='text-lg sm:text-2xl font-medium capitalize mr-4 ml-5'>
        {selectedCategory?.toLowerCase()}
      </h3>

      <button
        className='flex flex-row items-center ml-1'
        onClick={() => handleChangeCategory(1)}
        disabled={indexCategoriesRef.current >= categories.length - 1}
      >
        Siguiente
        <i className='bx bx-chevron-right text-base flex items-center'></i>
      </button>
    </div>
  );
};

export default CarouselCategories;
