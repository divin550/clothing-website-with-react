import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="d-flex align-items-center flex-wrap list-unstyled m-0 small">
        <li className="d-flex align-items-center">
          <Link to="/" className="text-muted text-decoration-none">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2 text-muted opacity-50" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="d-flex align-items-center">
              {isLast || !item.path ? (
                <span className="fw-semibold text-dark" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link to={item.path} className="text-muted text-decoration-none">
                    {item.label}
                  </Link>
                  <ChevronRight size={14} className="mx-2 text-muted opacity-50" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
