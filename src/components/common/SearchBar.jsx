import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Search, X, ArrowUpRight } from 'lucide-react';

export default function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [query]);

  const popularSearches = ['Oxford Shirt', 'Selvedge Denim', 'Merino Wool', 'Linen', 'Loafer', 'Tote'];

  const handleSelectProduct = (slug) => {
    navigate(`/product/${slug}`);
    onClose();
  };

  const handleCategorySearch = (cat) => {
    navigate(`/shop?category=${cat.toLowerCase()}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column"
      style={{
        backgroundColor: 'rgba(17, 17, 17, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1060,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search Catalog"
    >
      <div className="bg-white border-bottom shadow-sm py-4">
        <div className="container-custom">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="small text-uppercase fw-semibold tracking-wider text-muted">
              Search ATELIER Catalog
            </span>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-sm btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </div>

          <div className="position-relative">
            <Search
              size={22}
              className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product, category, material (e.g. linen, wool, denim)..."
              className="form-control-atelier ps-5 pe-4 fs-5"
              style={{ height: '56px', borderRadius: '8px' }}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="btn position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
                aria-label="Clear query"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Quick tags */}
          <div className="d-flex align-items-center gap-2 mt-3 flex-wrap">
            <span className="small text-muted">Trending searches:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="btn btn-sm btn-outline-secondary py-1 px-2 rounded-pill small"
                style={{ fontSize: '12px' }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Dropdown Container */}
      <div
        className="flex-grow-1 overflow-auto py-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="container-custom">
          {query.trim() && (
            <div className="bg-white rounded-3 shadow p-4">
              <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                <span className="fw-semibold text-dark">
                  Matching Products ({filteredProducts.length})
                </span>
                {filteredProducts.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      navigate(`/shop?search=${encodeURIComponent(query)}`);
                      onClose();
                    }}
                    className="btn btn-link btn-sm text-decoration-none p-0 fw-semibold text-dark d-flex align-items-center gap-1"
                  >
                    <span>View all matching results</span>
                    <ArrowUpRight size={16} />
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted mb-2">No products found matching "{query}"</p>
                  <p className="small text-muted">
                    Try searching for shirts, pants, trousers, bags, or shoes.
                  </p>
                </div>
              ) : (
                <div className="row g-3">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="col-12 col-md-6 col-lg-4">
                      <div
                        onClick={() => handleSelectProduct(product.slug)}
                        className="d-flex align-items-center gap-3 p-2 rounded-2 hover-bg-light cursor-pointer border border-transparent transition-fast"
                        style={{ cursor: 'pointer', transition: 'background-color 0.15s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f7f7f7')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="rounded-2 object-fit-cover"
                          style={{ width: '64px', height: '80px' }}
                        />
                        <div className="flex-grow-1 min-w-0">
                          <span className="badge-atelier badge-atelier-stone mb-1" style={{ fontSize: '10px' }}>
                            {product.category}
                          </span>
                          <h6 className="mb-1 text-truncate text-dark" style={{ fontSize: '14px' }}>
                            {product.name}
                          </h6>
                          <div className="small fw-semibold text-dark">
                            ${product.salePrice ? product.salePrice : product.price}
                            {product.salePrice && (
                              <span className="text-muted text-decoration-line-through ms-2 small">
                                ${product.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
