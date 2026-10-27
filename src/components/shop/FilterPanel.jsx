import { X, RotateCcw, Check } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

const AVAILABLE_SIZES = ['XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34', '36', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'One Size'];

const COLOR_FILTERS = [
  { name: 'White', hex: '#FFFFFF', border: true },
  { name: 'Black', hex: '#111111' },
  { name: 'Navy', hex: '#192841' },
  { name: 'Beige / Cream', hex: '#D5C4A1' },
  { name: 'Brown', hex: '#874118' },
  { name: 'Grey', hex: '#888888' },
  { name: 'Olive', hex: '#5B6244' },
  { name: 'Terracotta', hex: '#C8553D' },
];

export default function FilterPanel({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults,
  isMobile = false,
  isOpen = false,
  onClose = null,
}) {
  const handleCategoryToggle = (slug) => {
    onFilterChange('category', filters.category === slug ? '' : slug);
  };

  const handleGenderToggle = (gender) => {
    onFilterChange('gender', filters.gender === gender ? '' : gender);
  };

  const handleSizeToggle = (size) => {
    const current = filters.sizes || [];
    const updated = current.includes(size)
      ? current.filter((s) => s !== size)
      : [...current, size];
    onFilterChange('sizes', updated);
  };

  const handleColorToggle = (colorName) => {
    const current = filters.colors || [];
    const updated = current.includes(colorName)
      ? current.filter((c) => c !== colorName)
      : [...current, colorName];
    onFilterChange('colors', updated);
  };

  const content = (
    <div className="filter-panel-inner">
      {/* Header for mobile or desktop reset */}
      <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
        <h5 className="font-serif mb-0 fs-6 fw-bold">
          Filter Collection
        </h5>
        <button
          type="button"
          onClick={onResetFilters}
          className="btn btn-link btn-sm text-muted text-decoration-none p-0 d-flex align-items-center gap-1"
          style={{ fontSize: '13px' }}
        >
          <RotateCcw size={13} />
          <span>Reset</span>
        </button>
      </div>

      {/* Categories */}
      <div className="mb-4 pb-3 border-bottom">
        <h6 className="form-label-atelier text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
          Categories
        </h6>
        <div className="d-flex flex-column gap-2 mt-2">
          {CATEGORIES.map((cat) => {
            const isSelected = filters.category === cat.slug;
            return (
              <label
                key={cat.id}
                className="d-flex align-items-center justify-content-between small text-dark cursor-pointer user-select-none"
                style={{ cursor: 'pointer' }}
                onClick={() => handleCategoryToggle(cat.slug)}
              >
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="radio"
                    name="category-filter"
                    checked={isSelected}
                    onChange={() => {}}
                    className="form-check-input mt-0"
                  />
                  <span className={isSelected ? 'fw-bold text-dark' : 'text-muted'}>
                    {cat.name}
                  </span>
                </div>
                <span className="badge bg-light text-muted small">{cat.itemCount}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Gender */}
      <div className="mb-4 pb-3 border-bottom">
        <h6 className="form-label-atelier text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
          Gender
        </h6>
        <div className="d-flex gap-2 mt-2 flex-wrap">
          {['all', 'men', 'women', 'unisex'].map((g) => {
            const isSelected = (filters.gender || 'all') === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => handleGenderToggle(g === 'all' ? '' : g)}
                className={`btn btn-sm text-capitalize ${
                  isSelected ? 'btn-atelier-primary' : 'btn-outline-secondary'
                }`}
                style={{ height: '34px', fontSize: '12px', padding: '0 12px' }}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="mb-4 pb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="form-label-atelier text-uppercase mb-0" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
            Price Range
          </h6>
          <span className="small fw-bold text-dark">
            Up to ${filters.maxPrice || 350}
          </span>
        </div>
        <input
          type="range"
          min="40"
          max="350"
          step="10"
          value={filters.maxPrice || 350}
          onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
          className="form-range"
          aria-label="Filter maximum price"
        />
        <div className="d-flex justify-content-between small text-muted">
          <span>$40</span>
          <span>$350</span>
        </div>
      </div>

      {/* Sizes Filter */}
      <div className="mb-4 pb-3 border-bottom">
        <h6 className="form-label-atelier text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
          Size
        </h6>
        <div className="d-flex flex-wrap gap-1 mt-2">
          {AVAILABLE_SIZES.map((size) => {
            const isSelected = filters.sizes?.includes(size);
            return (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeToggle(size)}
                className={`btn btn-sm ${
                  isSelected ? 'btn-atelier-primary' : 'btn-outline-secondary'
                }`}
                style={{
                  minWidth: '38px',
                  height: '34px',
                  padding: '0 8px',
                  fontSize: '11px',
                  borderRadius: '4px',
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Colors Filter */}
      <div className="mb-4 pb-3 border-bottom">
        <h6 className="form-label-atelier text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
          Color Family
        </h6>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {COLOR_FILTERS.map((c) => {
            const isSelected = filters.colors?.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => handleColorToggle(c.name)}
                className="d-flex align-items-center gap-1 p-1 pe-2 rounded-pill border small cursor-pointer"
                style={{
                  backgroundColor: isSelected ? 'var(--color-secondary)' : '#FFFFFF',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
                title={c.name}
              >
                <span
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: c.hex,
                    display: 'inline-block',
                    border: c.border ? '1px solid #ccc' : 'none',
                  }}
                />
                <span className="text-dark">{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Availability / Sale toggles */}
      <div className="mb-4">
        <h6 className="form-label-atelier text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
          Preferences
        </h6>
        <div className="d-flex flex-column gap-2 mt-2">
          <label className="d-flex align-items-center gap-2 small text-dark cursor-pointer user-select-none">
            <input
              type="checkbox"
              checked={!!filters.onSaleOnly}
              onChange={(e) => onFilterChange('onSaleOnly', e.target.checked)}
              className="form-check-input mt-0"
            />
            <span>On Sale Items Only</span>
          </label>
          <label className="d-flex align-items-center gap-2 small text-dark cursor-pointer user-select-none">
            <input
              type="checkbox"
              checked={!!filters.inStockOnly}
              onChange={(e) => onFilterChange('inStockOnly', e.target.checked)}
              className="form-check-input mt-0"
            />
            <span>In Stock Only</span>
          </label>
          <label className="d-flex align-items-center gap-2 small text-dark cursor-pointer user-select-none">
            <input
              type="checkbox"
              checked={!!filters.fourStarsOnly}
              onChange={(e) => onFilterChange('fourStarsOnly', e.target.checked)}
              className="form-check-input mt-0"
            />
            <span>Rated 4.8 Stars & Above</span>
          </label>
        </div>
      </div>
    </div>
  );

  // If mobile drawer, render offcanvas wrapper
  if (isMobile) {
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
          aria-label="Filter Products"
        >
          <div className="drawer-header">
            <h5 className="font-serif mb-0 fs-5">Filters</h5>
            <button
              type="button"
              className="btn btn-sm btn-light rounded-circle p-2"
              onClick={onClose}
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          </div>
          <div className="drawer-body">{content}</div>
          <div className="drawer-footer">
            <button
              type="button"
              className="btn-atelier-primary w-100"
              onClick={onClose}
            >
              Apply Filters ({totalResults} Results)
            </button>
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar panel
  return <aside className="desktop-filter-sidebar">{content}</aside>;
}
