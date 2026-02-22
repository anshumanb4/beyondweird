import { Link } from 'react-router-dom';
import DecoCircles from '../DecoCircles';

function Home() {
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
  const rsvpUrl = "https://tally.so/r/w84BDk";

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">Beyond WEIRD</Link>
          <div className="nav__links">
            <Link to="/about">Mission</Link>
            <Link to="/reading-list">Reading List</Link>
            <a href={rsvpUrl} className="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <DecoCircles className="deco-rings--hero-right" />
        <DecoCircles className="deco-rings--hero-left" />
        <div className="container">
          <div className="hero__content">
            <span className="hero__badge">Online Conference</span>
            <h1 className="hero__title">Beyond WEIRD</h1>
            <p className="hero__subtitle">
              A one-day convening exploring, philosophically and ethically, what it means to build AI systems that reason with Indigenous logic rather than Western defaults.
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
                But what if we stopped trying to "de-bias" AI and instead asked what it would mean to build systems that reason through entirely different logics?
              </p>
              <p className="about__text">
                Indigenous reasoning offers something structurally different: relationality, land kinship, seven-generation thinking. These are not just "alternative values" to layer onto existing systems. They represent different architectures of thought.
              </p>
            </div>
            <div>
              <p className="about__text">
                This conference brings together AI researchers, Indigenous scholars, and philosophers to explore what epistemological pluralism could look like in practice, with a particular focus on fields like sustainability and policy where relational thinking matters most.
              </p>
              <div className="about__highlight">
                <p>
                  "It appals us that the West can desire, extract and claim ownership of our ways of knowing, our imagery, the things we create and produce, and then simultaneously reject the people who created and developed those ideas."
                </p>
                <p style={{ fontStyle: 'normal', fontSize: '0.875rem', marginTop: '0.75rem', color: 'var(--color-text-muted)' }}>
                  — Linda Tuhiwai Smith, <em>Decolonizing Methodologies</em>
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
            A single day designed for depth over breadth, with structured conversations that allow ideas to surface and collide.
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

      {/* Sponsors Section */}
      <section className="section section--alt" id="sponsors">
        <div className="container">
          <h2 className="sponsors__heading">Confirmed Sponsors</h2>
          <div className="sponsors__grid">
            <div className="sponsor-card">
              <a href="https://terra.do" target="_blank" rel="noopener noreferrer" className="sponsor-card__logo">
                <img src="/terralogo.png" alt="Terra.do" className="sponsor-card__img" />
              </a>
              <p className="sponsor-card__stat">5,000+ fellows across 86 countries</p>
              <p className="sponsor-card__description">
                Terra.do is a climate learning and careers platform offering courses, fellowships, and a global community built around the world's top climate experts. Their programs help professionals across every field find their place in the climate transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section rsvp" id="register">
        <DecoCircles className="deco-rings--section-right" />
        <div className="container">
          <h2 className="rsvp__heading">Join the Conversation</h2>
          <p className="rsvp__text">
            We're convening a small, engaged audience of researchers, practitioners, and thinkers working at this intersection. Registration is free. Space is limited.
          </p>
          <iframe
            data-tally-src="https://tally.so/embed/w84BDk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="284"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Beyond WEIRD Registration"
            className="rsvp__form"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer__text">
            Beyond WEIRD 2026 · <Link to="/about">Mission</Link> · <Link to="/reading-list">Reading List</Link> · Questions? <a href="mailto:hello@beyondweird.org">hello@beyondweird.org</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
