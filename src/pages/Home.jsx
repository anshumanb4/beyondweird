import { Link } from 'react-router-dom';

function Home() {
  const speakers = [
    {
      name: "Linda Tuhiwai Smith",
      role: "Indigenous Epistemology",
      affiliation: "University of Waikato",
      initials: "LS"
    },
    {
      name: "Kim TallBear",
      role: "Indigenous Studies & STS",
      affiliation: "University of Alberta",
      initials: "KT"
    },
    {
      name: "Maui Hudson",
      role: "Indigenous Data Sovereignty",
      affiliation: "University of Waikato / GIDA",
      initials: "MH"
    },
    {
      name: "Kristie Dotson",
      role: "Philosophy",
      affiliation: "University of Michigan",
      initials: "KD"
    },
    {
      name: "José Medina",
      role: "Epistemology & Exclusion",
      affiliation: "Northwestern University",
      initials: "JM"
    },
    {
      name: "Hasok Chang",
      role: "Philosophy of Science",
      affiliation: "University of Cambridge",
      initials: "HC"
    },
    {
      name: "Alan Blackwell",
      role: "Data & Cognitive Science",
      affiliation: "University of Cambridge",
      initials: "AB"
    }
  ];

  const formatCards = [
    {
      title: "4 Sessions",
      text: "60-75 minutes each, designed to allow ideas to unfold naturally"
    },
    {
      title: "Interdisciplinary Panels",
      text: "Each session brings together an AI scientist, Indigenous researcher, and philosopher"
    },
    {
      title: "Productive Tensions",
      text: "Structured to surface disagreements and unexpected connections"
    },
    {
      title: "Intimate Audience",
      text: "Capped at ~100 participants to enable meaningful exchange"
    }
  ];

  // Replace this with your actual Google Form URL
  const rsvpUrl = "https://forms.google.com/your-form-url";

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">Beyond WEIRD</Link>
          <div className="nav__links">
            <Link to="/about">About Us</Link>
            <a href={rsvpUrl} className="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__badge">Virtual Conference</span>
            <h1 className="hero__title">Beyond WEIRD</h1>
            <p className="hero__subtitle">
              A one-day gathering exploring what it means to build AI systems that reason differently—through Indigenous logics, not Western defaults.
            </p>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>May 21, 2026</span>
              </div>
              <div className="hero__meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>One Day</span>
              </div>
              <div className="hero__meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <span>Virtual</span>
              </div>
            </div>
            <a href={rsvpUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section--alt" id="about">
        <div className="container">
          <div className="about__grid">
            <div>
              <h2 className="about__heading">Why This Conference?</h2>
              <p className="about__text">
                Current AI systems reason using a narrow set of values: efficiency, cost-benefit analysis, individual optimization. These defaults come from WEIRD (Western, Educated, Industrialized, Rich, Democratic) societies.
              </p>
              <p className="about__text">
                But what if we stopped trying to "de-bias" AI—and instead asked what it would mean to build systems that reason through entirely different logics?
              </p>
              <p className="about__text">
                Indigenous reasoning offers something structurally different: relationality, land kinship, seven-generation thinking. These aren't just "alternative values" to layer onto existing systems. They represent different architectures of thought.
              </p>
            </div>
            <div>
              <p className="about__text">
                This conference brings together AI researchers, Indigenous scholars, and philosophers to explore what epistemological pluralism could look like in practice—especially for fields like sustainability and policy where relational thinking matters most.
              </p>
              <div className="about__highlight">
                <p>
                  "Indigenous peoples' holistic worldview and knowledge of their lands are a major resource for adapting to climate change."
                </p>
                <p style={{ fontStyle: 'normal', fontSize: '0.875rem', marginTop: '0.75rem', color: 'var(--color-text-muted)' }}>
                  — Intergovernmental Panel on Climate Change (IPCC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="section" id="format">
        <div className="container">
          <h2 className="format__heading">Conference Format</h2>
          <p className="format__intro">
            A single day designed for depth over breadth—structured conversations that allow ideas to surface and collide.
          </p>
          <div className="format__grid">
            {formatCards.map((card, index) => (
              <div className="format__card" key={index}>
                <div className="format__card-number">{index + 1}</div>
                <h3 className="format__card-title">{card.title}</h3>
                <p className="format__card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="section section--alt" id="speakers">
        <div className="container">
          <h2 className="speakers__heading">Invited Speakers</h2>
          <p className="speakers__subtitle">Scholars and practitioners at the intersection of AI, Indigenous studies, and philosophy</p>
          <div className="speakers__grid">
            {speakers.map((speaker, index) => (
              <div className="speaker" key={index}>
                <div className="speaker__avatar">{speaker.initials}</div>
                <div className="speaker__info">
                  <div className="speaker__name">{speaker.name}</div>
                  <div className="speaker__role">{speaker.role}</div>
                  <div className="speaker__affiliation">{speaker.affiliation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section rsvp" id="register">
        <div className="container">
          <h2 className="rsvp__heading">Join the Conversation</h2>
          <p className="rsvp__text">
            We're convening a small, engaged audience of researchers, practitioners, and thinkers working at this intersection.
          </p>
          <a href={rsvpUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            Register for May 21, 2026
          </a>
          <p className="rsvp__note">
            Registration is free. Space is limited to ensure meaningful participation.
          </p>
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

export default Home;
