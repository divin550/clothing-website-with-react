import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, SAMPLE_REVIEWS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import ImageGallery from '../components/product/ImageGallery';
import ColorSwatches from '../components/product/ColorSwatches';
import SizeSelector from '../components/product/SizeSelector';
import QuantityStepper from '../components/product/QuantityStepper';
import SizeGuideModal from '../components/common/SizeGuideModal';
import RatingStars from '../components/common/RatingStars';
import ProductCard from '../components/product/ProductCard';
import Breadcrumbs from '../components/common/Breadcrumbs';
import {
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Ruler,
  Star,
  CheckCircle2,
} from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug);
  }, [slug]);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [reviews, setReviews] = useState(SAMPLE_REVIEWS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ author: '', rating: 5, title: '', comment: '' });

  // Reset state when product slug changes
  useEffect(() => {
    if (product) {
      const defaultVariant = product.variants?.[0];
      setSelectedSize(defaultVariant?.size || 'M');
      setSelectedColor(defaultVariant?.color || 'Default');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container-custom py-5 text-center my-5">
        <h2 className="font-serif mb-3">Product Not Found</h2>
        <p className="text-muted mb-4">
          The requested product could not be found or may have been retired.
        </p>
        <Link to="/shop" className="btn-atelier-primary">
          Back to Catalog
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  // Colors & Sizes from variants
  const availableColors = Array.from(
    new Set(product.variants?.map((v) => v.color).filter(Boolean))
  );
  const availableSizes = Array.from(
    new Set(product.variants?.map((v) => v.size).filter(Boolean))
  );

  // Variant stock map for currently selected color
  const variantStock = useMemo(() => {
    const stockMap = {};
    product.variants?.forEach((v) => {
      if (!selectedColor || v.color === selectedColor) {
        stockMap[v.size] = v.stock;
      }
    });
    return stockMap;
  }, [product, selectedColor]);

  // Related products from same category
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) {
      addToast('Please provide your name and review comments', 'error');
      return;
    }
    const created = {
      id: 'rev-' + Date.now(),
      author: newReview.author,
      rating: Number(newReview.rating),
      title: newReview.title || 'Verified Customer Review',
      comment: newReview.comment,
      date: 'Just now',
      verified: true,
    };
    setReviews([created, ...reviews]);
    setShowReviewForm(false);
    setNewReview({ author: '', rating: 5, title: '', comment: '' });
    addToast('Thank you! Your review has been published.', 'success');
  };

  return (
    <div className="product-detail-page py-4 pb-5">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Shop', path: '/shop' },
            { label: product.category, path: `/shop?category=${product.category}` },
            { label: product.name },
          ]}
        />

        {/* Product Overview: Gallery & Purchasing Column */}
        <div className="row g-4 g-lg-5 mb-5 pb-4">
          {/* Gallery Column */}
          <div className="col-12 col-lg-7">
            <ImageGallery images={product.images} alt={product.name} />
          </div>

          {/* Details & Actions Column */}
          <div className="col-12 col-lg-5">
            <div className="ps-lg-3">
              {/* Badges */}
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge-atelier badge-atelier-stone">
                  {product.category}
                </span>
                {product.salePrice && (
                  <span className="badge-atelier badge-atelier-sale">
                    Sale -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                  </span>
                )}
                {product.tags?.includes('bestseller') && (
                  <span className="badge-atelier badge-atelier-new">Bestseller</span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-serif mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)' }}>
                {product.name}
              </h1>

              {/* Price & Rating */}
              <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                <div className="d-flex align-items-baseline gap-2">
                  <span className="fs-3 fw-bold text-dark">
                    ${product.salePrice ? product.salePrice : product.price}
                  </span>
                  {product.salePrice && (
                    <span className="text-muted text-decoration-line-through fs-5">
                      ${product.price}
                    </span>
                  )}
                </div>
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              </div>

              {/* Color Selection */}
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

              {/* Size Selection */}
              {availableSizes.length > 0 && (
                <div className="mb-4">
                  <SizeSelector
                    sizes={availableSizes}
                    selectedSize={selectedSize}
                    onSelectSize={setSelectedSize}
                    variantStock={variantStock}
                    onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
                  />
                </div>
              )}

              {/* Quantity Stepper & Add to Cart */}
              <div className="mb-4">
                <span className="form-label-atelier mb-2">Quantity</span>
                <div className="d-flex align-items-center gap-3">
                  <QuantityStepper
                    value={quantity}
                    onChange={setQuantity}
                    min={1}
                    max={10}
                  />
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="btn-atelier-primary flex-grow-1"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Bag</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`btn btn-outline-secondary rounded-2 p-0 d-flex align-items-center justify-content-center ${
                      isFavorited ? 'text-accent border-accent' : ''
                    }`}
                    style={{ width: '48px', height: '48px' }}
                    aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
                    title={isFavorited ? 'In Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="p-3 bg-light rounded-3 mb-4 d-flex flex-column gap-2 small text-dark">
                <div className="d-flex align-items-center gap-2">
                  <Truck size={16} className="text-accent flex-shrink-0" />
                  <span>Complimentary shipping on orders over $150</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <RotateCcw size={16} className="text-accent flex-shrink-0" />
                  <span>30-day effortless returns & exchanges</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={16} className="text-accent flex-shrink-0" />
                  <span>Guaranteed authentic handcrafted quality</span>
                </div>
              </div>

              {/* Accordions: Description, Material & Care, Shipping & Returns */}
              <div className="accordion accordion-atelier" id="productInfoAccordion">
                {/* Accordion 1: Description */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingDesc">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDesc"
                      aria-expanded="true"
                      aria-controls="collapseDesc"
                    >
                      Description & Silhouette
                    </button>
                  </h2>
                  <div
                    id="collapseDesc"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingDesc"
                  >
                    <div className="accordion-body">
                      {product.description}
                    </div>
                  </div>
                </div>

                {/* Accordion 2: Material & Care */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingMaterial">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseMaterial"
                      aria-expanded="false"
                      aria-controls="collapseMaterial"
                    >
                      Material & Care Guide
                    </button>
                  </h2>
                  <div
                    id="collapseMaterial"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingMaterial"
                  >
                    <div className="accordion-body">
                      <p className="mb-2">
                        <strong>Fabric Composition:</strong> {product.material}
                      </p>
                      <p className="mb-0">
                        • Machine wash cold on delicate cycle with mild detergent.<br />
                        • Line dry flat in natural shade to preserve fiber density.<br />
                        • Warm iron with steam if desired, or dry clean.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion 3: Shipping & Returns */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingShipping">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseShipping"
                      aria-expanded="false"
                      aria-controls="collapseShipping"
                    >
                      Shipping & Returns
                    </button>
                  </h2>
                  <div
                    id="collapseShipping"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingShipping"
                  >
                    <div className="accordion-body">
                      Orders are dispatched in recyclable signature presentation boxes within 24–48 hours. Standard delivery takes 3–5 business days. Return shipping is complimentary within 30 days of delivery.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <section className="py-5 border-top mb-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
            <div>
              <span className="small text-uppercase fw-semibold tracking-wider text-muted">
                Client Experiences
              </span>
              <h3 className="font-serif mb-1">
                Customer Reviews ({reviews.length})
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="btn-atelier-secondary btn-atelier-sm mt-3 mt-md-0"
            >
              {showReviewForm ? 'Cancel Review' : 'Write a Review'}
            </button>
          </div>

          {/* Interactive Review Form */}
          {showReviewForm && (
            <div className="bg-light p-4 rounded-3 mb-5 border">
              <h5 className="font-serif mb-3">Share Your Experience</h5>
              <form onSubmit={handleReviewSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label-atelier">Your Name</label>
                    <input
                      type="text"
                      value={newReview.author}
                      onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                      placeholder="e.g. Julian M."
                      className="form-control-atelier"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label-atelier">Rating</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="form-select-atelier"
                    >
                      <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                      <option value="4">★★★★☆ (4 Stars - Very Good)</option>
                      <option value="3">★★★☆☆ (3 Stars - Average)</option>
                      <option value="2">★★☆☆☆ (2 Stars - Below Expectations)</option>
                      <option value="1">★☆☆☆☆ (1 Star - Poor)</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label-atelier">Review Headline</label>
                    <input
                      type="text"
                      value={newReview.title}
                      onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                      placeholder="Summarize your impression"
                      className="form-control-atelier"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label-atelier">Detailed Feedback</label>
                    <textarea
                      rows="3"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="How was the fit, material quality, and craftsmanship?"
                      className="form-control-atelier"
                      style={{ height: 'auto', padding: '12px 16px' }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-atelier-primary">
                      Submit Verified Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Reviews List */}
          <div className="row g-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="col-12 col-md-4">
                <div className="p-4 bg-light rounded-3 h-100 border">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <RatingStars rating={rev.rating} size={14} />
                    <span className="small text-muted">{rev.date}</span>
                  </div>
                  <h6 className="fw-semibold text-dark mb-1">{rev.title}</h6>
                  <p className="text-muted small mb-3">{rev.comment}</p>
                  <div className="d-flex align-items-center gap-1 small text-dark fw-medium">
                    <CheckCircle2 size={14} className="text-success" />
                    <span>{rev.author}</span>
                    <span className="text-muted small ms-1">(Verified Buyer)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <section className="py-4 border-top">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <span className="small text-uppercase fw-semibold tracking-wider text-muted">
                  Complementary Styles
                </span>
                <h3 className="font-serif mb-0">You May Also Like</h3>
              </div>
              <Link to={`/shop?category=${product.category}`} className="small fw-semibold text-dark text-decoration-none">
                View All {product.category}
              </Link>
            </div>

            <div className="row g-3 g-md-4">
              {relatedProducts.map((p) => (
                <div key={p.id} className="col-6 col-md-3">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sizing Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
