import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { X, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function CartDrawer() {
  const {
    cartItems,
    cartCount,
    subtotal,
    freeShippingThreshold,
    isCartDrawerOpen,
    closeCartDrawer,
  } = useCart();

  const navigate = useNavigate();

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckout = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    closeCartDrawer();
    navigate('/cart');
  };

  return (
    <>
      <div
        className={`atelier-drawer-backdrop ${isCartDrawerOpen ? 'show' : ''}`}
        onClick={closeCartDrawer}
        aria-hidden="true"
      />
      <div
        className={`atelier-drawer atelier-drawer-right ${isCartDrawerOpen ? 'show' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart Drawer"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="d-flex align-items-center gap-2">
            <ShoppingBag size={20} className="text-dark" />
            <h5 className="font-serif mb-0 fs-5">
              Your Bag ({cartCount})
            </h5>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-circle p-2"
            onClick={closeCartDrawer}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-light p-3 border-bottom">
          <div className="d-flex align-items-center gap-2 small text-dark mb-2">
            <Truck size={16} className="text-accent" />
            {amountRemaining > 0 ? (
              <span>
                Add <strong>${amountRemaining.toFixed(2)}</strong> more for <strong>Complimentary Worldwide Shipping</strong>
              </span>
            ) : (
              <span className="fw-semibold text-success">
                Congratulations! You unlocked Free Shipping.
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

        {/* Drawer Body */}
        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <div className="d-inline-flex p-3 rounded-circle bg-light mb-3 text-muted">
                <ShoppingBag size={40} />
              </div>
              <h5 className="font-serif mb-2">Your shopping bag is empty</h5>
              <p className="text-muted small mb-4">
                Explore our tailoring, essentials, bags, and handcrafted footwear.
              </p>
              <button
                type="button"
                onClick={() => {
                  closeCartDrawer();
                  navigate('/shop');
                }}
                className="btn-atelier-primary btn-atelier-sm"
              >
                Start Browsing
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} isMini={true} />
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Subtotal</span>
              <span className="fs-5 fw-bold text-dark">${subtotal.toFixed(2)}</span>
            </div>
            <p className="small text-muted mb-3" style={{ fontSize: '12px' }}>
              Shipping and promotional codes are calculated at checkout.
            </p>

            <div className="d-flex flex-column gap-2">
              <button
                type="button"
                onClick={handleCheckout}
                className="btn-atelier-primary w-100"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={handleViewCart}
                className="btn-atelier-secondary w-100"
              >
                View Bag Details
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2 mt-3 text-muted small" style={{ fontSize: '11px' }}>
              <ShieldCheck size={14} className="text-success" />
              <span>Complimentary Returns & Carbon-Neutral Delivery</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
