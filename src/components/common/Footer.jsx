import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import {
  CreditCard,
  ShieldCheck,
  Truck,
  RotateCcw,
  Share2,
  Heart,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-custom">
        {/* Value Highlights Strip */}
        <div className="row g-4 pb-5 mb-5 border-bottom border-secondary border-opacity-25">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 rounded-circle bg-white text-dark flex-shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <h6 className="text-white mb-0 fs-6">Complimentary Shipping</h6>
                <span className="small text-white-50">On all orders over $150</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 rounded-circle bg-white text-dark flex-shrink-0">
                <RotateCcw size={20} />
              </div>
              <div>
                <h6 className="text-white mb-0 fs-6">30-Day Returns</h6>
                <span className="small text-white-50">Seamless door-to-door returns</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 rounded-circle bg-white text-dark flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h6 className="text-white mb-0 fs-6">Artisanal Quality</h6>
                <span className="small text-white-50">Regenerative, organic textiles</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 rounded-circle bg-white text-dark flex-shrink-0">
                <CreditCard size={20} />
              </div>
              <div>
                <h6 className="text-white mb-0 fs-6">Secure Checkout</h6>
                <span className="small text-white-50">Card & Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="row g-4 mb-5">
          {/* Brand & Story */}
          <div className="col-12 col-lg-4">
            <h4 className="header-brand text-white mb-3" style={{ fontSize: '24px' }}>
              ATELIER
            </h4>
            <p className="text-white-50 small mb-4 pe-lg-4" style={{ lineHeight: '1.8' }}>
              Founded on the belief that everyday clothing should possess quiet dignity, timeless silhouettes, and uncompromising tactile integrity. Designed in Paris, tailored in limited runs.
            </p>
            <div className="d-flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white-50 hover-text-white" aria-label="Instagram">
                <Share2 size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white-50 hover-text-white" aria-label="Facebook">
                <Heart size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white-50 hover-text-white" aria-label="Twitter">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Catalog Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="footer-heading">Collections</h6>
            <Link to="/shop?category=shirts" className="footer-link">Shirts</Link>
            <Link to="/shop?category=t-shirts" className="footer-link">T-Shirts</Link>
            <Link to="/shop?category=pants" className="footer-link">Pants</Link>
            <Link to="/shop?category=trousers" className="footer-link">Trousers</Link>
            <Link to="/shop?category=bags" className="footer-link">Leather Bags</Link>
            <Link to="/shop?category=shoes" className="footer-link">Shoes & Boots</Link>
            <Link to="/shop?sale=true" className="footer-link text-accent">Archive Sale</Link>
          </div>

          {/* Customer Care Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="footer-heading">Customer Care</h6>
            <Link to="/contact" className="footer-link">Contact Studio</Link>
            <Link to="/shipping-returns" className="footer-link">Shipping & Returns</Link>
            <Link to="/faq" className="footer-link">Size & Fit FAQ</Link>
            <Link to="/account" className="footer-link">Order Tracking</Link>
            <Link to="/about" className="footer-link">Our Philosophy</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>

          {/* Newsletter Box */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="footer-heading">Join The Atelier Journal</h6>
            <p className="text-white-50 small mb-3">
              Receive private invitations to seasonal private sales, fabric discoveries, and capsule previews.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment icons */}
        <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 small text-white-50">
          <div>
            © {new Date().getFullYear()} ATELIER Studio Ltd. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-secondary text-dark px-2 py-1">Visa</span>
            <span className="badge bg-secondary text-dark px-2 py-1">Mastercard</span>
            <span className="badge bg-secondary text-dark px-2 py-1">Amex</span>
            <span className="badge bg-secondary text-dark px-2 py-1">Apple Pay</span>
            <span className="badge bg-secondary text-dark px-2 py-1">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
