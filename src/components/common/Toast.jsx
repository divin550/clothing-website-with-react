import { useToast } from '../../context/ToastContext';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useToast();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container-custom" role="region" aria-live="polite" aria-label="Notifications">
      {toasts.map((toast) => {
        let IconComponent = Info;
        let iconColor = '#FFFFFF';

        if (toast.type === 'success') {
          IconComponent = CheckCircle2;
          iconColor = '#4ADE80';
        } else if (toast.type === 'error') {
          IconComponent = AlertCircle;
          iconColor = '#F87171';
        }

        return (
          <div key={toast.id} className="toast-item" role="alert">
            <div className="d-flex align-items-center gap-2">
              <IconComponent size={18} color={iconColor} className="flex-shrink-0" />
              <span>{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="btn btn-link p-0 text-white opacity-75 hover-opacity-100"
              style={{ border: 'none', background: 'transparent' }}
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
