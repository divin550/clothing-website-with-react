import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductCard from '../components/product/ProductCard';
import NewsletterForm from '../components/common/NewsletterForm';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Truck,
  ShieldCheck,
  RotateCcw,
  Clock,
  Share2,
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  // Filter products for homepage sections
  const newArrivals = PRODUCTS.filter((p) => p.tags.includes('new'));
  const bestSellers = PRODUCTS.filter((p) => p.tags.includes('bestseller')).slice(0, 8);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const lookbookImages = [
    {
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
      title: 'Spring Poplin Oversize',
      tag: 'Shirts',
    },
    {
      url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
      title: 'Minimalist Monochromes',
      tag: 'Trousers',
    },
    {
      url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
      title: 'Italian Wool Silhouettes',
      tag: 'Tailoring',
    },
    {
      url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
      title: 'Everyday Leather Carry',
      tag: 'Bags',
    },
    {
      url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
      title: 'Raw Denim & Heavy Tees',
      tag: 'Essentials',
    },
    {
      url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
      title: 'Footwear & Classic Derby',
      tag: 'Shoes',
    },
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-banner py-5 py-lg-0">
        <div className="container-custom position-relative py-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 z-2">
              <span className="hero-editorial-badge d-inline-flex align-items-center gap-1">
                <Sparkles size={14} />
                <span>Spring / Summer 2026 Collection</span>
              </span>
              <h1 className="display-4 fw-bold mb-4 font-serif text-dark" style={{ lineHeight: '1.1' }}>
                Sculpted Simplicity. Pure Integrity.
              </h1>
              <p className="lead text-muted mb-5" style={{ maxWidth: '520px', fontSize: '1.15rem' }}>
                Unapologetic tailoring, organic Normandy linens, and artisan leather goods crafted for a lifetime of understated elegance.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/shop?gender=men" className="btn-atelier-primary">
                  <span>Shop Men</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/shop?gender=women" className="btn-atelier-secondary">
                  <span>Shop Women</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <div
                  className="rounded-4 overflow-hidden shadow-lg"
                  style={{
                    aspectRatio: '4 / 5',
                    maxHeight: '620px',
                    margin: '0 auto',
                    position: 'relative',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                    alt="Editorial model wearing Atelier tailored trench and linen trousers"
                    className="w-100 h-100 object-fit-cover"
                    loading="eager"
                  />
                  <div
                    className="position-absolute bottom-0 start-0 p-4 w-100"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                      color: '#FFFFFF',
                    }}
                  >
                    <span className="small text-uppercase tracking-wider text-white-50">Featured Look</span>
                    <h5 className="font-serif mb-0 text-white">The Pleated Serge & Camp Shirt</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Tiles (6 Categories) */}
      <section className="py-5 bg-white">
        <div className="container-custom py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="small text-uppercase fw-semibold tracking-wider text-muted">
                Curated Departures
              </span>
              <h2 className="font-serif mb-1">Explore By Category</h2>
            </div>
            <Link to="/shop" className="fw-semibold text-dark text-decoration-none d-inline-flex align-items-center gap-1 mt-2 mt-md-0">
              <span>View Full Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="row g-3 g-md-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="col-6 col-md-4">
                <Link to={`/shop?category=${cat.slug}`} className="category-tile text-decoration-none">
                  <img src={cat.image} alt={cat.name} loading="lazy" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x750/f5f2ee/999?text=' + cat.name; }} />
                  <div className="category-tile-overlay">
                    <span className="category-tile-sub">{cat.itemCount} Styles</span>
                    <h3 className="category-tile-title">{cat.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. New Arrivals Carousel */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container-custom py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <span className="small text-uppercase fw-semibold tracking-wider text-muted">
                Fresh From The Workshop
              </span>
              <h2 className="font-serif mb-1">New Arrivals</h2>
            </div>
            <div className="d-flex gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="btn btn-light rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px' }}
                aria-label="Previous new arrivals"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="btn btn-light rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px' }}
                aria-label="Next new arrivals"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="d-flex gap-3 gap-md-4 overflow-auto pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {newArrivals.map((product) => (
              <div
                key={product.id}
                style={{
                  flex: '0 0 280px',
                  scrollSnapAlign: 'start',
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Promotional Editorial Banner */}
      <section className="py-5 bg-white">
        <div className="container-custom py-4">
          <div
            className="rounded-4 overflow-hidden position-relative"
            style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
          >
            <div className="row g-0 align-items-center">
              <div className="col-12 col-lg-6 p-4 p-md-5">
                <span className="badge-atelier badge-atelier-sale mb-3">
                  Seasonal Privilege
                </span>
                <h2 className="display-5 font-serif text-white mb-3">
                  The Archive Collection — Up to 30% Off
                </h2>
                <p className="text-white-50 mb-4" style={{ maxWidth: '440px', lineHeight: '1.7' }}>
                  A limited selection of iconic outerwear, washed twills, and Italian leather carry, crafted in small batches and now available at archived pricing.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <Link to="/shop?sale=true" className="btn-atelier-accent">
                    <span>Shop Archive Sale</span>
                    <ArrowRight size={16} />
                  </Link>
                  <span className="small text-white-50">
                    Use code <strong>SAVE10</strong> for extra 10%
                  </span>
                </div>
              </div>
              <div className="col-12 col-lg-6" style={{ minHeight: '380px' }}>
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
                  alt="Archive sale promotional collection"
                  className="w-100 h-100 object-fit-cover"
                  style={{ maxHeight: '440px' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Best Sellers Product Grid */}
      <section className="py-5 bg-white">
        <div className="container-custom py-4">
          <div className="text-center mb-5" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="small text-uppercase fw-semibold tracking-wider text-muted">
              Perennial Favorites
            </span>
            <h2 className="font-serif mb-2">Our Bestsellers</h2>
            <p className="text-muted small">
              Client favorites celebrated for uncompromising comfort, tailored proportion, and enduring craftsmanship.
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {bestSellers.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/shop" className="btn-atelier-secondary">
              <span>View All 36 Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Shop With Us (4 Pillars) */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container-custom py-4">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex flex-column align-items-center">
                <div className="p-3 rounded-circle bg-light mb-3 text-dark">
                  <Truck size={28} />
                </div>
                <h5 className="font-serif fs-6 mb-1">Global Delivery</h5>
                <p className="text-muted small mb-0">
                  Complimentary express shipping on qualifying orders over $150.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex flex-column align-items-center">
                <div className="p-3 rounded-circle bg-light mb-3 text-dark">
                  <RotateCcw size={28} />
                </div>
                <h5 className="font-serif fs-6 mb-1">Simple Returns</h5>
                <p className="text-muted small mb-0">
                  Enjoy 30 days of hassle-free returns and exchanges on all items.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex flex-column align-items-center">
                <div className="p-3 rounded-circle bg-light mb-3 text-dark">
                  <ShieldCheck size={28} />
                </div>
                <h5 className="font-serif fs-6 mb-1">Artisan Sourced</h5>
                <p className="text-muted small mb-0">
                  Every thread is traced to ethical mills in France, Italy, and Japan.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex flex-column align-items-center">
                <div className="p-3 rounded-circle bg-light mb-3 text-dark">
                  <Clock size={28} />
                </div>
                <h5 className="font-serif fs-6 mb-1">Studio Support</h5>
                <p className="text-muted small mb-0">
                  Personal styling guidance and concierge support 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instagram / Lookbook Strip (6 Images) */}
      <section className="py-5 bg-white">
        <div className="container-custom py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="small text-uppercase fw-semibold tracking-wider text-muted d-flex align-items-center gap-1">
                <Share2 size={14} />
                <span>#AtelierEveryday</span>
              </span>
              <h2 className="font-serif mb-1">The Lookbook Journal</h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="small fw-semibold text-dark text-decoration-underline"
            >
              Follow @atelier.studio
            </a>
          </div>

          <div className="row g-2 g-md-3">
            {lookbookImages.map((item, idx) => (
              <div key={idx} className="col-4 col-md-2">
                <div
                  className="position-relative overflow-hidden rounded-2 group"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                  <div
                    className="position-absolute inset-0 d-flex flex-column justify-content-end p-2 opacity-0 hover-opacity-100 transition-fast"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      color: '#FFFFFF',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  >
                    <span className="badge bg-white text-dark small" style={{ fontSize: '9px', width: 'fit-content' }}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container-custom py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <span className="small text-uppercase fw-semibold tracking-wider text-muted">
                Stay Connected
              </span>
              <h2 className="font-serif mb-3">Privilege Access</h2>
              <p className="text-muted small mb-4">
                Subscribe to receive private previews of seasonal capsules, editorial features, and an exclusive 10% welcome coupon.
              </p>
              <NewsletterForm variant="light" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
