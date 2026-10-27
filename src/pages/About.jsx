import Breadcrumbs from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Feather, Globe2, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page py-4 pb-5">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: 'About Atelier' }]} />

        {/* Hero Banner */}
        <div className="text-center py-5 my-3" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="small text-uppercase fw-bold tracking-wider text-accent mb-2 d-inline-block">
            Our Heritage & Ethos
          </span>
          <h1 className="display-4 font-serif mb-4">
            A Quiet Devotion to Proportion, Fabric, and Permanence.
          </h1>
          <p className="lead text-muted" style={{ lineHeight: '1.8' }}>
            ATELIER was founded in response to disposable fashion. We reject fleeting novelty in favor of architectural silhouettes, rare heritage textiles, and disciplined garment tailoring.
          </p>
        </div>

        {/* Image Grid */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6">
            <div className="rounded-4 overflow-hidden" style={{ height: '460px' }}>
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                alt="Atelier textile workshop and garment pattern cutters"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="rounded-4 overflow-hidden" style={{ height: '460px' }}>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="Finished bespoke garments on hangers in studio"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        {/* The 3 Pillars */}
        <div className="row g-4 my-5 py-4">
          <div className="col-12 col-md-4">
            <div className="p-4 bg-light rounded-3 h-100">
              <div className="p-3 bg-white rounded-circle d-inline-flex mb-3 text-accent shadow-sm">
                <Feather size={24} />
              </div>
              <h4 className="font-serif fs-5 mb-2">Tactile Provenance</h4>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                We work directly with generational family mills in Normandy for flax linen, Biella for superfine merino wool, and Okayama for shuttle-loom raw selvedge denim.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 bg-light rounded-3 h-100">
              <div className="p-3 bg-white rounded-circle d-inline-flex mb-3 text-accent shadow-sm">
                <Globe2 size={24} />
              </div>
              <h4 className="font-serif fs-5 mb-2">Zero Excess Philosophy</h4>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                Every silhouette is produced in serialized batches to prevent overproduction. Surplus cloth is repurposed into our small leather accessories and archival pouches.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 bg-light rounded-3 h-100">
              <div className="p-3 bg-white rounded-circle d-inline-flex mb-3 text-accent shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-serif fs-5 mb-2">Generational Wear</h4>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                We design garments meant to be worn, laundered, and repaired across decades. Our clothing ages gracefully, developing a rich patina unique to its owner.
              </p>
            </div>
          </div>
        </div>

        {/* Atelier CTA Quote */}
        <div className="p-5 text-center bg-dark text-white rounded-4 my-5">
          <p className="font-serif fs-3 mb-3 text-white" style={{ maxWidth: '640px', margin: '0 auto', fontStyle: 'italic' }}>
            "True luxury is not defined by conspicuous emblems, but by how a garment feels when you slip your hands into its pockets."
          </p>
          <span className="small text-white-50 text-uppercase tracking-wider d-block mb-4">
            — Atelier Studio Manifesto
          </span>
          <Link to="/shop" className="btn-atelier-secondary">
            <span>Explore The Collection</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
