interface Props {
  title: string;
}

const TitleSubSteps = ({ title }: Props) => {
  return (
    <h3 className='text-2xl font-semibold capitalize text-center mt-[15px] sm:mt-[25px]'>
      {title}
    </h3>
  );
};

export default TitleSubSteps;
