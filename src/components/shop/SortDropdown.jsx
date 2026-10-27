import { ArrowUpDown } from 'lucide-react';

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <span className="small text-muted text-nowrap d-none d-sm-inline">
        Sort By:
      </span>
      <div className="position-relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-select-atelier py-1 pe-4 ps-3 small fw-semibold text-dark"
          style={{ height: '40px', width: 'auto', minWidth: '170px' }}
          aria-label="Sort products by"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest Arrivals</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="bestseller">Popularity / Bestsellers</option>
        </select>
      </div>
    </div>
  );
}
