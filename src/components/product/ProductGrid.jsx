import ProductCard from './ProductCard';
import SkeletonLoader from '../common/SkeletonLoader';
import { PackageOpen } from 'lucide-react';

export default function ProductGrid({
  products = [],
  isLoading = false,
  onResetFilters = null,
  columns = 4, // 3 or 4 desktop columns
}) {
  if (isLoading) {
    return <SkeletonLoader count={8} />;
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-5 my-4 bg-light rounded-3 p-5">
        <div className="d-inline-flex p-3 rounded-circle bg-white shadow-sm mb-3 text-muted">
          <PackageOpen size={36} />
        </div>
        <h4 className="font-serif mb-2">No matching products found</h4>
        <p className="text-muted small mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
          We couldn't find any items matching your selected criteria. Try adjusting or clearing your filters.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="btn-atelier-secondary btn-atelier-sm"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  const colClass = columns === 3 ? 'col-6 col-md-4 col-lg-4' : 'col-6 col-md-4 col-lg-3';

  return (
    <div className="row g-3 g-md-4">
      {products.map((product) => (
        <div key={product.id} className={colClass}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
