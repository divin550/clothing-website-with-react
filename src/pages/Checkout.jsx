import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import Breadcrumbs from '../components/common/Breadcrumbs';
import {
  ShieldCheck,
  CreditCard,
  Banknote,
  CheckCircle2,
  Lock,
  ArrowRight,
  PackageCheck,
  Truck,
} from 'lucide-react';

export default function Checkout() {
  const { cartItems, subtotal, shipping, discount, total, clearCart, coupon } = useCart();
  const { user, addOrder } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  // Active step: 1 (Contact), 2 (Shipping), 3 (Payment)
  const [currentStep, setCurrentStep] = useState(1);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    // Step 1: Contact
    email: user?.email || '',
    phone: user?.phone || '',
    isGuest: !user,

    // Step 2: Shipping
    firstName: user?.name ? user.name.split(' ')[0] : '',
    lastName: user?.name ? user.name.split(' ').slice(1).join(' ') : '',
    address: user?.address || '',
    apartment: '',
    city: user?.city || '',
    postalCode: user?.postalCode || '',
    country: user?.country || 'United States',
    shippingMethod: 'standard', // 'standard' | 'express'

    // Step 3: Payment
    paymentMethod: 'card', // 'card' | 'cod'
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: user?.name || '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const errs = {};
    if (!formData.email || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone || formData.phone.length < 7) {
      errs.phone = 'Please provide a valid contact telephone';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.address.trim()) errs.address = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.postalCode.trim()) errs.postalCode = 'Postal / Zip code is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = () => {
    const errs = {};
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 15) {
        errs.cardNumber = 'Valid 16-digit card number required';
      }
      if (!formData.cardExpiry || !formData.cardExpiry.includes('/')) {
        errs.cardExpiry = 'Format MM/YY required';
      }
      if (!formData.cardCvc || formData.cardCvc.length < 3) {
        errs.cardCvc = '3 or 4-digit CVC required';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const orderPayload = {
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.address}${formData.apartment ? ', ' + formData.apartment : ''}`,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        items: [...cartItems],
        subtotal,
        shipping: formData.shippingMethod === 'express' ? shipping + 25 : shipping,
        discount,
        total: formData.shippingMethod === 'express' ? total + 25 : total,
        paymentMethod: formData.paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery',
      };

      const placedOrder = addOrder(orderPayload);
      clearCart();
      setIsSubmitting(false);
      setCompletedOrder(placedOrder);
      addToast('Order successfully confirmed!', 'success');
      window.scrollTo(0, 0);
    }, 1200);
  };

  // Render Order Confirmation View
  if (completedOrder) {
    return (
      <div className="checkout-success-page py-5">
        <div className="container-custom" style={{ maxWidth: '780px' }}>
          <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm text-center">
            <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
              <PackageCheck size={56} />
            </div>

            <span className="small text-uppercase fw-bold tracking-wider text-success d-block mb-1">
              Order Confirmed
            </span>
            <h1 className="font-serif mb-2">Thank You For Your Order</h1>
            <p className="text-muted small mb-4">
              A detailed confirmation dispatch has been sent to <strong>{completedOrder.customer.email}</strong>.
            </p>

            {/* Order Reference Box */}
            <div className="p-3 bg-light rounded-3 text-start mb-4 border d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
              <div>
                <span className="small text-muted d-block">Order Reference Number:</span>
                <strong className="fs-5 text-dark font-monospace">{completedOrder.id}</strong>
              </div>
              <div>
                <span className="small text-muted d-block">Tracking Number:</span>
                <span className="fw-semibold text-dark font-monospace">{completedOrder.trackingNumber}</span>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="text-start mb-4 border-top pt-3">
              <h6 className="form-label-atelier text-uppercase mb-3">Items In This Shipment</h6>
              <div className="d-flex flex-column gap-2">
                {completedOrder.items.map((item) => (
                  <div key={item.id} className="d-flex align-items-center justify-content-between py-2 border-bottom">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-2 object-fit-cover"
                        style={{ width: '48px', height: '60px' }}
                      />
                      <div>
                        <div className="fw-semibold small text-dark">{item.name}</div>
                        <div className="text-muted small" style={{ fontSize: '12px' }}>
                          Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                        </div>
                      </div>
                    </div>
                    <span className="fw-bold text-dark small">
                      ${item.effectivePrice * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total breakdown */}
            <div className="p-3 bg-light rounded-2 text-start mb-4 small">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Subtotal</span>
                <span>${completedOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Shipping</span>
                <span>{completedOrder.shipping === 0 ? 'Complimentary' : `$${completedOrder.shipping.toFixed(2)}`}</span>
              </div>
              {completedOrder.discount > 0 && (
                <div className="d-flex justify-content-between mb-1 text-accent">
                  <span>Promotional Discount</span>
                  <span>-${completedOrder.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="d-flex justify-content-between fw-bold text-dark fs-6 pt-2 border-top">
                <span>Total Paid</span>
                <span>${completedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/account" className="btn-atelier-secondary">
                View in Order History
              </Link>
              <Link to="/shop" className="btn-atelier-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty and no completed order, redirect prompt
  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-5 text-center my-5">
        <h3 className="font-serif mb-2">No Items in Checkout</h3>
        <p className="text-muted small mb-4">
          Please add items to your shopping bag before proceeding to checkout.
        </p>
        <Link to="/shop" className="btn-atelier-primary">
          Explore The Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page py-4 pb-5">
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: 'Shopping Bag', path: '/cart' },
            { label: 'Checkout' },
          ]}
        />

        <div className="row g-4 g-lg-5">
          {/* Left Column: 3-Step Checkout Accordion / Stepper */}
          <div className="col-12 col-lg-7">
            {/* Step Navigation Tabs */}
            <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
              <span className={`badge rounded-pill ${currentStep >= 1 ? 'bg-dark text-white' : 'bg-light text-muted'} px-3 py-2 small`}>
                1. Contact
              </span>
              <span className="text-muted">→</span>
              <span className={`badge rounded-pill ${currentStep >= 2 ? 'bg-dark text-white' : 'bg-light text-muted'} px-3 py-2 small`}>
                2. Shipping
              </span>
              <span className="text-muted">→</span>
              <span className={`badge rounded-pill ${currentStep >= 3 ? 'bg-dark text-white' : 'bg-light text-muted'} px-3 py-2 small`}>
                3. Payment
              </span>
            </div>

            {/* STEP 1: CONTACT */}
            <div className={`p-4 rounded-3 border mb-4 ${currentStep === 1 ? 'bg-white shadow-sm' : 'bg-light opacity-75'}`}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="font-serif fs-5 mb-0">Step 1: Contact Information</h4>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="btn btn-link btn-sm text-decoration-underline p-0 small text-dark"
                  >
                    Edit
                  </button>
                )}
              </div>

              {currentStep === 1 ? (
                <div>
                  <div className="mb-3">
                    <label className="form-label-atelier">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="e.g. alexander@atelier.com"
                      className="form-control-atelier"
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label-atelier">Phone Number (For Delivery Updates)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className="form-control-atelier"
                    />
                    {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                  </div>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-atelier-primary btn-atelier-sm mt-2"
                  >
                    Continue to Shipping
                  </button>
                </div>
              ) : (
                <div className="small text-muted">
                  <span>{formData.email}</span> · <span>{formData.phone}</span>
                </div>
              )}
            </div>

            {/* STEP 2: SHIPPING */}
            <div className={`p-4 rounded-3 border mb-4 ${currentStep === 2 ? 'bg-white shadow-sm' : 'bg-light opacity-75'}`}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="font-serif fs-5 mb-0">Step 2: Shipping Destination</h4>
                {currentStep > 2 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="btn btn-link btn-sm text-decoration-underline p-0 small text-dark"
                  >
                    Edit
                  </button>
                )}
              </div>

              {currentStep === 2 ? (
                <div>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="form-control-atelier"
                      />
                      {errors.firstName && <span className="form-error-msg">{errors.firstName}</span>}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="form-control-atelier"
                      />
                      {errors.lastName && <span className="form-error-msg">{errors.lastName}</span>}
                    </div>
                    <div className="col-12">
                      <label className="form-label-atelier">Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Street address or P.O. Box"
                        className="form-control-atelier"
                      />
                      {errors.address && <span className="form-error-msg">{errors.address}</span>}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Apartment / Suite (Optional)</label>
                      <input
                        type="text"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                        placeholder="Apt 4B"
                        className="form-control-atelier"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="form-control-atelier"
                      />
                      {errors.city && <span className="form-error-msg">{errors.city}</span>}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Postal / ZIP Code</label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="form-control-atelier"
                      />
                      {errors.postalCode && <span className="form-error-msg">{errors.postalCode}</span>}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Country</label>
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="form-select-atelier"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>

                    {/* Delivery Method Selector */}
                    <div className="col-12 mt-4">
                      <span className="form-label-atelier mb-2">Delivery Method</span>
                      <div className="d-flex flex-column gap-2">
                        <label
                          className={`p-3 border rounded-2 d-flex align-items-center justify-content-between cursor-pointer ${
                            formData.shippingMethod === 'standard' ? 'border-dark bg-white' : 'bg-light'
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <input
                              type="radio"
                              name="shippingMethod"
                              checked={formData.shippingMethod === 'standard'}
                              onChange={() => handleInputChange('shippingMethod', 'standard')}
                            />
                            <div>
                              <div className="fw-semibold small text-dark">Standard Atelier Shipping (3–5 Business Days)</div>
                              <div className="text-muted small">Signature presentation packaging</div>
                            </div>
                          </div>
                          <span className="small fw-semibold text-dark">
                            {shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}
                          </span>
                        </label>

                        <label
                          className={`p-3 border rounded-2 d-flex align-items-center justify-content-between cursor-pointer ${
                            formData.shippingMethod === 'express' ? 'border-dark bg-white' : 'bg-light'
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <input
                              type="radio"
                              name="shippingMethod"
                              checked={formData.shippingMethod === 'express'}
                              onChange={() => handleInputChange('shippingMethod', 'express')}
                            />
                            <div>
                              <div className="fw-semibold small text-dark">Express Priority Courier (1–2 Business Days)</div>
                              <div className="text-muted small">Priority handling & carbon-neutral transit</div>
                            </div>
                          </div>
                          <span className="small fw-semibold text-dark">+$25.00</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="btn-atelier-secondary btn-atelier-sm"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn-atelier-primary btn-atelier-sm"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              ) : currentStep > 2 ? (
                <div className="small text-muted">
                  <span>{formData.firstName} {formData.lastName}</span>, <span>{formData.address}</span>, <span>{formData.city}</span> ({formData.shippingMethod === 'express' ? 'Express Courier' : 'Standard Delivery'})
                </div>
              ) : null}
            </div>

            {/* STEP 3: PAYMENT */}
            <div className={`p-4 rounded-3 border mb-4 ${currentStep === 3 ? 'bg-white shadow-sm' : 'bg-light opacity-75'}`}>
              <h4 className="font-serif fs-5 mb-3">Step 3: Payment Method</h4>

              {currentStep === 3 && (
                <form onSubmit={handlePlaceOrder}>
                  <div className="d-flex gap-3 mb-4">
                    <label
                      className={`flex-grow-1 p-3 border rounded-2 d-flex align-items-center gap-2 cursor-pointer ${
                        formData.paymentMethod === 'card' ? 'border-dark bg-white shadow-sm' : 'bg-light'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'card'}
                        onChange={() => handleInputChange('paymentMethod', 'card')}
                      />
                      <CreditCard size={18} />
                      <span className="fw-semibold small">Credit / Debit Card</span>
                    </label>

                    <label
                      className={`flex-grow-1 p-3 border rounded-2 d-flex align-items-center gap-2 cursor-pointer ${
                        formData.paymentMethod === 'cod' ? 'border-dark bg-white shadow-sm' : 'bg-light'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={() => handleInputChange('paymentMethod', 'cod')}
                      />
                      <Banknote size={18} />
                      <span className="fw-semibold small">Cash on Delivery</span>
                    </label>
                  </div>

                  {/* Card fields */}
                  {formData.paymentMethod === 'card' ? (
                    <div className="p-3 bg-light rounded-3 mb-4 border">
                      <div className="row g-3">
                        <div className="col-12">
                          <label className="form-label-atelier">Name On Card</label>
                          <input
                            type="text"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange('cardName', e.target.value)}
                            placeholder="ALEXANDER VANCE"
                            className="form-control-atelier text-uppercase"
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label-atelier">Card Number</label>
                          <input
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            placeholder="4532 •••• •••• 8892"
                            className="form-control-atelier"
                            maxLength="19"
                          />
                          {errors.cardNumber && <span className="form-error-msg">{errors.cardNumber}</span>}
                        </div>
                        <div className="col-6">
                          <label className="form-label-atelier">Expiry</label>
                          <input
                            type="text"
                            value={formData.cardExpiry}
                            onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                            placeholder="MM / YY"
                            className="form-control-atelier"
                            maxLength="5"
                          />
                          {errors.cardExpiry && <span className="form-error-msg">{errors.cardExpiry}</span>}
                        </div>
                        <div className="col-6">
                          <label className="form-label-atelier">Security Code (CVC)</label>
                          <input
                            type="password"
                            value={formData.cardCvc}
                            onChange={(e) => handleInputChange('cardCvc', e.target.value)}
                            placeholder="CVC"
                            className="form-control-atelier"
                            maxLength="4"
                          />
                          {errors.cardCvc && <span className="form-error-msg">{errors.cardCvc}</span>}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-light rounded-3 mb-4 border small text-muted">
                      Pay securely with cash upon doorstep presentation. Please ensure exact change is available at the time of courier handoff.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-atelier-primary w-100"
                  >
                    {isSubmitting ? (
                      <span>Processing Secure Order...</span>
                    ) : (
                      <>
                        <Lock size={16} />
                        <span>Authorize & Place Order (${(formData.shippingMethod === 'express' ? total + 25 : total).toFixed(2)})</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Order Summary */}
          <div className="col-12 col-lg-5">
            <div className="p-4 bg-light rounded-3 border sticky-top" style={{ top: '100px' }}>
              <h4 className="font-serif fs-5 mb-3">Order Summary ({cartItems.length} items)</h4>

              {/* Items preview */}
              <div className="d-flex flex-column gap-3 mb-4 max-h-300 overflow-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-2 object-fit-cover"
                        style={{ width: '44px', height: '56px' }}
                      />
                      <div>
                        <div className="fw-semibold small text-dark text-truncate" style={{ maxWidth: '180px' }}>
                          {item.name}
                        </div>
                        <div className="text-muted small" style={{ fontSize: '11px' }}>
                          {item.size} · {item.color} · Qty {item.quantity}
                        </div>
                      </div>
                    </div>
                    <span className="fw-bold small text-dark">
                      ${item.effectivePrice * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <hr />

              {/* Subtotal & Totals */}
              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-muted">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-muted">Shipping</span>
                <span>
                  {formData.shippingMethod === 'express'
                    ? `$${(shipping + 25).toFixed(2)}`
                    : shipping === 0
                    ? 'Complimentary'
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="d-flex justify-content-between mb-2 small text-accent">
                  <span>Promotional Discount ({coupon?.code})</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <hr />

              <div className="d-flex justify-content-between align-items-baseline mb-3">
                <span className="fw-bold text-dark">Total</span>
                <span className="fw-bold fs-4 text-dark">
                  ${(formData.shippingMethod === 'express' ? total + 25 : total).toFixed(2)}
                </span>
              </div>

              <div className="d-flex align-items-center gap-2 small text-muted">
                <ShieldCheck size={16} className="text-success" />
                <span>30-Day Money Back Guarantee · Encrypted 256-Bit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
