import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="mega-menu-dropdown"
      onMouseLeave={onClose}
      role="region"
      aria-label="Clothing Collections Mega Menu"
    >
      <div className="container-custom">
        <div className="row g-4">
          {/* Column 1: Tops */}
          <div className="col-lg-3">
            <h6 className="mega-column-title">Tops & Tailoring</h6>
            <ul className="mega-links-list">
              <li>
                <Link to="/shop?category=shirts" onClick={onClose}>
                  Oxford & Linen Shirts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=t-shirts" onClick={onClose}>
                  Heavyweight & Supima Tees
                </Link>
              </li>
              <li>
                <Link to="/shop?category=shirts&tags=new" onClick={onClose}>
                  New Season Over-shirts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=shirts&material=silk" onClick={onClose}>
                  Silk & Evening Blouses
                </Link>
              </li>
              <li>
                <Link to="/shop?category=t-shirts&tags=bestseller" onClick={onClose}>
                  Essential Boxy Crewnecks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Bottoms */}
          <div className="col-lg-3">
            <h6 className="mega-column-title">Bottoms & Trousers</h6>
            <ul className="mega-links-list">
              <li>
                <Link to="/shop?category=pants" onClick={onClose}>
                  Selvedge Denim & Chinos
                </Link>
              </li>
              <li>
                <Link to="/shop?category=trousers" onClick={onClose}>
                  Pleated Wool Trousers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=pants&material=linen" onClick={onClose}>
                  Drawstring Linen Slacks
                </Link>
              </li>
              <li>
                <Link to="/shop?category=pants&tags=bestseller" onClick={onClose}>
                  Wide-Leg Carpenter Pants
                </Link>
              </li>
              <li>
                <Link to="/shop?category=trousers&tags=new" onClick={onClose}>
                  Tailored Gurkha Trousers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Curated Edits */}
          <div className="col-lg-3">
            <h6 className="mega-column-title">Curated Edits</h6>
            <ul className="mega-links-list">
              <li>
                <Link to="/shop?tags=new" onClick={onClose}>
                  New Arrivals (Spring 2026)
                </Link>
              </li>
              <li>
                <Link to="/shop?tags=bestseller" onClick={onClose}>
                  Atelier Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/shop?gender=men" onClick={onClose}>
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?gender=women" onClick={onClose}>
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?sale=true" onClick={onClose} className="text-danger fw-semibold">
                  Seasonal Archive Sale (Up to 30% Off)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Editorial Spotlight Card */}
          <div className="col-lg-3">
            <div className="position-relative rounded-3 overflow-hidden bg-light" style={{ height: '220px' }}>
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
                alt="Spring 2026 Collection"
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute inset-0 d-flex flex-column justify-content-end p-3"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)',
                  color: '#FFFFFF',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <span className="small text-uppercase tracking-wider text-white-50" style={{ fontSize: '11px' }}>
                  Lookbook Issue 04
                </span>
                <h6 className="font-serif text-white mb-2" style={{ fontSize: '16px' }}>
                  The Architecture of Linen
                </h6>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="d-inline-flex align-items-center gap-1 text-white small text-decoration-none fw-semibold"
                >
                  <span>Explore The Story</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
