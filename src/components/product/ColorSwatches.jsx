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

export default function ColorSwatches({ colors = [], selectedColor, onSelectColor }) {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="d-flex align-items-center gap-2 flex-wrap" role="radiogroup" aria-label="Product color choices">
      {colors.map((colorName) => {
        const hex = COLOR_MAP[colorName] || '#999999';
        const isSelected = selectedColor === colorName;

        return (
          <button
            key={colorName}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={`Select color ${colorName}`}
            title={colorName}
            className={`swatch-btn ${isSelected ? 'active' : ''}`}
            style={{ backgroundColor: hex }}
            onClick={() => onSelectColor(colorName)}
          />
        );
      })}
    </div>
  );
}
