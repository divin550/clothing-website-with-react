import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import QuickViewModal from './QuickViewModal';
import RatingStars from '../common/RatingStars';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

const COLOR_MAP = {
  'Optic White': '#FFFFFF',
  'Pure White': '#FFFFFF',
  'Bone White': '#F6F4EE',
  'Chalk White': '#F9F8F5',
  'Alabaster': '#F2EFEB',
  'Cream Ivory': '#FDFCF7',
  'Bone Ivory': '#F7F4EB',
  'Ecru Off-White': '#ECE6DC',
  'Oatmeal': '#D8CDBF',
  'Sand Beige': '#D5C4A1',
  'Sand Taupe': '#C2B6A2',
  'Warm Khaki': '#C8B28B',
  'Warm Taupe': '#A89988',
  'Clay Brown': '#8C6747',
  'Caramel Brown': '#9E5B32',
  'Cognac Saddle': '#874118',
  'Deep Espresso': '#2F1E19',
  'Stone Grey': '#98978B',
  'Stone Grey / Clay': '#8D8274',
  'Heather Slate': '#707880',
  'Heather Charcoal': '#43464B',
  'Charcoal Melange': '#363738',
  'Charcoal Plaid': '#2B2B2B',
  'Washed Black': '#222222',
  'Midnight Black': '#111111',
  'Noir Black': '#0A0A0A',
  'Onyx Black': '#141414',
  'Jet Black': '#050505',
  'Matte Black': '#1C1C1C',
  'Black Ink': '#0D0D0D',
  'Polished Black': '#121212',
  'Sky Blue': '#A0C4E2',
  'Deep Navy': '#192841',
  'Raw Indigo': '#1B263B',
  'Vintage Mid-Blue': '#4A6984',
  'Sage Green': '#879782',
  'Washed Olive': '#556B2F',
  'Olive Earth': '#5B6244',
  'Olive Drab': '#4E533B',
  'Terracotta': '#C8553D',
  'Terracotta Rust': '#B8452E',
  'Faded Terracotta': '#D9735D',
  'Deep Burgundy': '#581825',
};

export default function ProductCard({ product }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!product) return null;

  const isFavorited = isInWishlist(product.id);
  const primaryImg = product.images?.[0] || 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80';
  const secondaryImg = product.images?.[1] || primaryImg;

  // Extract unique colors for color dots
  const uniqueColors = Array.from(
    new Set(product.variants?.map((v) => v.color).filter(Boolean))
  ).slice(0, 4);

  // Quick direct add using default variant
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants?.[0];
    addToCart(product, defaultVariant?.size, defaultVariant?.color, 1);
  };

  const handleOpenQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <>
      <div className="product-card group" data-product-id={product.id}>
        {/* Image Container with 3:4 aspect ratio */}
        <div className="product-image-container">
          <Link to={`/product/${product.slug}`} tabIndex="-1">
            <img
              src={primaryImg}
              alt={product.name}
              className="product-img product-img-primary"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x800/f5f2ee/999?text=No+Image'; }}
            />
            {secondaryImg && (
              <img
                src={secondaryImg}
                alt={`${product.name} alternate angle`}
                className="product-img product-img-secondary"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x800/f5f2ee/999?text=No+Image'; }}
              />
            )}
          </Link>

          {/* Badges top-left */}
          <div className="product-badge-group">
            {product.salePrice && (
              <span className="badge-atelier badge-atelier-sale">
                Sale -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="badge-atelier badge-atelier-new">New</span>
            )}
            {product.tags?.includes('bestseller') && !product.salePrice && (
              <span className="badge-atelier badge-atelier-stone">Bestseller</span>
            )}
          </div>

          {/* Wishlist Button top-right */}
          <button
            type="button"
            className={`product-wishlist-btn ${isFavorited ? 'active' : ''}`}
            onClick={handleToggleWishlist}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
            title={isFavorited ? 'In Wishlist' : 'Add to Wishlist'}
          >
            <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>

          {/* Quick-add & Quick-view hover bar */}
          <div className="product-quick-add d-none d-md-flex gap-2">
            <button
              type="button"
              onClick={handleQuickAdd}
              className="btn-atelier-primary btn-atelier-sm flex-grow-1 shadow"
              aria-label={`Quick add ${product.name} to cart`}
            >
              <ShoppingBag size={14} />
              <span>Quick Add</span>
            </button>
            <button
              type="button"
              onClick={handleOpenQuickView}
              className="btn btn-light btn-sm rounded-2 px-2 shadow d-flex align-items-center justify-content-center"
              aria-label={`Quick view ${product.name}`}
              title="Quick View"
            >
              <Eye size={16} />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <span className="small text-muted text-uppercase tracking-wider" style={{ fontSize: '11px' }}>
              {product.category}
            </span>
            <RatingStars rating={product.rating} size={12} />
          </div>

          <Link to={`/product/${product.slug}`} className="text-decoration-none">
            <h4 className="product-title" title={product.name}>
              {product.name}
            </h4>
          </Link>

          <div className="product-price-row">
            <span className={`price-current ${product.salePrice ? 'price-sale' : ''}`}>
              ${product.salePrice ? product.salePrice : product.price}
            </span>
            {product.salePrice && (
              <span className="price-original">
                ${product.price}
              </span>
            )}
          </div>

          {/* Color swatches preview dots */}
          {uniqueColors.length > 0 && (
            <div className="color-dots-row" title={`Available in ${uniqueColors.join(', ')}`}>
              {uniqueColors.map((colorName) => (
                <span
                  key={colorName}
                  className="color-dot-mini"
                  style={{ backgroundColor: COLOR_MAP[colorName] || '#999999' }}
                />
              ))}
              {product.variants?.length > uniqueColors.length && (
                <span className="text-muted" style={{ fontSize: '10px' }}>
                  +{product.variants.length - uniqueColors.length}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
}
