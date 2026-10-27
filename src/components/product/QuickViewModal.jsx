import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import RatingStars from '../common/RatingStars';
import ColorSwatches from './ColorSwatches';
import SizeSelector from './SizeSelector';
import QuantityStepper from './QuantityStepper';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(
    product.variants?.[0]?.size || 'M'
  );
  const [selectedColor, setSelectedColor] = useState(
    product.variants?.[0]?.color || 'Default'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const availableColors = Array.from(
    new Set(product.variants?.map((v) => v.color).filter(Boolean))
  );
  const availableSizes = Array.from(
    new Set(product.variants?.map((v) => v.size).filter(Boolean))
  );

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickViewTitle"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1070,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '14px', overflow: 'hidden' }}>
          <div className="position-absolute top-0 end-0 p-3" style={{ zIndex: 10 }}>
            <button
              type="button"
              className="btn btn-sm btn-light rounded-circle p-2 shadow-sm"
              onClick={onClose}
              aria-label="Close Quick View"
            >
              <X size={20} />
            </button>
          </div>

          <div className="modal-body p-0">
            <div className="row g-0">
              {/* Product Gallery column */}
              <div className="col-12 col-md-6 bg-light d-flex flex-column align-items-center justify-content-center p-4">
                <div
                  className="w-100 rounded-3 overflow-hidden shadow-sm"
                  style={{ aspectRatio: '3 / 4', maxWidth: '420px' }}
                >
                  <img
                    src={product.images[activeImageIndex] || product.images[0]}
                    alt={product.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="d-flex gap-2 mt-3 overflow-auto">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                        style={{ width: '60px', height: '80px' }}
                      >
                        <img src={img} alt="thumb" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info column */}
              <div className="col-12 col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-atelier badge-atelier-stone text-uppercase">
                      {product.category}
                    </span>
                    {product.tags?.includes('bestseller') && (
                      <span className="badge-atelier badge-atelier-new">Bestseller</span>
                    )}
                    {product.salePrice && (
                      <span className="badge-atelier badge-atelier-sale">On Sale</span>
                    )}
                  </div>

                  <h3 id="quickViewTitle" className="font-serif mb-2">
                    {product.name}
                  </h3>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-4 fw-bold text-dark">
                        ${product.salePrice ? product.salePrice : product.price}
                      </span>
                      {product.salePrice && (
                        <span className="text-muted text-decoration-line-through fs-6">
                          ${product.price}
                        </span>
                      )}
                    </div>
                    <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
                  </div>

                  <p className="text-muted small mb-4">{product.description}</p>

                  {/* Colors */}
                  {availableColors.length > 0 && (
                    <div className="mb-4">
                      <span className="form-label-atelier mb-2">
                        Color: <strong>{selectedColor}</strong>
                      </span>
                      <ColorSwatches
                        colors={availableColors}
                        selectedColor={selectedColor}
                        onSelectColor={setSelectedColor}
                      />
                    </div>
                  )}

                  {/* Sizes */}
                  {availableSizes.length > 0 && (
                    <div className="mb-4">
                      <SizeSelector
                        sizes={availableSizes}
                        selectedSize={selectedSize}
                        onSelectSize={setSelectedSize}
                      />
                    </div>
                  )}

                  {/* Quantity & CTA */}
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <QuantityStepper value={quantity} onChange={setQuantity} min={1} max={10} />
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="btn-atelier-primary flex-grow-1"
                    >
                      <ShoppingBag size={18} />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product)}
                      className={`btn btn-outline-secondary rounded-2 p-0 d-flex align-items-center justify-content-center ${
                        isFavorited ? 'text-accent border-accent' : ''
                      }`}
                      style={{ width: '48px', height: '48px' }}
                      aria-label="Add to wishlist"
                    >
                      <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                  <span className="small text-muted">
                    Material: <strong>{product.material}</strong>
                  </span>
                  <Link
                    to={`/product/${product.slug}`}
                    onClick={onClose}
                    className="small fw-semibold text-dark d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <span>View Full Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
