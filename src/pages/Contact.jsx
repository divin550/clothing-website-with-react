import { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page py-4 pb-5">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: 'Contact Studio' }]} />

        <div className="row g-4 g-lg-5">
          {/* Left Column: Form */}
          <div className="col-12 col-lg-7">
            <span className="small text-uppercase fw-bold tracking-wider text-muted">
              Client Concierge
            </span>
            <h1 className="font-serif mb-3">Speak With Our Studio</h1>
            <p className="text-muted small mb-4">
              Have a question regarding textile origin, bespoke sizing, or existing orders? Our studio advisors are available Monday through Saturday.
            </p>

            {submitted ? (
              <div className="p-4 p-md-5 bg-light rounded-4 text-center border">
                <div className="d-inline-flex p-3 rounded-circle bg-success text-white mb-3">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif mb-2">Message Received</h4>
                <p className="text-muted small mb-4" style={{ maxWidth: '420px', margin: '0 auto' }}>
                  Thank you, <strong>{formData.name}</strong>. A dedicated studio concierge will reply to <strong>{formData.email}</strong> within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="btn-atelier-secondary btn-atelier-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label-atelier">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Julian Martin"
                      className="form-control-atelier"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label-atelier">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@example.com"
                      className="form-control-atelier"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label-atelier">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-select-atelier"
                    >
                      <option value="General Inquiry">General Product Inquiry</option>
                      <option value="Sizing Advice">Sizing & Tailoring Advice</option>
                      <option value="Order Status">Order Status & Tracking</option>
                      <option value="Press & Media">Press & Partnerships</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label-atelier">Your Message</label>
                    <textarea
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How may our studio team assist you today?"
                      className="form-control-atelier"
                      style={{ height: 'auto', padding: '14px 16px' }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-atelier-primary">
                      <Send size={16} />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Info & Location Card */}
          <div className="col-12 col-lg-5">
            <div className="p-4 bg-light rounded-4 border mb-4">
              <h4 className="font-serif fs-5 mb-4">Flagship Atelier</h4>

              <div className="d-flex align-items-start gap-3 mb-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="d-block text-dark small">New York Studio</strong>
                  <span className="text-muted small">
                    124 Mercer Street, Soho<br />
                    New York, NY 10012
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <Phone size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="d-block text-dark small">Concierge Telephone</strong>
                  <span className="text-muted small">+1 (212) 555-0198</span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <Mail size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="d-block text-dark small">Direct Dispatch</strong>
                  <span className="text-muted small">concierge@atelier-studio.com</span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <Clock size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <strong className="d-block text-dark small">Opening Hours</strong>
                  <span className="text-muted small">
                    Monday – Friday: 10:00 AM – 7:00 PM EST<br />
                    Saturday: 11:00 AM – 6:00 PM EST<br />
                    Sunday: Closed for Studio Maintenance
                  </span>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="rounded-4 overflow-hidden border shadow-sm" style={{ height: '260px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map location preview of Atelier Soho studio"
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
              >
                <span className="text-white small fw-bold">Atelier Flagship Store & Studio</span>
                <span className="text-white-50 d-block small">124 Mercer Street, Soho, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
