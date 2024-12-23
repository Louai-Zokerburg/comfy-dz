import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const cartTotal = Math.ceil(Math.random() * 100) * 1000;
  const shipping = Math.ceil(Math.random() * 100) * 100;
  const orderTotal = Math.ceil(Math.random() * 100) * 1000;
  const tax = Math.ceil(Math.random() * 100) * 10

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>{cartTotal} DA</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{shipping} DA</span>
        </p>
        {/* TAX */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>{tax} DA</span>
        </p>
        {/* ORDER TOTAL */}
        <p className='flex justify-between text-sm mt-4 pb-2'>
          <span>Order Total</span>
          <span className='font-medium'>{orderTotal} DA</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
