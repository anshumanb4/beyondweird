import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">Beyond WEIRD</Link>
          <div className="nav__links">
            <Link to="/about">About Us</Link>
            <a href="https://forms.google.com/your-form-url" className="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">About Us</h1>
          <p className="about-hero__subtitle">
            The people and vision behind Beyond WEIRD
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
          <div className="founder">
            <div className="founder__image">
              <div className="founder__avatar">NB</div>
            </div>
            <div className="founder__content">
              <h2 className="founder__name">Neva Bapna</h2>
              <p className="founder__role">Founder & Organizer</p>

              <div className="founder__bio">
                <p>
                  Neva Bapna is a researcher and organizer working at the intersection of artificial intelligence, Indigenous knowledge systems, and epistemological pluralism.
                </p>
                <p>
                  Her work focuses on building the scaffolding for AI systems that can reason using Indigenous logics—not as an alternative to Western approaches, but as a fundamentally different architecture of thought that centers relationality, land kinship, and intergenerational responsibility.
                </p>
                <p>
                  In her foundational white paper, <em>"Designing For Epistemological Pluralism: A Technical and Ethical Foundation for an Indigenous Values-Aligned Language Model,"</em> Neva outlines a governance-first approach to building AI systems that honor Indigenous ways of knowing without extracting or flattening them.
                </p>
                <p>
                  Beyond WEIRD emerged from this research as a space to convene the scholars, practitioners, and thinkers who are essential to this work—bringing together AI researchers, Indigenous knowledge-holders, and philosophers to explore what truly plural AI might look like.
                </p>
              </div>

              <div className="founder__links">
                <a
                  href="https://www.linkedin.com/in/nevabapna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder__link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:nevabpna@gmail.com"
                  className="founder__link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="mission">
            <h2 className="mission__heading">Our Mission</h2>
            <div className="mission__content">
              <p>
                Beyond WEIRD exists to challenge the assumption that AI must reason in only one way. We believe that Indigenous knowledge systems—with their emphasis on relationships, reciprocity, and responsibility to future generations—offer not just an alternative perspective, but a structurally different approach to intelligence itself.
              </p>
              <p>
                We are committed to doing this work ethically: starting with relationships rather than data, ensuring community benefit and consent, and building in public with ongoing feedback. This is not about extracting Indigenous knowledge for Western innovation—it's about creating the conditions for true epistemological pluralism.
              </p>
              <p>
                The Beyond WEIRD conference is the first step in a longer journey toward AI systems that can hold multiple ways of knowing, particularly in fields like sustainability, climate adaptation, and policy where relational thinking is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section rsvp">
        <div className="container">
          <h2 className="rsvp__heading">Join Us</h2>
          <p className="rsvp__text">
            Interested in this work? Join us for the inaugural Beyond WEIRD conference.
          </p>
          <Link to="/" className="btn btn--outline" style={{ marginRight: '1rem' }}>
            Back to Conference
          </Link>
          <a href="https://forms.google.com/your-form-url" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer__text">
            Beyond WEIRD 2026 · <Link to="/about">About Us</Link> · Questions? <a href="mailto:hello@beyondweird.org">hello@beyondweird.org</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default About;
