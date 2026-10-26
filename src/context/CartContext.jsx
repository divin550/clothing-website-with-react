import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useToast } from './ToastContext';
import { COUPONS } from '../data/coupons';

const CartContext = createContext();

const CART_STORAGE_KEY = 'atelier_cart_items';
const COUPON_STORAGE_KEY = 'atelier_applied_coupon';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [coupon, setCoupon] = useState(() => {
    try {
      const saved = localStorage.getItem(COUPON_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      if (coupon) {
        localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
      } else {
        localStorage.removeItem(COUPON_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save coupon to localStorage', e);
    }
  }, [coupon]);

  const openCartDrawer = () => setIsCartDrawerOpen(true);
  const closeCartDrawer = () => setIsCartDrawerOpen(false);

  const addToCart = (product, size, color, quantity = 1) => {
    const effectivePrice = product.salePrice !== null ? product.salePrice : product.price;
    const selectedVariant = product.variants?.find(
      (v) => (size ? v.size === size : true) && (color ? v.color === color : true)
    ) || product.variants?.[0] || { size: 'Standard', color: 'Default', stock: 10, sku: `${product.id}-default` };

    const actualSize = size || selectedVariant.size || 'M';
    const actualColor = color || selectedVariant.color || 'Default';
    const maxStock = selectedVariant.stock || 20;
    const cartItemId = `${product.id}-${actualSize}-${actualColor}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const existing = prevItems[existingIndex];
        const newQty = Math.min(existing.quantity + quantity, maxStock);
        const updated = [...prevItems];
        updated[existingIndex] = { ...existing, quantity: newQty };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            salePrice: product.salePrice,
            effectivePrice,
            size: actualSize,
            color: actualColor,
            image: product.images[0],
            quantity: Math.min(quantity, maxStock),
            maxStock,
            sku: selectedVariant.sku,
          },
        ];
      }
    });

    addToast(`Added "${product.name}" (${actualSize}) to your cart`, 'success');
    openCartDrawer();
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((i) => i.id === cartItemId);
      if (item) {
        addToast(`Removed "${item.name}" from cart`, 'info');
      }
      return prevItems.filter((i) => i.id !== cartItemId);
    });
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === cartItemId) {
          const clampedQty = Math.min(quantity, item.maxStock);
          return { ...item, quantity: clampedQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCoupon(null);
  };

  // Calculations
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.effectivePrice * item.quantity, 0);
  }, [cartItems]);

  const freeShippingThreshold = 150;

  const shipping = useMemo(() => {
    if (cartItems.length === 0) return 0;
    if (subtotal >= freeShippingThreshold) return 0;
    if (coupon?.type === 'fixed_shipping') return 0;
    return 15;
  }, [cartItems.length, subtotal, coupon]);

  const discount = useMemo(() => {
    if (!coupon || cartItems.length === 0) return 0;
    if (coupon.type === 'percent') {
      return (subtotal * coupon.value) / 100;
    }
    return 0;
  }, [coupon, cartItems.length, subtotal]);

  const total = useMemo(() => {
    if (cartItems.length === 0) return 0;
    return Math.max(0, subtotal - discount + shipping);
  }, [cartItems.length, subtotal, discount, shipping]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const applyCoupon = (codeStr) => {
    const trimmed = codeStr.trim().toUpperCase();
    const found = COUPONS.find((c) => c.code === trimmed);

    if (!found) {
      addToast('Invalid promo code. Try SAVE10 or ATELIER20', 'error');
      return { success: false, message: 'Invalid promo code' };
    }

    if (found.minSubtotal && subtotal < found.minSubtotal) {
      addToast(`Code ${found.code} requires a minimum order of $${found.minSubtotal}`, 'error');
      return { success: false, message: `Minimum order of $${found.minSubtotal} required` };
    }

    setCoupon(found);
    addToast(`Promo code "${found.code}" applied: ${found.description}`, 'success');
    return { success: true, message: `Code ${found.code} applied successfully!` };
  };

  const removeCoupon = () => {
    setCoupon(null);
    addToast('Promo code removed', 'info');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        shipping,
        discount,
        total,
        freeShippingThreshold,
        coupon,
        isCartDrawerOpen,
        openCartDrawer,
        closeCartDrawer,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
