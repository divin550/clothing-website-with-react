export default function SizeSelector({
  sizes = [],
  selectedSize,
  onSelectSize,
  variantStock = {},
  onOpenSizeGuide,
}) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="form-label-atelier mb-0">
          Size: <strong>{selectedSize || 'Select a size'}</strong>
        </span>
        {onOpenSizeGuide && (
          <button
            type="button"
            onClick={onOpenSizeGuide}
            className="btn btn-link btn-sm text-decoration-underline p-0 small text-muted"
            style={{ fontSize: '12px' }}
          >
            Size & Fit Guide
          </button>
        )}
      </div>

      <div className="d-flex flex-wrap gap-2" role="radiogroup" aria-label="Product size choices">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          const stock = variantStock[size] !== undefined ? variantStock[size] : 10;
          const isOutOfStock = stock <= 0;

          return (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isOutOfStock}
              onClick={() => onSelectSize(size)}
              className={`size-btn ${isSelected ? 'active' : ''}`}
              title={isOutOfStock ? `${size} - Sold Out` : stock < 5 ? `${size} - Only ${stock} left` : size}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
