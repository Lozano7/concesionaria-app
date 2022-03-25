import axios from 'axios';
import { useSelector } from 'react-redux';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { auth } from '../../firebase/config';
import { getColor } from '../../helpers/getColor';
import { RootState } from '../../store/index';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const ResumenScreen = () => {
  const { vehicleSelectedToBy } = useSelector(
    (state: RootState) => state.processByVehicle
  );
  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );
  const { data: dataInitial } = vehicleData;
  const { price: priceInitial } = dataInitial;

  const { isLoggedIn } = useSelector((state: RootState) => state.userAuth);
  const { basicInfo, data } = vehicleSelectedToBy;

  const handleToken = async (token: Token) => {
    const product = { ...data, name: basicInfo.name };
    const response = await axios.post(
      'https://concesionaria-dawa.herokuapp.com/validate',
      {
        token,
        product,
      }
    );

    const { status } = response.data;
    if (status === 'success') {
      toast('Con Exito!... Revice su Email', {
        type: 'success',
      });
    } else {
      toast('Error!, Intente de Nuevo', {
        type: 'error',
      });
    }
  };

  return (
    <div className='w-full mt-7'>
      <div className='w-[80vw] sm:w-[40vw] lg:w-[30vw] grid grid-cols-1 mx-auto mg-3'>
        <div className='rounded overflow-hidden shadow-lg glass-card mb-7'>
          <img
            className='w-full object-cover object-top'
            src={basicInfo.imgURL}
            alt={basicInfo.name}
          />
          <div className='py-4 '>
            <div className='font-bold text-lg mb-2 px-6 '>{basicInfo.name}</div>
            <div className='font-bold text-lg mb-2 px-6 '>
              Año: {basicInfo.age}
            </div>
            <div className='font-bold text-lg mb-2 px-6 '>
              Valor Inicial: {priceInitial}
            </div>
            <div className='font-bold text-lg mb-2 px-6 flex items-center'>
              Color:{' '}
              <div
                className={`ml-2 w-4 h-4 rounded flex ${getColor(
                  data.color.trim()
                )}`}
              ></div>
            </div>
            <div className='font-bold text-lg mb-2 px-6 '>
              Motor:
              <h3 className='text-sm font-medium'>
                {data.motor.name} $ {data.motor.price}
              </h3>
            </div>
            <div className='font-bold text-lg mb-2 px-6 '>
              Transmisión:
              <h3 className='text-sm font-medium'>
                {data.transmission.name} $ {data.transmission.price}
              </h3>
            </div>
            {data.traction.name !== '' && (
              <div className='font-bold text-lg mb-2 px-6 '>
                Tracción:
                <h3 className='text-sm font-medium'>
                  {data.traction.name} $ {data.traction.price}
                </h3>
              </div>
            )}
            <div className='font-bold text-lg mb-2 px-6 '>
              Paquetes:
              <h3 className='text-sm font-medium'>
                {data.packages.name} $ {data.packages.price}
              </h3>
            </div>
            <div className='font-bold text-lg mb-2 px-6 '>
              Total: $ {data.price}
            </div>
          </div>
          <div className='flex justify-center mb-4'>
            {isLoggedIn ? (
              <StripeCheckout
                stripeKey='pk_test_51Kh06CJYGyJH8nQPA5365nczllLj1A0jrb2iLXan3jwtcYpR2rFfSgSbKueAl0IFcwlN0ayy8onvpyKQtqh5YNGS00wyIZjhov'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={data.price * 100}
                name={`Vehicle: ${basicInfo.name}`}
                email={
                  (auth.currentUser?.email && auth.currentUser.email) || ''
                }
              />
            ) : (
              <h3 className='text-center px-3 font-semibold '>
                Inicie Sesion si desea realizar la compra del vehículo
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenScreen;
