import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import QuantityStepper from '../product/QuantityStepper';
import { Trash2 } from 'lucide-react';

export default function CartItem({ item, isMini = false }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="d-flex gap-3 py-3 border-bottom align-items-center">
      {/* Product Thumbnail */}
      <Link
        to={`/product/${item.slug}`}
        className="flex-shrink-0 rounded-2 overflow-hidden bg-light"
        style={{ width: isMini ? '72px' : '96px', aspectRatio: '3 / 4' }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-100 h-100 object-fit-cover"
        />
      </Link>

      {/* Item Info */}
      <div className="flex-grow-1 min-w-0">
        <Link
          to={`/product/${item.slug}`}
          className="text-decoration-none text-dark d-block fw-semibold text-truncate mb-1"
          style={{ fontSize: isMini ? '14px' : '15px' }}
        >
          {item.name}
        </Link>

        <div className="text-muted small mb-2" style={{ fontSize: '12px' }}>
          <span>Size: <strong>{item.size}</strong></span>
          <span className="mx-1">·</span>
          <span>Color: <strong>{item.color}</strong></span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <QuantityStepper
            value={item.quantity}
            min={1}
            max={item.maxStock || 20}
            onChange={(newQty) => updateQuantity(item.id, newQty)}
          />

          <div className="text-end">
            <span className="fw-bold text-dark d-block" style={{ fontSize: isMini ? '14px' : '16px' }}>
              ${item.effectivePrice * item.quantity}
            </span>
            {item.quantity > 1 && (
              <span className="small text-muted" style={{ fontSize: '11px' }}>
                (${item.effectivePrice} each)
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => removeFromCart(item.id)}
        className="btn btn-sm btn-link text-muted p-1 hover-text-danger align-self-start"
        aria-label={`Remove ${item.name} from cart`}
        title="Remove item"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
