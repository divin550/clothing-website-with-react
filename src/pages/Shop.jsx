import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductGrid from '../components/product/ProductGrid';
import FilterPanel from '../components/shop/FilterPanel';
import SortDropdown from '../components/shop/SortDropdown';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { SlidersHorizontal, X, ArrowDown } from 'lucide-react';

const INITIAL_FILTERS = {
  category: '',
  gender: '',
  sizes: [],
  colors: [],
  maxPrice: 350,
  onSaleOnly: false,
  inStockOnly: false,
  fourStarsOnly: false,
  search: '',
  tags: '',
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Sync state with search params on initial load or param change
  useEffect(() => {
    const categoryParam = searchParams.get('category') || '';
    const genderParam = searchParams.get('gender') || '';
    const saleParam = searchParams.get('sale') === 'true';
    const searchParam = searchParams.get('search') || '';
    const tagsParam = searchParams.get('tags') || '';

    setFilters((prev) => ({
      ...prev,
      category: categoryParam,
      gender: genderParam,
      onSaleOnly: saleParam,
      search: searchParam,
      tags: tagsParam,
    }));
    setVisibleCount(8);
  }, [searchParams]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setVisibleCount(8);
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSearchParams({});
    setVisibleCount(8);
  };

  // Filter and sort computation
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search query
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Gender
    if (filters.gender && filters.gender !== 'all') {
      result = result.filter(
        (p) => p.gender === filters.gender || p.gender === 'unisex'
      );
    }

    // Tags
    if (filters.tags) {
      result = result.filter((p) => p.tags.includes(filters.tags));
    }

    // Price
    if (filters.maxPrice) {
      result = result.filter((p) => {
        const effectivePrice = p.salePrice !== null ? p.salePrice : p.price;
        return effectivePrice <= filters.maxPrice;
      });
    }

    // Sizes
    if (filters.sizes && filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.variants?.some((v) => filters.sizes.includes(v.size))
      );
    }

    // Colors
    if (filters.colors && filters.colors.length > 0) {
      result = result.filter((p) =>
        p.variants?.some((v) =>
          filters.colors.some((cf) => v.color.toLowerCase().includes(cf.toLowerCase()))
        )
      );
    }

    // On sale only
    if (filters.onSaleOnly) {
      result = result.filter((p) => p.salePrice !== null);
    }

    // In stock only
    if (filters.inStockOnly) {
      result = result.filter((p) => p.variants?.some((v) => v.stock > 0));
    }

    // 4.8 stars and above
    if (filters.fourStarsOnly) {
      result = result.filter((p) => p.rating >= 4.8);
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => {
        const priceA = a.salePrice !== null ? a.salePrice : a.price;
        const priceB = b.salePrice !== null ? b.salePrice : b.price;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => {
        const priceA = a.salePrice !== null ? a.salePrice : a.price;
        const priceB = b.salePrice !== null ? b.salePrice : b.price;
        return priceB - priceA;
      });
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'bestseller') {
      result.sort((a, b) => {
        const aBest = a.tags.includes('bestseller') ? 1 : 0;
        const bBest = b.tags.includes('bestseller') ? 1 : 0;
        return bBest - aBest;
      });
    }

    return result;
  }, [filters, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Active filter chips list for easy dismissal
  const activeChips = useMemo(() => {
    const chips = [];
    if (filters.category) {
      const catObj = CATEGORIES.find((c) => c.slug === filters.category);
      chips.push({
        id: 'category',
        label: `Category: ${catObj?.name || filters.category}`,
        onRemove: () => handleFilterChange('category', ''),
      });
    }
    if (filters.gender) {
      chips.push({
        id: 'gender',
        label: `Gender: ${filters.gender}`,
        onRemove: () => handleFilterChange('gender', ''),
      });
    }
    if (filters.maxPrice < 350) {
      chips.push({
        id: 'price',
        label: `Max Price: $${filters.maxPrice}`,
        onRemove: () => handleFilterChange('maxPrice', 350),
      });
    }
    filters.sizes.forEach((s) => {
      chips.push({
        id: `size-${s}`,
        label: `Size: ${s}`,
        onRemove: () =>
          handleFilterChange(
            'sizes',
            filters.sizes.filter((sz) => sz !== s)
          ),
      });
    });
    filters.colors.forEach((c) => {
      chips.push({
        id: `color-${c}`,
        label: `Color: ${c}`,
        onRemove: () =>
          handleFilterChange(
            'colors',
            filters.colors.filter((cl) => cl !== c)
          ),
      });
    });
    if (filters.onSaleOnly) {
      chips.push({
        id: 'sale',
        label: 'Sale Items',
        onRemove: () => handleFilterChange('onSaleOnly', false),
      });
    }
    if (filters.search) {
      chips.push({
        id: 'search',
        label: `Search: "${filters.search}"`,
        onRemove: () => handleFilterChange('search', ''),
      });
    }
    return chips;
  }, [filters]);

  // Page title generator
  const currentTitle = useMemo(() => {
    if (filters.search) return `Search: "${filters.search}"`;
    if (filters.onSaleOnly) return 'Archive Sale';
    if (filters.category) {
      const cat = CATEGORIES.find((c) => c.slug === filters.category);
      return cat ? cat.name : 'Catalog';
    }
    if (filters.gender) return `${filters.gender.toUpperCase()} Collection`;
    return 'Shop The Complete Catalog';
  }, [filters]);

  return (
    <div className="shop-page py-4 pb-5">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Shop', path: '/shop' },
            ...(filters.category
              ? [{ label: CATEGORIES.find((c) => c.slug === filters.category)?.name || filters.category }]
              : []),
          ]}
        />

        {/* Header Title & Subtext */}
        <div className="mb-4">
          <h1 className="font-serif mb-2">{currentTitle}</h1>
          <p className="text-muted small mb-0">
            Showing <strong>{displayedProducts.length}</strong> of <strong>{filteredProducts.length}</strong> styles
          </p>
        </div>

        {/* Toolbar: Mobile Filter Trigger & Sort Dropdown */}
        <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded-3 mb-4">
          {/* Mobile Filter Button */}
          <button
            type="button"
            className="btn btn-outline-dark btn-sm d-lg-none d-flex align-items-center gap-2"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <SlidersHorizontal size={16} />
            <span>Filters ({activeChips.length})</span>
          </button>

          <div className="d-none d-lg-block">
            <span className="small text-muted">
              {filteredProducts.length} products found
            </span>
          </div>

          {/* Sort Dropdown */}
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        {/* Active Filter Chips */}
        {activeChips.length > 0 && (
          <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
            <span className="small text-muted">Active Filters:</span>
            {activeChips.map((chip) => (
              <span
                key={chip.id}
                className="badge bg-white text-dark border px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2 small shadow-sm"
              >
                <span>{chip.label}</span>
                <button
                  type="button"
                  onClick={chip.onRemove}
                  className="btn btn-link p-0 text-muted hover-text-dark"
                  aria-label={`Remove filter ${chip.label}`}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-link btn-sm text-accent text-decoration-none p-0 small fw-semibold"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Main Layout: Sidebar + Product Grid */}
        <div className="row g-4 g-lg-5">
          {/* Desktop Filter Sidebar */}
          <div className="col-lg-3 d-none d-lg-block">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Product Grid Area */}
          <div className="col-12 col-lg-9">
            <ProductGrid
              products={displayedProducts}
              onResetFilters={handleResetFilters}
              columns={3}
            />

            {/* Load More Pagination */}
            {visibleCount < filteredProducts.length && (
              <div className="text-center mt-5 pt-3">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="btn-atelier-secondary"
                >
                  <span>Load More Products</span>
                  <ArrowDown size={16} />
                </button>
                <p className="text-muted small mt-2">
                  Showing {displayedProducts.length} of {filteredProducts.length} items
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterPanel
        isMobile={true}
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        totalResults={filteredProducts.length}
      />
    </div>
  );
}
