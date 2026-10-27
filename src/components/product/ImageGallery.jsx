import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ImageGallery({ images = [], alt = 'Product Image' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const frameRef = useRef(null);

  if (!images || images.length === 0) return null;

  const currentImg = images[selectedIndex] || images[0];

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const { left, top, width, height } = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Main Image Frame with Zoom */}
      <div
        ref={frameRef}
        className="gallery-main-frame position-relative shadow-sm"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        aria-label="Product image gallery preview"
      >
        <img
          src={currentImg}
          alt={`${alt} view ${selectedIndex + 1}`}
          className="gallery-main-img"
          style={{
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
          }}
          loading="eager"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x1000/f5f2ee/999?text=No+Image'; }}
        />

        {/* Gallery navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="btn btn-sm btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-3 shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: '36px', height: '36px', zIndex: 3 }}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="btn btn-sm btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-3 shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: '36px', height: '36px', zIndex: 3 }}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Zoom trigger indicator */}
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="btn btn-sm btn-light rounded-circle position-absolute bottom-0 end-0 m-3 shadow-sm d-flex align-items-center justify-content-center"
          style={{ width: '36px', height: '36px', zIndex: 3 }}
          aria-label="View fullscreen"
          title="Fullscreen view"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="thumbnail-strip" role="tablist" aria-label="Thumbnail gallery">
          {images.map((imgUrl, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              aria-label={`View image thumbnail ${index + 1}`}
              onClick={() => setSelectedIndex(index)}
              className={`thumb-btn ${selectedIndex === index ? 'active' : ''}`}
            >
              <img src={imgUrl} alt={`${alt} thumb ${index + 1}`} loading="lazy" onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x260/f5f2ee/999?text=No+Image'; }} />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0,0,0,0.92)',
            zIndex: 1080,
          }}
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={currentImg}
            alt={alt}
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
}
