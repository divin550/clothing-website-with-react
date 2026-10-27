import { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    category: 'Ordering & Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards (Visa, MasterCard, American Express), Apple Pay, and Cash on Delivery (COD) for eligible regional deliveries.',
      },
      {
        q: 'Can I apply promotional codes to sale items?',
        a: 'Yes, general privilege codes such as SAVE10 can be applied on top of archived sale pricing unless specifically denoted as a final clearance piece.',
      },
      {
        q: 'Can I modify or cancel my order after placement?',
        a: 'Because our distribution team processes orders within hours, modifications must be requested within 60 minutes of order submission by contacting concierge@atelier-studio.com.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        q: 'How long does standard delivery take?',
        a: 'Domestic orders arrive within 3–5 business days. Express priority courier arrives within 1–2 business days. International deliveries generally take 5–8 business days.',
      },
      {
        q: 'How does complimentary shipping work?',
        a: 'All orders with a subtotal of $150 or greater automatically receive complimentary standard shipping at checkout without requiring a voucher code.',
      },
      {
        q: 'Will my shipment be tracked?',
        a: 'Yes, as soon as your garment parcel departs our fulfillment studio, an automated dispatch notification with live tracking link is sent via email.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer complimentary 30-day returns on all unworn items in their original condition with atelier tags and presentation boxes intact.',
      },
      {
        q: 'How do I start a return?',
        a: 'Navigate to your Account order history or contact our support concierge. A pre-paid shipping label and return authorization will be issued instantly.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Once the returned item is inspected at our atelier (usually 2 business days), your refund is credited directly to the original payment method.',
      },
    ],
  },
  {
    category: 'Sizing & Garment Care',
    questions: [
      {
        q: 'How do Atelier silhouettes fit?',
        a: 'Our shirts and t-shirts are tailored with a relaxed, modern drape. If you prefer a sharper, form-fitting silhouette, we recommend sizing down one size.',
      },
      {
        q: 'How should I wash raw selvedge denim?',
        a: 'We suggest wearing your raw selvedge jeans for 3–6 months before the first wash to establish authentic honeycombs and whiskering. Hand-wash inside out in cold water and hang dry.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Ordering & Payment', 'Shipping & Delivery', 'Returns & Exchanges', 'Sizing & Garment Care'];

  const displayedFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((group) => group.category === activeCategory);

  return (
    <div className="faq-page py-4 pb-5">
      <div className="container-custom" style={{ maxWidth: '900px' }}>
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        <div className="text-center py-4 mb-4">
          <div className="d-inline-flex p-3 rounded-circle bg-light mb-3 text-accent">
            <HelpCircle size={32} />
          </div>
          <h1 className="font-serif mb-2">Frequently Asked Questions</h1>
          <p className="text-muted small" style={{ maxWidth: '540px', margin: '0 auto' }}>
            Find immediate clarity on our sizing philosophy, artisanal materials, order processing, and returns.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${
                activeCategory === cat ? 'btn-atelier-primary' : 'btn-outline-secondary'
              } rounded-pill px-3 py-2`}
              style={{ fontSize: '13px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Groups */}
        <div className="d-flex flex-column gap-5">
          {displayedFaqs.map((group, gIdx) => (
            <div key={gIdx}>
              <h4 className="font-serif fs-5 mb-3 pb-2 border-bottom text-dark">
                {group.category}
              </h4>
              <div className="accordion accordion-atelier" id={`accordion-${gIdx}`}>
                {group.questions.map((item, qIdx) => {
                  const collapseId = `faq-collapse-${gIdx}-${qIdx}`;
                  const isFirst = gIdx === 0 && qIdx === 0;

                  return (
                    <div key={qIdx} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${isFirst ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={isFirst ? 'true' : 'false'}
                          aria-controls={collapseId}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                        data-bs-parent={`#accordion-${gIdx}`}
                      >
                        <div className="accordion-body text-muted small">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
