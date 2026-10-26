export const COUPONS = [
  {
    code: 'SAVE10',
    type: 'percent',
    value: 10,
    description: '10% off entire order',
    minSubtotal: 0,
  },
  {
    code: 'ATELIER20',
    type: 'percent',
    value: 20,
    description: '20% off orders over $150',
    minSubtotal: 150,
  },
  {
    code: 'FREESHIP',
    type: 'fixed_shipping',
    value: 15,
    description: 'Free standard shipping',
    minSubtotal: 50,
  },
];
