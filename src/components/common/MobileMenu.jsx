import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { X, ChevronDown, User, Heart, ShoppingBag, Search, HelpCircle } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, onOpenSearch }) {
  const [clothingOpen, setClothingOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNav = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div
        className={`atelier-drawer-backdrop ${isOpen ? 'show' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`atelier-drawer atelier-drawer-left ${isOpen ? 'show' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <Link to="/" onClick={onClose} className="header-brand" style={{ fontSize: '20px' }}>
            ATELIER
          </Link>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-circle p-2"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {/* Quick search input */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-100 btn btn-light text-start text-muted d-flex align-items-center gap-2 mb-4 py-2 px-3 border"
            style={{ borderRadius: '6px' }}
          >
            <Search size={16} />
            <span className="small">Search products...</span>
          </button>

          {/* Primary Nav List */}
          <ul className="list-unstyled mb-4">
            <li className="border-bottom py-2">
              <Link to="/" onClick={onClose} className="fw-semibold text-dark text-decoration-none d-block py-1">
                Home
              </Link>
            </li>

            <li className="border-bottom py-2">
              <Link to="/shop" onClick={onClose} className="fw-semibold text-dark text-decoration-none d-block py-1">
                Shop All
              </Link>
            </li>

            {/* Clothing Accordion */}
            <li className="border-bottom py-2">
              <div
                className="d-flex align-items-center justify-content-between py-1 cursor-pointer"
                onClick={() => setClothingOpen(!clothingOpen)}
                style={{ cursor: 'pointer' }}
              >
                <span className="fw-semibold text-dark">Clothing</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: clothingOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                />
              </div>

              {clothingOpen && (
                <ul className="list-unstyled ps-3 pt-2 mb-1">
                  <li className="py-1">
                    <Link to="/shop?category=shirts" onClick={onClose} className="text-muted small text-decoration-none d-block">
                      Shirts
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/shop?category=t-shirts" onClick={onClose} className="text-muted small text-decoration-none d-block">
                      T-Shirts
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/shop?category=pants" onClick={onClose} className="text-muted small text-decoration-none d-block">
                      Pants
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/shop?category=trousers" onClick={onClose} className="text-muted small text-decoration-none d-block">
                      Trousers
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-bottom py-2">
              <Link to="/shop?category=bags" onClick={onClose} className="fw-semibold text-dark text-decoration-none d-block py-1">
                Bags
              </Link>
            </li>

            <li className="border-bottom py-2">
              <Link to="/shop?category=shoes" onClick={onClose} className="fw-semibold text-dark text-decoration-none d-block py-1">
                Shoes
              </Link>
            </li>

            <li className="border-bottom py-2">
              <Link to="/shop?sale=true" onClick={onClose} className="fw-semibold text-danger text-decoration-none d-block py-1">
                Archive Sale
              </Link>
            </li>

            <li className="border-bottom py-2">
              <Link to="/about" onClick={onClose} className="fw-semibold text-dark text-decoration-none d-block py-1">
                About Atelier
              </Link>
            </li>

            <li className="border-bottom py-2">
              <Link to="/contact" onClick={onClose} className="fw-semibold text-dark text-decoration-none d-block py-1">
                Contact & Studio
              </Link>
            </li>
          </ul>

          {/* Account & Wishlist shortcut */}
          <div className="bg-light p-3 rounded-2">
            <div className="d-flex align-items-center gap-2 mb-2">
              <User size={18} className="text-dark" />
              {isAuthenticated ? (
                <span className="small fw-semibold text-dark">Signed in as {user?.name}</span>
              ) : (
                <span className="small fw-semibold text-dark">Account & Orders</span>
              )}
            </div>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-dark flex-grow-1"
                onClick={() => handleNav('/account')}
              >
                {isAuthenticated ? 'My Profile' : 'Sign In / Register'}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleNav('/account?tab=wishlist')}
                aria-label="Wishlist"
              >
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <div className="d-flex justify-content-between align-items-center text-muted small">
            <span>Currency: <strong>USD ($)</strong></span>
            <Link to="/faq" onClick={onClose} className="text-muted d-flex align-items-center gap-1">
              <HelpCircle size={14} />
              <span>Need Help?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
