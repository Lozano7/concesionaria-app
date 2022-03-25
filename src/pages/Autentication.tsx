import backgroundVideo from '../assets/carVideo.mp4';
import AutenticationRouter from '../routes/AutenticationRouter';

const Autentication = () => {
  return (
    <div className='flex justify-start items flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={backgroundVideo}
          loop
          autoPlay
          muted
          controls={false}
          className='w-full h-full object-cover object-center'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay'>
          <AutenticationRouter />
        </div>
      </div>
    </div>
  );
};

export default Autentication;
