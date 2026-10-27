import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import Breadcrumbs from '../components/common/Breadcrumbs';
import {
  ShoppingBag,
  ArrowRight,
  Truck,
  Tag,
  Check,
  X,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

export default function Cart() {
  const {
    cartItems,
    cartCount,
    subtotal,
    shipping,
    discount,
    total,
    freeShippingThreshold,
    coupon,
    applyCoupon,
    removeCoupon,
    clearCart,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;

    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponInput('');
    } else {
      setCouponError(res.message);
    }
  };

  return (
    <div className="cart-page py-4 pb-5">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: 'Shopping Bag' }]} />

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="font-serif mb-0">Shopping Bag ({cartCount})</h1>
          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="btn btn-link text-muted p-0 small text-decoration-underline"
            >
              Clear Entire Bag
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-5 my-4 bg-light rounded-4 p-5">
            <div className="d-inline-flex p-4 rounded-circle bg-white shadow-sm mb-3 text-muted">
              <ShoppingBag size={48} />
            </div>
            <h3 className="font-serif mb-2">Your Bag is Empty</h3>
            <p className="text-muted small mb-4" style={{ maxWidth: '420px', margin: '0 auto' }}>
              Your shopping bag is currently unoccupied. Discover tailored shirts, selvedge denim, Italian leather carry, and minimal footwear.
            </p>
            <Link to="/shop" className="btn-atelier-primary">
              <span>Start Shopping</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="row g-4 g-lg-5">
            {/* Left: Cart Items List */}
            <div className="col-12 col-lg-8">
              {/* Free shipping banner */}
              <div className="p-3 bg-light rounded-3 mb-4 border">
                <div className="d-flex align-items-center gap-2 small text-dark mb-2">
                  <Truck size={18} className="text-accent" />
                  {amountRemaining > 0 ? (
                    <span>
                      Add <strong>${amountRemaining.toFixed(2)}</strong> more to receive{' '}
                      <strong>Complimentary Worldwide Shipping</strong>.
                    </span>
                  ) : (
                    <span className="fw-semibold text-success">
                      You've unlocked Complimentary Worldwide Shipping!
                    </span>
                  )}
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div
                    className={`progress-bar ${amountRemaining === 0 ? 'bg-success' : 'bg-dark'}`}
                    role="progressbar"
                    style={{ width: `${progressPercent}%`, transition: 'width 0.4s ease' }}
                    aria-valuenow={progressPercent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              {/* Line items list */}
              <div className="bg-white rounded-3">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                <Link to="/shop" className="small fw-semibold text-dark text-decoration-none d-flex align-items-center gap-1">
                  <span>← Continue Browsing</span>
                </Link>
                <span className="small text-muted">
                  All transactions encrypted & secure
                </span>
              </div>
            </div>

            {/* Right: Order Summary Card */}
            <div className="col-12 col-lg-4">
              <div className="p-4 bg-light rounded-3 border sticky-top" style={{ top: '100px' }}>
                <h4 className="font-serif mb-4 fs-5">Order Summary</h4>

                {/* Subtotal */}
                <div className="d-flex justify-content-between mb-2 small">
                  <span className="text-muted">Subtotal</span>
                  <span className="fw-semibold text-dark">${subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="d-flex justify-content-between mb-2 small">
                  <span className="text-muted">Estimated Shipping</span>
                  <span className="fw-semibold text-dark">
                    {shipping === 0 ? (
                      <span className="text-success">Complimentary</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Discount */}
                {discount > 0 && (
                  <div className="d-flex justify-content-between mb-2 small text-accent">
                    <span>Promo Discount ({coupon?.code})</span>
                    <span className="fw-semibold">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <hr className="my-3" />

                {/* Total */}
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fw-bold fs-6 text-dark">Estimated Total</span>
                  <span className="fw-bold fs-4 text-dark">${total.toFixed(2)}</span>
                </div>

                {/* Coupon Code Input */}
                <div className="mb-4">
                  <label className="form-label-atelier small mb-2 d-flex align-items-center gap-1">
                    <Tag size={14} />
                    <span>Promotional Code</span>
                  </label>

                  {coupon ? (
                    <div className="d-flex align-items-center justify-content-between p-2 px-3 bg-white border border-success rounded-2 small text-success">
                      <div className="d-flex align-items-center gap-2">
                        <Check size={16} />
                        <span><strong>{coupon.code}</strong> applied ({coupon.description})</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="btn btn-link text-muted p-0 ms-2"
                        aria-label="Remove promo code"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="d-flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="SAVE10 or ATELIER20"
                        className="form-control-atelier text-uppercase flex-grow-1"
                        style={{ height: '42px', fontSize: '13px' }}
                      />
                      <button
                        type="submit"
                        className="btn-atelier-secondary btn-atelier-sm"
                        style={{ height: '42px' }}
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {couponError && (
                    <span className="form-error-msg">{couponError}</span>
                  )}
                  <span className="small text-muted d-block mt-1" style={{ fontSize: '11px' }}>
                    Demo codes: <strong>SAVE10</strong> (10% off), <strong>ATELIER20</strong> (20% off $150+), <strong>FREESHIP</strong>
                  </span>
                </div>

                {/* Checkout CTA */}
                <button
                  type="button"
                  onClick={() => navigate('/checkout')}
                  className="btn-atelier-primary w-100 mb-3"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} />
                </button>

                {/* Security badges */}
                <div className="d-flex flex-column gap-2 small text-muted pt-2 border-top">
                  <div className="d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
                    <ShieldCheck size={15} className="text-success" />
                    <span>256-Bit SSL Encrypted Checkout</span>
                  </div>
                  <div className="d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
                    <RotateCcw size={15} className="text-success" />
                    <span>Free 30-Day Returns Policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
