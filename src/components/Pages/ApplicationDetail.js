import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getApplicationBySlug, getRelatedApplications } from '../../data/applicationsData';
import Seo from '../Seo';
import ScrollToTopButton from '../ScrollToTopButton';
import '../css/ApplicationDetail.css';

const ApplicationDetail = () => {
  const { slug } = useParams();
  const application = getApplicationBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  if (!application) {
    return <Navigate to="/#applications" replace />;
  }

  const related = getRelatedApplications(application.id, 5);
  const gallery = (application.gallery || [application.heroImage]).filter(Boolean);
  const heroFallback = application.heroImage;

  const handleImgError = (e) => {
    if (heroFallback && e.target.src !== heroFallback) {
      e.target.src = heroFallback;
    }
  };

  return (
    <div className="application-detail-page">
      <Seo
        title={application.title}
        path={`/applications/${application.id}`}
        description={application.shortDescription}
        keywords={`AeroEdge, ${application.title}, drone applications, aerial survey India`}
      />

      <header
        className="application-detail-hero"
        style={{ backgroundImage: `url(${application.heroImage})` }}
      >
        <div className="application-detail-hero__overlay">
          <div className="application-detail-hero__content">
            <nav className="application-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/#applications">Applications</Link>
              <span aria-hidden="true">/</span>
              <span>{application.title}</span>
            </nav>
            <p className="application-detail-hero__eyebrow">AeroEdge Application</p>
            <h1>{application.title}</h1>
            <p className="application-detail-hero__tagline">{application.tagline}</p>
            <Link to="/contact-us" className="application-detail-cta">
              Request a consultation
            </Link>
          </div>
        </div>
      </header>

      <div className="application-detail-layout">
        <article className="application-detail-main">
          <section className="application-gallery" aria-label="Image gallery">
            <div className="application-gallery__featured">
              <img
                src={gallery[activeImage] || heroFallback}
                alt={`${application.title} — view ${activeImage + 1}`}
                onError={handleImgError}
              />
            </div>
            <div className="application-gallery__thumbs">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`application-gallery__thumb ${index === activeImage ? 'is-active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={index === activeImage}
                >
                  <img src={img} alt="" onError={handleImgError} />
                </button>
              ))}
            </div>
          </section>

          <section className="application-block application-block--intro">
            <p className="application-lead">{application.shortDescription}</p>
          </section>

          {(application.sections || []).map((section) => (
            <section className="application-block" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="application-block application-block--split">
            <div>
              <h2>Capabilities</h2>
              <ul className="application-checklist">
                {application.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Key benefits</h2>
              <ul className="application-checklist application-checklist--benefits">
                {application.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="application-block">
            <h2>Industries we serve</h2>
            <div className="application-tags">
              {application.industries.map((tag) => (
                <span key={tag} className="application-tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="application-cta-banner">
            <div>
              <h2>Ready to deploy this solution?</h2>
              <p>
                Our team will scope your site, recommend the right platform, and deliver
                actionable aerial intelligence.
              </p>
            </div>
            <Link to="/contact-us" className="application-detail-cta application-detail-cta--dark">
              Get in touch
            </Link>
          </section>
        </article>

        <div className="application-detail-sidebar-wrap">
        <aside className="application-detail-sidebar" aria-label="Related applications">
          <div className="sidebar-card">
            <h3>Related applications</h3>
            <p className="sidebar-card__hint">Explore more ways AeroEdge supports your mission</p>
            <ul className="related-applications-list">
              {related.map((app) => (
                <li key={app.id}>
                  <Link to={`/applications/${app.id}`} className="related-application-item">
                    <img src={app.heroImage} alt="" onError={handleImgError} />
                    <div>
                      <span className="related-application-item__title">{app.title}</span>
                      <span className="related-application-item__desc">{app.shortDescription}</span>
                    </div>
                    <span className="related-application-item__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/#applications" className="sidebar-view-all">
              View all applications
            </Link>
          </div>

          <div className="sidebar-card sidebar-card--contact">
            <p className="sidebar-card__brand">AeroEdge Technologies</p>
            <h3>Talk to an expert</h3>
            <p>
              Custom demos, pilot programs, and mission-specific UAV integration — available
              across India.
            </p>
            <a href="mailto:connect@aeroedgetechnologies.in" className="sidebar-email">
              connect@aeroedgetechnologies.in
            </a>
            <Link to="/contact-us" className="application-detail-cta application-detail-cta--full">
              Contact us
            </Link>
          </div>
        </aside>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default ApplicationDetail;
