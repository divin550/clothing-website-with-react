import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const AuthContext = createContext();

const AUTH_USER_KEY = 'atelier_auth_user';
const ORDERS_STORAGE_KEY = 'atelier_user_orders';

const INITIAL_DEMO_ORDERS = [
  {
    id: 'ATL-78419',
    createdAt: '2026-02-14T10:30:00Z',
    status: 'Delivered',
    trackingNumber: 'TRK-98234710',
    subtotal: 220,
    shipping: 0,
    discount: 22,
    total: 198,
    paymentMethod: 'Credit Card',
    customer: {
      name: 'Alexander Vance',
      email: 'alexander@atelier.com',
      phone: '+1 (555) 019-2834',
      address: '742 Evergreen Terrace, Apt 4B',
      city: 'New York',
      postalCode: '10001',
      country: 'United States',
    },
    items: [
      {
        id: 'sh-001-M-Optic White',
        name: 'Relaxed Oxford Button-Down Shirt',
        size: 'M',
        color: 'Optic White',
        price: 88,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ts-001-L-Washed Black',
        name: 'Heavyweight Boxy Crewneck Tee',
        size: 'L',
        color: 'Washed Black',
        price: 55,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_USER_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            id: 'usr-001',
            name: 'Alexander Vance',
            email: 'alexander@atelier.com',
            phone: '+1 (555) 019-2834',
            address: '742 Evergreen Terrace, Apt 4B',
            city: 'New York',
            postalCode: '10001',
            country: 'United States',
          };
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_DEMO_ORDERS;
    } catch {
      return INITIAL_DEMO_ORDERS;
    }
  });

  const { addToast } = useToast();

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_USER_KEY);
      }
    } catch (e) {
      console.error('Failed to save user to localStorage', e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  const login = (email, password) => {
    if (!email || !password) {
      addToast('Please enter both email and password', 'error');
      return false;
    }
    const mockUser = {
      id: 'usr-' + Math.floor(Math.random() * 9000 + 1000),
      name: email.split('@')[0].replace('.', ' '),
      email,
      phone: '+1 (555) 234-5678',
      address: '124 Mercer St, Suite 5',
      city: 'New York',
      postalCode: '10012',
      country: 'United States',
    };
    setUser(mockUser);
    addToast(`Welcome back, ${mockUser.name}!`, 'success');
    return true;
  };

  const register = (name, email, password) => {
    if (!name || !email || !password) {
      addToast('All fields are required', 'error');
      return false;
    }
    const newUser = {
      id: 'usr-' + Math.floor(Math.random() * 9000 + 1000),
      name,
      email,
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      country: 'United States',
    };
    setUser(newUser);
    addToast(`Account created! Welcome to ATELIER, ${name}`, 'success');
    return true;
  };

  const logout = () => {
    setUser(null);
    addToast('You have been logged out', 'info');
  };

  const updateProfile = (data) => {
    setUser((prev) => ({
      ...prev,
      ...data,
    }));
    addToast('Profile details updated successfully', 'success');
  };

  const addOrder = (orderData) => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newOrder = {
      ...orderData,
      id: `ATL-${randomDigits}`,
      trackingNumber: `TRK-${Math.floor(10000000 + Math.random() * 90000000)}`,
      createdAt: new Date().toISOString(),
      status: 'Processing',
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        orders,
        login,
        register,
        logout,
        updateProfile,
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
