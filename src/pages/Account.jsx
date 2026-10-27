import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProductCard from '../components/product/ProductCard';
import {
  User,
  Package,
  Heart,
  MapPin,
  LogOut,
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  Clock,
  Truck,
} from 'lucide-react';

export default function Account() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, isAuthenticated, orders, login, register, logout, updateProfile } = useAuth();
  const { wishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'orders');

  // Auth form states
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [loginEmail, setLoginEmail] = useState('alexander@atelier.com');
  const [loginPassword, setLoginPassword] = useState('password123');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  // Profile edit state
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    postalCode: user?.postalCode || '',
  });

  useEffect(() => {
    if (user) {
      setProfileForm({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        postalCode: user.postalCode || '',
      });
    }
  }, [user]);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSearchParams({ tab: tabName });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register(regName, regEmail, regPassword);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  // If unauthenticated, show Simulated Login / Register View
  if (!isAuthenticated) {
    return (
      <div className="account-auth-page py-5">
        <div className="container-custom" style={{ maxWidth: '480px' }}>
          <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
            <div className="text-center mb-4">
              <h2 className="font-serif mb-1">Client Portal</h2>
              <p className="text-muted small">
                Sign in to manage your orders, saved pieces, and delivery addresses.
              </p>
            </div>

            {/* Toggle Login / Register */}
            <div className="d-flex border-bottom mb-4">
              <button
                type="button"
                className={`flex-grow-1 pb-2 btn btn-link text-decoration-none fw-semibold ${
                  authMode === 'login' ? 'text-dark border-bottom border-dark border-2' : 'text-muted'
                }`}
                onClick={() => setAuthMode('login')}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`flex-grow-1 pb-2 btn btn-link text-decoration-none fw-semibold ${
                  authMode === 'register' ? 'text-dark border-bottom border-dark border-2' : 'text-muted'
                }`}
                onClick={() => setAuthMode('register')}
              >
                Create Account
              </button>
            </div>

            {authMode === 'login' ? (
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label className="form-label-atelier">Email Address</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="form-control-atelier"
                    required
                  />
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between">
                    <label className="form-label-atelier">Password</label>
                    <span className="small text-muted">Demo: any password</span>
                  </div>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="form-control-atelier"
                    required
                  />
                </div>
                <button type="submit" className="btn-atelier-primary w-100 mb-3">
                  Sign In
                </button>
                <div className="p-3 bg-light rounded-2 small text-muted text-center">
                  Quick demo: click <strong>Sign In</strong> directly to test with a pre-filled client profile!
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-3">
                  <label className="form-label-atelier">Full Name</label>
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Julian Martin"
                    className="form-control-atelier"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label-atelier">Email Address</label>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="julian@example.com"
                    className="form-control-atelier"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label-atelier">Password</label>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-control-atelier"
                    required
                  />
                </div>
                <button type="submit" className="btn-atelier-primary w-100 mb-3">
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page py-4 pb-5">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: 'My Account' }]} />

        {/* User Greeting Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center pb-4 mb-4 border-bottom">
          <div>
            <span className="small text-uppercase tracking-wider text-muted">
              Member Profile
            </span>
            <h1 className="font-serif mb-1">Welcome, {user.name}</h1>
            <p className="text-muted small mb-0">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="btn btn-outline-danger btn-sm d-inline-flex align-items-center gap-2 mt-3 mt-md-0"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Account Tabs */}
        <div className="row g-4 g-lg-5">
          {/* Navigation Sidebar */}
          <div className="col-12 col-md-3">
            <div className="list-group list-group-flush border rounded-3 overflow-hidden shadow-sm">
              <button
                type="button"
                className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 ${
                  activeTab === 'orders' ? 'bg-dark text-white active' : 'text-dark'
                }`}
                onClick={() => handleTabChange('orders')}
              >
                <Package size={18} />
                <span>Order History ({orders.length})</span>
              </button>

              <button
                type="button"
                className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 ${
                  activeTab === 'wishlist' ? 'bg-dark text-white active' : 'text-dark'
                }`}
                onClick={() => handleTabChange('wishlist')}
              >
                <Heart size={18} />
                <span>Saved Pieces ({wishlist.length})</span>
              </button>

              <button
                type="button"
                className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 ${
                  activeTab === 'profile' ? 'bg-dark text-white active' : 'text-dark'
                }`}
                onClick={() => handleTabChange('profile')}
              >
                <User size={18} />
                <span>Personal Profile</span>
              </button>

              <button
                type="button"
                className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 ${
                  activeTab === 'addresses' ? 'bg-dark text-white active' : 'text-dark'
                }`}
                onClick={() => handleTabChange('addresses')}
              >
                <MapPin size={18} />
                <span>Saved Addresses</span>
              </button>
            </div>
          </div>

          {/* Main Tab Panel */}
          <div className="col-12 col-md-9">
            {/* TAB 1: ORDER HISTORY */}
            {activeTab === 'orders' && (
              <div>
                <h3 className="font-serif fs-4 mb-3">Order History</h3>
                {orders.length === 0 ? (
                  <div className="text-center py-5 bg-light rounded-3">
                    <Package size={36} className="text-muted mb-2" />
                    <p className="text-muted small">No orders recorded yet.</p>
                    <Link to="/shop" className="btn-atelier-primary btn-atelier-sm">
                      Start Browsing
                    </Link>
                  </div>
                ) : (
                  <div className="d-flex flex-column gap-3">
                    {orders.map((ord) => (
                      <div key={ord.id} className="p-4 bg-white rounded-3 border shadow-sm">
                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center pb-3 mb-3 border-bottom gap-2">
                          <div>
                            <span className="small text-muted d-block">Order Reference:</span>
                            <strong className="font-monospace text-dark fs-6">{ord.id}</strong>
                          </div>
                          <div>
                            <span className="small text-muted d-block">Date:</span>
                            <span className="small fw-semibold">{new Date(ord.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div>
                            <span className="small text-muted d-block">Status:</span>
                            <span className={`badge ${ord.status === 'Delivered' ? 'bg-success' : 'bg-primary'} text-white`}>
                              {ord.status}
                            </span>
                          </div>
                          <div>
                            <span className="small text-muted d-block">Total:</span>
                            <strong className="fs-6">${ord.total.toFixed(2)}</strong>
                          </div>
                        </div>

                        {/* Items in order */}
                        <div className="d-flex flex-column gap-2 mb-3">
                          {ord.items.map((item, idx) => (
                            <div key={idx} className="d-flex align-items-center justify-content-between small">
                              <div className="d-flex align-items-center gap-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="rounded-2 object-fit-cover"
                                  style={{ width: '40px', height: '50px' }}
                                />
                                <div>
                                  <span className="fw-semibold text-dark d-block">{item.name}</span>
                                  <span className="text-muted small">
                                    Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                                  </span>
                                </div>
                              </div>
                              <span className="fw-bold">${item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-2 border-top small text-muted">
                          <span>Tracking: <strong className="font-monospace text-dark">{ord.trackingNumber}</strong></span>
                          <span>Payment: <strong>{ord.paymentMethod}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: WISHLIST */}
            {activeTab === 'wishlist' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="font-serif fs-4 mb-0">Saved Pieces ({wishlist.length})</h3>
                  {wishlist.length > 0 && (
                    <button
                      type="button"
                      onClick={clearWishlist}
                      className="btn btn-link text-muted small p-0 text-decoration-underline"
                    >
                      Clear Wishlist
                    </button>
                  )}
                </div>

                {wishlist.length === 0 ? (
                  <div className="text-center py-5 bg-light rounded-3">
                    <Heart size={36} className="text-muted mb-2" />
                    <h5 className="font-serif mb-1">Your Wishlist is Empty</h5>
                    <p className="text-muted small mb-3">
                      Tap the heart icon on any product card to save styles for later.
                    </p>
                    <Link to="/shop" className="btn-atelier-primary btn-atelier-sm">
                      Discover Collection
                    </Link>
                  </div>
                ) : (
                  <div className="row g-3 g-md-4">
                    {wishlist.map((prod) => (
                      <div key={prod.id} className="col-6 col-md-4">
                        <ProductCard product={prod} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: PERSONAL PROFILE */}
            {activeTab === 'profile' && (
              <div className="p-4 bg-white rounded-3 border shadow-sm">
                <h3 className="font-serif fs-4 mb-3">Edit Profile</h3>
                <form onSubmit={handleProfileSave}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Full Name</label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="form-control-atelier"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Email Address</label>
                      <input
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="form-control-atelier"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Telephone</label>
                      <input
                        type="tel"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="form-control-atelier"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-atelier-primary btn-atelier-sm mt-2">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 4: SAVED ADDRESSES */}
            {activeTab === 'addresses' && (
              <div className="p-4 bg-white rounded-3 border shadow-sm">
                <h3 className="font-serif fs-4 mb-3">Default Shipping Address</h3>
                <form onSubmit={handleProfileSave}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label-atelier">Street Address</label>
                      <input
                        type="text"
                        value={profileForm.address}
                        onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                        placeholder="742 Evergreen Terrace, Apt 4B"
                        className="form-control-atelier"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">City</label>
                      <input
                        type="text"
                        value={profileForm.city}
                        onChange={(e) => setProfileForm({ ...profileForm, city: e.target.value })}
                        placeholder="New York"
                        className="form-control-atelier"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label-atelier">Postal / ZIP Code</label>
                      <input
                        type="text"
                        value={profileForm.postalCode}
                        onChange={(e) => setProfileForm({ ...profileForm, postalCode: e.target.value })}
                        placeholder="10001"
                        className="form-control-atelier"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-atelier-primary btn-atelier-sm mt-2">
                        Update Shipping Address
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
