/**
 * ATELIER Product Catalog Data
 * Follows the Product Data Model from design.md Section 11 strictly.
 * 36 products across 6 categories (6 items each).
 */

export const PRODUCTS = [
  // --------------------------------------------------------------------------
  // SHIRTS (6 Products)
  // --------------------------------------------------------------------------
  {
    id: 'sh-001',
    name: 'Relaxed Oxford Button-Down Shirt',
    slug: 'relaxed-oxford-button-down-shirt',
    category: 'shirts',
    gender: 'men',
    price: 110,
    salePrice: 88,
    description: 'Crafted from premium long-staple combed cotton, this Oxford shirt features an easy, relaxed drape with a classic soft-roll collar and mother-of-pearl buttons. Suitable for effortless day-to-evening tailoring.',
    material: '100% Long-Staple Combed Cotton (180 GSM)',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620012253295-c15c429fcc71?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'S', color: 'Optic White', sku: 'SH-001-WHT-S', stock: 12 },
      { size: 'M', color: 'Optic White', sku: 'SH-001-WHT-M', stock: 24 },
      { size: 'L', color: 'Optic White', sku: 'SH-001-WHT-L', stock: 18 },
      { size: 'XL', color: 'Optic White', sku: 'SH-001-WHT-XL', stock: 6 },
      { size: 'S', color: 'Sky Blue', sku: 'SH-001-BLU-S', stock: 8 },
      { size: 'M', color: 'Sky Blue', sku: 'SH-001-BLU-M', stock: 15 },
      { size: 'L', color: 'Sky Blue', sku: 'SH-001-BLU-L', stock: 10 }
    ],
    rating: 4.8,
    reviewCount: 42,
    tags: ['bestseller', 'sale'],
    createdAt: '2026-01-15'
  },
  {
    id: 'sh-002',
    name: 'Camp Collar Normandy Linen Shirt',
    slug: 'camp-collar-normandy-linen-shirt',
    category: 'shirts',
    gender: 'unisex',
    price: 135,
    salePrice: null,
    description: 'Breezy and tactile, cut from authentic Normandy flax linen. Features an open camp collar, straight vented hem, and boxy silhouette perfect for warm coastal evenings.',
    material: '100% French Normandy Linen',
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620012253295-c15c429fcc71?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'XS', color: 'Sand Beige', sku: 'SH-002-SND-XS', stock: 5 },
      { size: 'S', color: 'Sand Beige', sku: 'SH-002-SND-S', stock: 14 },
      { size: 'M', color: 'Sand Beige', sku: 'SH-002-SND-M', stock: 20 },
      { size: 'L', color: 'Sand Beige', sku: 'SH-002-SND-L', stock: 12 },
      { size: 'M', color: 'Terracotta', sku: 'SH-002-TER-M', stock: 9 },
      { size: 'L', color: 'Terracotta', sku: 'SH-002-TER-L', stock: 7 }
    ],
    rating: 4.9,
    reviewCount: 38,
    tags: ['new'],
    createdAt: '2026-02-10'
  },
  {
    id: 'sh-003',
    name: 'Raw Silk Twill Evening Shirt',
    slug: 'raw-silk-twill-evening-shirt',
    category: 'shirts',
    gender: 'men',
    price: 185,
    salePrice: null,
    description: 'Subtle sheen with an artisanal textured weave. Concealed placket, French cuffs, and an architectural band collar lend this piece modern understated luxury.',
    material: '100% Mulberry Silk Twill',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620012253295-c15c429fcc71?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'S', color: 'Midnight Black', sku: 'SH-003-BLK-S', stock: 6 },
      { size: 'M', color: 'Midnight Black', sku: 'SH-003-BLK-M', stock: 12 },
      { size: 'L', color: 'Midnight Black', sku: 'SH-003-BLK-L', stock: 15 },
      { size: 'XL', color: 'Midnight Black', sku: 'SH-003-BLK-XL', stock: 4 }
    ],
    rating: 4.7,
    reviewCount: 19,
    tags: ['bestseller'],
    createdAt: '2026-01-22'
  },
  {
    id: 'sh-004',
    name: 'Band Collar Crisp Poplin Shirt',
    slug: 'band-collar-crisp-poplin-shirt',
    category: 'shirts',
    gender: 'women',
    price: 125,
    salePrice: 99,
    description: 'An elongated tunic silhouette crafted in crisp high-density Italian cotton poplin. Features dropped shoulders, clean curved hemlines, and tonal horn buttons.',
    material: '100% Italian Cotton Poplin',
    images: [
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'XS', color: 'Pure White', sku: 'SH-004-WHT-XS', stock: 10 },
      { size: 'S', color: 'Pure White', sku: 'SH-004-WHT-S', stock: 18 },
      { size: 'M', color: 'Pure White', sku: 'SH-004-WHT-M', stock: 15 },
      { size: 'L', color: 'Pure White', sku: 'SH-004-WHT-L', stock: 8 },
      { size: 'S', color: 'Sage Green', sku: 'SH-004-SGE-S', stock: 7 },
      { size: 'M', color: 'Sage Green', sku: 'SH-004-SGE-M', stock: 11 }
    ],
    rating: 4.6,
    reviewCount: 26,
    tags: ['sale'],
    createdAt: '2026-02-01'
  },
  {
    id: 'sh-005',
    name: 'Brushed Heavyweight Flannel Overshirt',
    slug: 'brushed-heavyweight-flannel-overshirt',
    category: 'shirts',
    gender: 'men',
    price: 150,
    salePrice: null,
    description: 'Double-brushed organic cotton with twin flap chest pockets. Serves as both an insulating overshirt and outerwear staple during transitional weather.',
    material: '100% Organic Brushed Cotton Flannel (260 GSM)',
    images: [
      'https://images.unsplash.com/photo-1620012253295-c15c429fcc71?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'M', color: 'Charcoal Plaid', sku: 'SH-005-CHC-M', stock: 14 },
      { size: 'L', color: 'Charcoal Plaid', sku: 'SH-005-CHC-L', stock: 16 },
      { size: 'XL', color: 'Charcoal Plaid', sku: 'SH-005-CHC-XL', stock: 9 }
    ],
    rating: 4.8,
    reviewCount: 33,
    tags: ['new'],
    createdAt: '2026-02-18'
  },
  {
    id: 'sh-006',
    name: 'Minimalist Draped Silk Blouse',
    slug: 'minimalist-draped-silk-blouse',
    category: 'shirts',
    gender: 'women',
    price: 165,
    salePrice: null,
    description: 'Clean split neckline with extended cuffs. Designed with fluid matte silk crepe de chine for a serene drape that moves with absolute ease.',
    material: '100% Silk Crepe de Chine',
    images: [
      'https://images.unsplash.com/photo-1564257631407-4deb129f044b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'XS', color: 'Alabaster', sku: 'SH-006-ALA-XS', stock: 6 },
      { size: 'S', color: 'Alabaster', sku: 'SH-006-ALA-S', stock: 11 },
      { size: 'M', color: 'Alabaster', sku: 'SH-006-ALA-M', stock: 14 },
      { size: 'L', color: 'Alabaster', sku: 'SH-006-ALA-L', stock: 7 }
    ],
    rating: 4.9,
    reviewCount: 29,
    tags: ['bestseller'],
    createdAt: '2026-01-29'
  },

  // --------------------------------------------------------------------------
  // T-SHIRTS (6 Products)
  // --------------------------------------------------------------------------
  {
    id: 'ts-001',
    name: 'Heavyweight Boxy Crewneck Tee',
    slug: 'heavyweight-boxy-crewneck-tee',
    category: 't-shirts',
    gender: 'unisex',
    price: 55,
    salePrice: null,
    description: 'Substantial 280 GSM dry-touch organic cotton. Structured collar that never sags, dropped shoulders, and a clean wide hem with split side vents.',
    material: '100% Organic Heavyweight Cotton (280 GSM)',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'XS', color: 'Washed Black', sku: 'TS-001-BLK-XS', stock: 15 },
      { size: 'S', color: 'Washed Black', sku: 'TS-001-BLK-S', stock: 30 },
      { size: 'M', color: 'Washed Black', sku: 'TS-001-BLK-M', stock: 45 },
      { size: 'L', color: 'Washed Black', sku: 'TS-001-BLK-L', stock: 35 },
      { size: 'XL', color: 'Washed Black', sku: 'TS-001-BLK-XL', stock: 18 },
      { size: 'M', color: 'Bone White', sku: 'TS-001-BNE-M', stock: 25 },
      { size: 'L', color: 'Bone White', sku: 'TS-001-BNE-L', stock: 20 }
    ],
    rating: 4.9,
    reviewCount: 94,
    tags: ['bestseller'],
    createdAt: '2026-01-05'
  },
  {
    id: 'ts-002',
    name: 'Mercerized Supima Cotton Tee',
    slug: 'mercerized-supima-cotton-tee',
    category: 't-shirts',
    gender: 'men',
    price: 65,
    salePrice: 52,
    description: 'Double-mercerized American Supima cotton offering a silky finish, vibrant color retention, and refined drape beneath tailored jackets or worn solo.',
    material: '100% American Supima Cotton (190 GSM)',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'S', color: 'Deep Navy', sku: 'TS-002-NVY-S', stock: 12 },
      { size: 'M', color: 'Deep Navy', sku: 'TS-002-NVY-M', stock: 22 },
      { size: 'L', color: 'Deep Navy', sku: 'TS-002-NVY-L', stock: 17 },
      { size: 'XL', color: 'Deep Navy', sku: 'TS-002-NVY-XL', stock: 9 }
    ],
    rating: 4.7,
    reviewCount: 51,
    tags: ['sale'],
    createdAt: '2026-01-18'
  },
  {
    id: 'ts-003',
    name: 'Garment-Dyed Vintage Wash Tee',
    slug: 'garment-dyed-vintage-wash-tee',
    category: 't-shirts',
    gender: 'unisex',
    price: 48,
    salePrice: null,
    description: 'Pigment dyed in small artisanal batches for a subtly faded, lived-in patina. Pre-shrunk jersey knit with twin-needle hems.',
    material: '100% Ring-Spun Cotton (220 GSM)',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'XS', color: 'Faded Terracotta', sku: 'TS-003-TER-XS', stock: 8 },
      { size: 'S', color: 'Faded Terracotta', sku: 'TS-003-TER-S', stock: 14 },
      { size: 'M', color: 'Faded Terracotta', sku: 'TS-003-TER-M', stock: 19 },
      { size: 'L', color: 'Faded Terracotta', sku: 'TS-003-TER-L', stock: 15 }
    ],
    rating: 4.8,
    reviewCount: 46,
    tags: ['new'],
    createdAt: '2026-02-14'
  },
  {
    id: 'ts-004',
    name: 'Relaxed Ribbed Knit Baby Tee',
    slug: 'relaxed-ribbed-knit-baby-tee',
    category: 't-shirts',
    gender: 'women',
    price: 52,
    salePrice: null,
    description: 'A contemporary 90s-inspired silhouette cut slightly cropped with 2x2 fine micro-ribbing. Snug around the shoulders with just enough stretch.',
    material: '95% Organic Cotton, 5% Elastane',
    images: [
      'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'XS', color: 'Chalk White', sku: 'TS-004-WHT-XS', stock: 12 },
      { size: 'S', color: 'Chalk White', sku: 'TS-004-WHT-S', stock: 18 },
      { size: 'M', color: 'Chalk White', sku: 'TS-004-WHT-M', stock: 16 },
      { size: 'L', color: 'Chalk White', sku: 'TS-004-WHT-L', stock: 8 }
    ],
    rating: 4.6,
    reviewCount: 37,
    tags: ['bestseller'],
    createdAt: '2026-01-28'
  },
  {
    id: 'ts-005',
    name: 'Textured Waffle Long-Sleeve Tee',
    slug: 'textured-waffle-long-sleeve-tee',
    category: 't-shirts',
    gender: 'men',
    price: 72,
    salePrice: null,
    description: 'Thermal honeycomb waffle weave knit with soft ribbed cuffs. Perfect weight for layering under an overshirt or trench.',
    material: '100% Thermal Organic Cotton (310 GSM)',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'S', color: 'Olive Earth', sku: 'TS-005-OLV-S', stock: 9 },
      { size: 'M', color: 'Olive Earth', sku: 'TS-005-OLV-M', stock: 16 },
      { size: 'L', color: 'Olive Earth', sku: 'TS-005-OLV-L', stock: 14 },
      { size: 'XL', color: 'Olive Earth', sku: 'TS-005-OLV-XL', stock: 7 }
    ],
    rating: 4.8,
    reviewCount: 28,
    tags: ['new'],
    createdAt: '2026-02-12'
  },
  {
    id: 'ts-006',
    name: 'Atelier Minimalist Pocket Tee',
    slug: 'atelier-minimalist-pocket-tee',
    category: 't-shirts',
    gender: 'unisex',
    price: 50,
    salePrice: 40,
    description: 'Seamless bonded chest pocket with a refined straight hem. Relaxed unisex fit with seamless tubular side construction.',
    material: '100% Organic Pima Cotton',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'S', color: 'Heather Slate', sku: 'TS-006-SLT-S', stock: 11 },
      { size: 'M', color: 'Heather Slate', sku: 'TS-006-SLT-M', stock: 20 },
      { size: 'L', color: 'Heather Slate', sku: 'TS-006-SLT-L', stock: 15 }
    ],
    rating: 4.5,
    reviewCount: 31,
    tags: ['sale'],
    createdAt: '2026-01-25'
  },

  // --------------------------------------------------------------------------
  // PANTS (6 Products)
  // --------------------------------------------------------------------------
  {
    id: 'pt-001',
    name: 'Relaxed Selvedge Denim Pant',
    slug: 'relaxed-selvedge-denim-pant',
    category: 'pants',
    gender: 'men',
    price: 165,
    salePrice: null,
    description: 'Woven on vintage shuttle looms in Okayama using ring-spun cotton. 13.5 oz raw selvedge denim with classic button fly and copper rivets.',
    material: '100% Okayama Selvedge Cotton (13.5 oz)',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Raw Indigo', sku: 'PT-001-IND-30', stock: 8 },
      { size: '32', color: 'Raw Indigo', sku: 'PT-001-IND-32', stock: 16 },
      { size: '34', color: 'Raw Indigo', sku: 'PT-001-IND-34', stock: 14 },
      { size: '36', color: 'Raw Indigo', sku: 'PT-001-IND-36', stock: 6 }
    ],
    rating: 4.9,
    reviewCount: 68,
    tags: ['bestseller'],
    createdAt: '2026-01-08'
  },
  {
    id: 'pt-002',
    name: 'Everyday Relaxed Twill Chino',
    slug: 'everyday-relaxed-twill-chino',
    category: 'pants',
    gender: 'men',
    price: 120,
    salePrice: 96,
    description: 'Washed cotton cavalry twill tailored with a subtle taper through the calf. Features angled front slash pockets and reinforced welt back pockets.',
    material: '98% Combed Cotton Twill, 2% Elastane',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Warm Khaki', sku: 'PT-002-KHK-30', stock: 10 },
      { size: '32', color: 'Warm Khaki', sku: 'PT-002-KHK-32', stock: 18 },
      { size: '34', color: 'Warm Khaki', sku: 'PT-002-KHK-34', stock: 14 },
      { size: '32', color: 'Washed Olive', sku: 'PT-002-OLV-32', stock: 12 },
      { size: '34', color: 'Washed Olive', sku: 'PT-002-OLV-34', stock: 9 }
    ],
    rating: 4.7,
    reviewCount: 45,
    tags: ['sale'],
    createdAt: '2026-01-20'
  },
  {
    id: 'pt-003',
    name: 'Wide-Leg Heavyweight Canvas Carpenter Pant',
    slug: 'wide-leg-heavyweight-canvas-carpenter-pant',
    category: 'pants',
    gender: 'unisex',
    price: 145,
    salePrice: null,
    description: 'Rugged yet refined workwear silhouette. Triple-needle chain stitching, hammer loop, utility rule pockets, and reinforced double-layer knees.',
    material: '100% Heavy Duck Canvas Cotton (340 GSM)',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '28', color: 'Ecru Off-White', sku: 'PT-003-ECR-28', stock: 6 },
      { size: '30', color: 'Ecru Off-White', sku: 'PT-003-ECR-30', stock: 12 },
      { size: '32', color: 'Ecru Off-White', sku: 'PT-003-ECR-32', stock: 15 },
      { size: '34', color: 'Ecru Off-White', sku: 'PT-003-ECR-34', stock: 11 }
    ],
    rating: 4.8,
    reviewCount: 39,
    tags: ['new'],
    createdAt: '2026-02-08'
  },
  {
    id: 'pt-004',
    name: 'High-Rise Vintage Straight Jean',
    slug: 'high-rise-vintage-straight-jean',
    category: 'pants',
    gender: 'women',
    price: 155,
    salePrice: null,
    description: 'Flattering high rise with an authentic straight leg profile. Stonewashed for soft hand-feel with light whiskering and classic copper hardware.',
    material: '100% Regenerative Cotton (12.5 oz)',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '26', color: 'Vintage Mid-Blue', sku: 'PT-004-BLU-26', stock: 8 },
      { size: '28', color: 'Vintage Mid-Blue', sku: 'PT-004-BLU-28', stock: 14 },
      { size: '30', color: 'Vintage Mid-Blue', sku: 'PT-004-BLU-30', stock: 12 },
      { size: '32', color: 'Vintage Mid-Blue', sku: 'PT-004-BLU-32', stock: 7 }
    ],
    rating: 4.9,
    reviewCount: 52,
    tags: ['bestseller'],
    createdAt: '2026-01-14'
  },
  {
    id: 'pt-005',
    name: 'Drawstring Linen Leisure Pant',
    slug: 'drawstring-linen-leisure-pant',
    category: 'pants',
    gender: 'unisex',
    price: 130,
    salePrice: 104,
    description: 'Encased elastic waistband with braided cotton drawcord. Deep side pockets and a relaxed straight cut ideal for warm weather ease.',
    material: '100% Pre-Washed European Linen',
    images: [
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '28', color: 'Oatmeal', sku: 'PT-005-OAT-28', stock: 7 },
      { size: '30', color: 'Oatmeal', sku: 'PT-005-OAT-30', stock: 15 },
      { size: '32', color: 'Oatmeal', sku: 'PT-005-OAT-32', stock: 18 },
      { size: '34', color: 'Oatmeal', sku: 'PT-005-OAT-34', stock: 9 }
    ],
    rating: 4.7,
    reviewCount: 31,
    tags: ['sale'],
    createdAt: '2026-02-05'
  },
  {
    id: 'pt-006',
    name: 'Relaxed Tapered Corduroy Pant',
    slug: 'relaxed-tapered-corduroy-pant',
    category: 'pants',
    gender: 'men',
    price: 138,
    salePrice: null,
    description: 'Chunky 8-wale cotton corduroy with natural velvet-like luster. Cut roomier through the thigh before tapering neatly at the hem.',
    material: '100% Cotton 8-Wale Corduroy',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Caramel Brown', sku: 'PT-006-CAR-30', stock: 9 },
      { size: '32', color: 'Caramel Brown', sku: 'PT-006-CAR-32', stock: 17 },
      { size: '34', color: 'Caramel Brown', sku: 'PT-006-CAR-34', stock: 12 },
      { size: '36', color: 'Caramel Brown', sku: 'PT-006-CAR-36', stock: 5 }
    ],
    rating: 4.8,
    reviewCount: 22,
    tags: ['new'],
    createdAt: '2026-02-15'
  },

  // --------------------------------------------------------------------------
  // TROUSERS (6 Products)
  // --------------------------------------------------------------------------
  {
    id: 'tr-001',
    name: 'Double-Pleated Wool Serge Trouser',
    slug: 'double-pleated-wool-serge-trouser',
    category: 'trousers',
    gender: 'men',
    price: 195,
    salePrice: null,
    description: 'Architectural forward double pleats with high rise and extended tab closure. Spun from 4-season Australian Merino wool with an elegant fluid break.',
    material: '100% Super 120s Australian Merino Wool Serge',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Charcoal Melange', sku: 'TR-001-CHC-30', stock: 9 },
      { size: '32', color: 'Charcoal Melange', sku: 'TR-001-CHC-32', stock: 18 },
      { size: '34', color: 'Charcoal Melange', sku: 'TR-001-CHC-34', stock: 14 },
      { size: '36', color: 'Charcoal Melange', sku: 'TR-001-CHC-36', stock: 6 }
    ],
    rating: 4.9,
    reviewCount: 47,
    tags: ['bestseller'],
    createdAt: '2026-01-11'
  },
  {
    id: 'tr-002',
    name: 'Tailored Crease Slim Dress Trouser',
    slug: 'tailored-crease-slim-dress-trouser',
    category: 'trousers',
    gender: 'men',
    price: 175,
    salePrice: 140,
    description: 'Precision permanent pressed center crease, concealed hook-and-bar closure, and pick-stitched pockets. Versatile modern suiting essential.',
    material: '70% Wool, 28% Viscose, 2% Elastane',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Midnight Black', sku: 'TR-002-BLK-30', stock: 12 },
      { size: '32', color: 'Midnight Black', sku: 'TR-002-BLK-32', stock: 20 },
      { size: '34', color: 'Midnight Black', sku: 'TR-002-BLK-34', stock: 16 }
    ],
    rating: 4.7,
    reviewCount: 34,
    tags: ['sale'],
    createdAt: '2026-01-26'
  },
  {
    id: 'tr-003',
    name: 'High-Waisted Wide-Leg Palazzo Trouser',
    slug: 'high-waisted-wide-leg-palazzo-trouser',
    category: 'trousers',
    gender: 'women',
    price: 185,
    salePrice: null,
    description: 'Dramatic wide leg with deep single pleats and tailored side adjusters. Cut from fluid crepe wool that pools gracefully over heels or loafers.',
    material: '100% Wool Crepe',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '26', color: 'Cream Ivory', sku: 'TR-003-IVR-26', stock: 7 },
      { size: '28', color: 'Cream Ivory', sku: 'TR-003-IVR-28', stock: 15 },
      { size: '30', color: 'Cream Ivory', sku: 'TR-003-IVR-30', stock: 12 },
      { size: '32', color: 'Cream Ivory', sku: 'TR-003-IVR-32', stock: 5 }
    ],
    rating: 4.9,
    reviewCount: 58,
    tags: ['bestseller'],
    createdAt: '2026-02-02'
  },
  {
    id: 'tr-004',
    name: 'Relaxed Gurkha Trousers',
    slug: 'relaxed-gurkha-trousers',
    category: 'trousers',
    gender: 'men',
    price: 190,
    salePrice: null,
    description: 'Heritage military-inspired double-buckle waistband with generous single pleats. Woven in Italian cotton-linen drill for enduring structure.',
    material: '65% Italian Cotton, 35% Linen Drill',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Stone Grey', sku: 'TR-004-STN-30', stock: 8 },
      { size: '32', color: 'Stone Grey', sku: 'TR-004-STN-32', stock: 14 },
      { size: '34', color: 'Stone Grey', sku: 'TR-004-STN-34', stock: 10 }
    ],
    rating: 4.8,
    reviewCount: 27,
    tags: ['new'],
    createdAt: '2026-02-16'
  },
  {
    id: 'tr-005',
    name: 'Brushed Wool Flannel Slacks',
    slug: 'brushed-wool-flannel-slacks',
    category: 'trousers',
    gender: 'unisex',
    price: 210,
    salePrice: 168,
    description: 'Insulating brushed wool flannel with subtle heathered yarn depth. Interior curtain waistband for custom tailoring and maximum comfort.',
    material: '100% Virgin Wool Flannel',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '30', color: 'Heather Charcoal', sku: 'TR-005-CHC-30', stock: 6 },
      { size: '32', color: 'Heather Charcoal', sku: 'TR-005-CHC-32', stock: 11 },
      { size: '34', color: 'Heather Charcoal', sku: 'TR-005-CHC-34', stock: 9 }
    ],
    rating: 4.7,
    reviewCount: 21,
    tags: ['sale'],
    createdAt: '2026-01-19'
  },
  {
    id: 'tr-006',
    name: 'Cropped Tailored Cigarette Trouser',
    slug: 'cropped-tailored-cigarette-trouser',
    category: 'trousers',
    gender: 'women',
    price: 160,
    salePrice: null,
    description: 'Sleek ankle-length crop with side ankle slits and concealed side zip. Tailored in bi-stretch cotton blend that holds its shape all day.',
    material: '96% Compact Cotton, 4% Spandex',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: '26', color: 'Black Ink', sku: 'TR-006-BLK-26', stock: 9 },
      { size: '28', color: 'Black Ink', sku: 'TR-006-BLK-28', stock: 16 },
      { size: '30', color: 'Black Ink', sku: 'TR-006-BLK-30', stock: 12 }
    ],
    rating: 4.8,
    reviewCount: 32,
    tags: ['bestseller'],
    createdAt: '2026-02-09'
  },

  // --------------------------------------------------------------------------
  // BAGS (6 Products)
  // --------------------------------------------------------------------------
  {
    id: 'bg-001',
    name: 'Atelier Structured Full-Grain Leather Tote',
    slug: 'atelier-structured-full-grain-leather-tote',
    category: 'bags',
    gender: 'unisex',
    price: 285,
    salePrice: null,
    description: 'Hand-burnished Tuscan vegetable-tanned leather with hand-painted raw edges. Includes a padded 15” laptop compartment and magnetic bridge fastening.',
    material: 'Vegetable-Tanned Tuscan Calf Leather, Solid Brass Hardware',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'One Size', color: 'Cognac Saddle', sku: 'BG-001-COG-OS', stock: 18 },
      { size: 'One Size', color: 'Noir Black', sku: 'BG-001-BLK-OS', stock: 22 }
    ],
    rating: 4.9,
    reviewCount: 83,
    tags: ['bestseller'],
    createdAt: '2026-01-03'
  },
  {
    id: 'bg-002',
    name: 'Minimalist Flap Crossbody Bag',
    slug: 'minimalist-flap-crossbody-bag',
    category: 'bags',
    gender: 'unisex',
    price: 195,
    salePrice: 156,
    description: 'Clean architectural lines with discreet magnetic closure and adjustable leather shoulder strap. Lined in plush microfiber with zip interior pocket.',
    material: 'Smooth Semi-Aniline Nappa Leather',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'One Size', color: 'Terracotta Rust', sku: 'BG-002-TER-OS', stock: 12 },
      { size: 'One Size', color: 'Onyx Black', sku: 'BG-002-BLK-OS', stock: 15 }
    ],
    rating: 4.8,
    reviewCount: 44,
    tags: ['sale'],
    createdAt: '2026-01-24'
  },
  {
    id: 'bg-003',
    name: 'Heavyweight Canvas Weekend Duffel',
    slug: 'heavyweight-canvas-weekend-duffel',
    category: 'bags',
    gender: 'unisex',
    price: 220,
    salePrice: null,
    description: '24 oz paraffin wax coated canvas engineered to withstand travel. Reinforced with saddle leather handles, heavy YKK two-way brass zippers, and detachable shoulder strap.',
    material: '24 oz Waxed Cotton Canvas & Bridle Leather',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'One Size', color: 'Olive Drab', sku: 'BG-003-OLV-OS', stock: 14 },
      { size: 'One Size', color: 'Charcoal Black', sku: 'BG-003-CHC-OS', stock: 11 }
    ],
    rating: 4.9,
    reviewCount: 62,
    tags: ['bestseller'],
    createdAt: '2026-02-04'
  },
  {
    id: 'bg-004',
    name: 'Woven Slouchy Leather Shoulder Bag',
    slug: 'woven-slouchy-leather-shoulder-bag',
    category: 'bags',
    gender: 'women',
    price: 320,
    salePrice: null,
    description: 'Hand-woven strips of supple lambskin leather. Drapes comfortably against the body with a slouchy curved silhouette and knotted strap detailing.',
    material: '100% Hand-Woven Lambskin Leather',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'One Size', color: 'Warm Taupe', sku: 'BG-004-TPE-OS', stock: 8 },
      { size: 'One Size', color: 'Deep Espresso', sku: 'BG-004-ESP-OS', stock: 7 }
    ],
    rating: 4.8,
    reviewCount: 39,
    tags: ['new'],
    createdAt: '2026-02-17'
  },
  {
    id: 'bg-005',
    name: 'Commuter Slim Leather Backpack',
    slug: 'commuter-slim-leather-backpack',
    category: 'bags',
    gender: 'unisex',
    price: 260,
    salePrice: 208,
    description: 'Streamlined low-profile silhouette with waterproof zippers, breathable mesh back panel, and discrete passport security pocket.',
    material: 'Water-Resistant Pebble Grain Leather',
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'One Size', color: 'Matte Black', sku: 'BG-005-BLK-OS', stock: 16 }
    ],
    rating: 4.7,
    reviewCount: 41,
    tags: ['sale'],
    createdAt: '2026-01-30'
  },
  {
    id: 'bg-006',
    name: 'Compact Cylindrical Camera Bag',
    slug: 'compact-cylindrical-camera-bag',
    category: 'bags',
    gender: 'unisex',
    price: 160,
    salePrice: null,
    description: 'Compact daily carrier with structured piping, exterior card slot, and detachable webbing crossbody strap.',
    material: 'Smooth Box Calf Leather',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'One Size', color: 'Clay Brown', sku: 'BG-006-BRN-OS', stock: 10 },
      { size: 'One Size', color: 'Jet Black', sku: 'BG-006-BLK-OS', stock: 14 }
    ],
    rating: 4.6,
    reviewCount: 25,
    tags: ['new'],
    createdAt: '2026-02-11'
  },

  // --------------------------------------------------------------------------
  // SHOES (6 Products)
  // --------------------------------------------------------------------------
  {
    id: 'shs-001',
    name: 'Minimalist Leather Court Sneaker',
    slug: 'minimalist-leather-court-sneaker',
    category: 'shoes',
    gender: 'unisex',
    price: 180,
    salePrice: null,
    description: 'Handcrafted in Portugal using supple Italian calf leather. Stitched Margom rubber cupsole with cushioned memory foam arch support.',
    material: 'Italian Full-Grain Calf Leather & Margom Italian Rubber Sole',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'EU 40', color: 'Optic White', sku: 'SHS-001-WHT-40', stock: 8 },
      { size: 'EU 41', color: 'Optic White', sku: 'SHS-001-WHT-41', stock: 15 },
      { size: 'EU 42', color: 'Optic White', sku: 'SHS-001-WHT-42', stock: 22 },
      { size: 'EU 43', color: 'Optic White', sku: 'SHS-001-WHT-43', stock: 18 },
      { size: 'EU 44', color: 'Optic White', sku: 'SHS-001-WHT-44', stock: 10 }
    ],
    rating: 4.9,
    reviewCount: 112,
    tags: ['bestseller'],
    createdAt: '2026-01-02'
  },
  {
    id: 'shs-002',
    name: 'Handcrafted Penny Loafer',
    slug: 'handcrafted-penny-loafer',
    category: 'shoes',
    gender: 'men',
    price: 240,
    salePrice: 192,
    description: 'Blake-stitched construction with traditional saddle strap and hand-stitched apron toe. Stacked leather heel with inset rubber tap for traction.',
    material: 'Hand-Burnished French Calfskin & Oak Bark Tanned Sole',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'EU 41', color: 'Deep Burgundy', sku: 'SHS-002-BUR-41', stock: 6 },
      { size: 'EU 42', color: 'Deep Burgundy', sku: 'SHS-002-BUR-42', stock: 12 },
      { size: 'EU 43', color: 'Deep Burgundy', sku: 'SHS-002-BUR-43', stock: 14 },
      { size: 'EU 44', color: 'Deep Burgundy', sku: 'SHS-002-BUR-44', stock: 7 }
    ],
    rating: 4.8,
    reviewCount: 56,
    tags: ['sale'],
    createdAt: '2026-01-16'
  },
  {
    id: 'shs-003',
    name: 'Suede Chelsea Boot',
    slug: 'suede-chelsea-boot',
    category: 'shoes',
    gender: 'unisex',
    price: 260,
    salePrice: null,
    description: 'Velvety Italian split calf suede with tonal elastic side gussets and dual woven pull tabs. Goodyear welted on a natural crepe rubber outsole.',
    material: 'Italian Water-Repellent Suede & Natural Plantation Crepe Sole',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'EU 39', color: 'Sand Taupe', sku: 'SHS-003-SND-39', stock: 7 },
      { size: 'EU 40', color: 'Sand Taupe', sku: 'SHS-003-SND-40', stock: 11 },
      { size: 'EU 41', color: 'Sand Taupe', sku: 'SHS-003-SND-41', stock: 16 },
      { size: 'EU 42', color: 'Sand Taupe', sku: 'SHS-003-SND-42', stock: 18 },
      { size: 'EU 43', color: 'Sand Taupe', sku: 'SHS-003-SND-43', stock: 12 }
    ],
    rating: 4.9,
    reviewCount: 74,
    tags: ['bestseller'],
    createdAt: '2026-01-21'
  },
  {
    id: 'shs-004',
    name: 'Chunky Commando Derby Shoe',
    slug: 'chunky-commando-derby-shoe',
    category: 'shoes',
    gender: 'men',
    price: 250,
    salePrice: null,
    description: 'Substantial profile built with polished corrected-grain leather atop an assertive lugged commando rubber sole. Storm welted for weather resistance.',
    material: 'Polished Box Calf Leather & Vibram Commando Lug Sole',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'EU 41', color: 'Polished Black', sku: 'SHS-004-BLK-41', stock: 8 },
      { size: 'EU 42', color: 'Polished Black', sku: 'SHS-004-BLK-42', stock: 15 },
      { size: 'EU 43', color: 'Polished Black', sku: 'SHS-004-BLK-43', stock: 11 },
      { size: 'EU 44', color: 'Polished Black', sku: 'SHS-004-BLK-44', stock: 5 }
    ],
    rating: 4.7,
    reviewCount: 39,
    tags: ['new'],
    createdAt: '2026-02-13'
  },
  {
    id: 'shs-005',
    name: 'Minimalist Pointed Leather Mule',
    slug: 'minimalist-pointed-leather-mule',
    category: 'shoes',
    gender: 'women',
    price: 195,
    salePrice: 156,
    description: 'Effortless slip-on profile with a softly tapered almond toe and 25mm stacked heel. Memory-cushioned insole lined in supple goat leather.',
    material: '100% Nappa Leather Upper & Leather Sole',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'EU 37', color: 'Bone Ivory', sku: 'SHS-005-IVR-37', stock: 6 },
      { size: 'EU 38', color: 'Bone Ivory', sku: 'SHS-005-IVR-38', stock: 12 },
      { size: 'EU 39', color: 'Bone Ivory', sku: 'SHS-005-IVR-39', stock: 14 },
      { size: 'EU 40', color: 'Bone Ivory', sku: 'SHS-005-IVR-40', stock: 7 }
    ],
    rating: 4.8,
    reviewCount: 48,
    tags: ['sale'],
    createdAt: '2026-01-27'
  },
  {
    id: 'shs-006',
    name: 'Retro Running Trainer in Suede & Nylon',
    slug: 'retro-running-trainer-in-suede-and-nylon',
    category: 'shoes',
    gender: 'unisex',
    price: 170,
    salePrice: null,
    description: '70s track inspiration reimagined with recycled ripstop nylon, hairy suede overlays, and EVA wedge midsole for all-day urban walking.',
    material: 'Recycled Ripstop Nylon, Hairy Suede & EVA Cushioned Midsole',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      { size: 'EU 40', color: 'Stone Grey / Clay', sku: 'SHS-006-GRY-40', stock: 9 },
      { size: 'EU 41', color: 'Stone Grey / Clay', sku: 'SHS-006-GRY-41', stock: 16 },
      { size: 'EU 42', color: 'Stone Grey / Clay', sku: 'SHS-006-GRY-42', stock: 18 },
      { size: 'EU 43', color: 'Stone Grey / Clay', sku: 'SHS-006-GRY-43', stock: 12 }
    ],
    rating: 4.7,
    reviewCount: 36,
    tags: ['new'],
    createdAt: '2026-02-14'
  }
];

// Sample customer reviews data keyed by product ID
export const SAMPLE_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Julian M.',
    rating: 5,
    title: 'Impeccable cut and fabric feel',
    comment: 'The drape of this piece is truly architectural. Wore it all weekend and received multiple compliments. Sizing is spot on.',
    date: 'February 18, 2026',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Elena R.',
    rating: 5,
    title: 'Subtle luxury that lasts',
    comment: 'The materials feel so elevated compared to high-street brands. Has held its shape beautifully after three washes.',
    date: 'February 10, 2026',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Marcus K.',
    rating: 4,
    title: 'Extremely well made',
    comment: 'Very pleased with the craftsmanship and attention to detail. Fast delivery and high-end presentation box.',
    date: 'January 28, 2026',
    verified: true
  }
];
