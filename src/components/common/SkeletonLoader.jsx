export default function SkeletonLoader({ count = 8 }) {
  return (
    <div className="row g-3 g-md-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="col-6 col-md-4 col-lg-3">
          <div className="product-card">
            <div className="skeleton" style={{ width: '100%', aspectRatio: '3 / 4', borderRadius: '12px' }} />
            <div className="pt-3">
              <div className="skeleton mb-2" style={{ height: '14px', width: '80%' }} />
              <div className="skeleton mb-2" style={{ height: '14px', width: '40%' }} />
              <div className="skeleton" style={{ height: '12px', width: '30%' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
