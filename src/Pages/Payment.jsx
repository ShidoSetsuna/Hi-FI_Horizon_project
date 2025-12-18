import { useCartStore } from "../Components/Cart/CartStore";

import CheckoutStepper from "../Components/CheckoutStepper/CheckoutStepper";
import DeliveryMethod from "../Components/PaymentPage/DeliveryMethod/DeliveryMethod";
import PaymentForm from "../Components/PaymentPage/PaymentForm/PaymentForm";
import PaymentMethod from "../Components/PaymentPage/PaymentMethod/PaymentMethod";

import "../Styles/payment.sass"

export default function Payment() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <div className="payment-page">
      <CheckoutStepper />

      <div className="payment-page__content">
        <div className="payment-page__left">
          <div className="payment-page__form-title">
            <h3>Your info</h3>
            <PaymentForm />
          </div>

          <div className="payment-page__delivery-title">
            <h3>Select your prefered delivery method</h3>
            <DeliveryMethod />
          </div>

          <div className="payment-page__payment-method-title">
            <h3>Choose payment method</h3>
            <PaymentMethod />
          </div>
        </div>

        <div className="payment-page__right">
          <h2>Order Summary</h2>
          <div className="payment-page__order-items">
            {items.map((item) => (
              <div key={item.id} className="payment-page__order-item">
                <span>{item.name} x {item.quantity}</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
