import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { cartCount, openCartDrawer } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>
          Complimentary worldwide shipping on orders over $150 · Use code{' '}
          <strong>SAVE10</strong> for 10% off your order
        </span>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`site-header ${isScrolled ? 'scrolled' : ''}`}
        style={{
          paddingTop: isScrolled ? '12px' : '18px',
          paddingBottom: isScrolled ? '12px' : '18px',
        }}
      >
        <div className="container-custom">
          <div className="d-flex align-items-center justify-content-between">
            {/* Left: Mobile Menu Toggle & Desktop Navigation */}
            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                className="btn btn-sm btn-light p-2 d-lg-none"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={22} />
              </button>

              <nav className="d-none d-lg-flex align-items-center gap-1" aria-label="Main Navigation">
                <NavLink to="/shop" className="nav-link-atelier">
                  Shop All
                </NavLink>

                {/* Mega Menu Trigger */}
                <div
                  className="position-relative mega-menu-wrapper"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                >
                  <button
                    type="button"
                    className={`nav-link-atelier btn p-0 border-0 bg-transparent ${isMegaMenuOpen ? 'active' : ''}`}
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                  >
                    <span>Clothing</span>
                    <ChevronDown size={14} />
                  </button>
                </div>

                <NavLink to="/shop?category=bags" className="nav-link-atelier">
                  Bags
                </NavLink>

                <NavLink to="/shop?category=shoes" className="nav-link-atelier">
                  Shoes
                </NavLink>

                <NavLink to="/shop?sale=true" className="nav-link-atelier text-danger">
                  Sale
                </NavLink>
              </nav>
            </div>

            {/* Center: Brand Monogram / Logo */}
            <div className="text-center">
              <Link to="/" className="header-brand text-decoration-none">
                ATELIER
              </Link>
            </div>

            {/* Right: Actions (Search, Account, Wishlist, Cart) */}
            <div className="d-flex align-items-center gap-1 gap-sm-2">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="btn btn-sm btn-link text-dark p-2"
                aria-label="Search store"
                title="Search"
              >
                <Search size={20} />
              </button>

              {/* Account Link */}
              <Link
                to="/account"
                className="btn btn-sm btn-link text-dark p-2 d-none d-sm-inline-flex align-items-center"
                aria-label={isAuthenticated ? `Account (${user?.name})` : 'Sign in to account'}
                title={isAuthenticated ? user?.name : 'Account'}
              >
                <User size={20} />
              </Link>

              {/* Wishlist Link */}
              <Link
                to="/account?tab=wishlist"
                className="btn btn-sm btn-link text-dark p-2 position-relative"
                aria-label={`Wishlist (${wishlistCount} items)`}
                title="Wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span
                    className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '10px', padding: '3px 5px' }}
                  >
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Button */}
              <button
                type="button"
                onClick={openCartDrawer}
                className="btn btn-sm btn-link text-dark p-2 position-relative"
                aria-label={`Open shopping cart (${cartCount} items)`}
                title="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-dark text-white"
                    style={{ fontSize: '10px', padding: '3px 6px' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Search Bar Modal */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
