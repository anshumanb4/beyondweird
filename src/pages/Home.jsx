import { Link } from 'react-router-dom';
import DecoCircles from '../DecoCircles';

function Home() {
  const formatCards = [
    { title: "3 Panels + Keynote" },
    { title: "Breakout Discussions" },
    { title: "Intimate Audience", text: "Capped at 150 participants to keep the conversation direct and personal." }
  ];

  const scheduleItems = [
    { type: 'session', time: '10:30 – 10:40am PT', title: 'Opening' },
    { type: 'session', time: '10:40 – 11:40am PT', title: 'Panel 1: What Counts as Knowing', desc: 'Featuring Brett Isaac (Navajo Power), Mack Scott III (Brown University), and Anshuman Bapna (Terra.do), with breakout discussions' },
    { type: 'break', time: '11:40am – 12:00pm PT', title: 'Break' },
    { type: 'session', time: '12:00 – 1:00pm PT', title: 'Panel 2: What AI Assumes and What It Cannot See', desc: 'A structured Q&A featuring Nava Haghighi and Deibi Sibrian, moderated by Amanda Joy Ravenhill' },
    { type: 'break', time: '1:00 – 1:10pm PT', title: 'Break' },
    { type: 'session', time: '1:10 – 2:10pm PT', title: 'Panel 3: Sovereignty, Consent, and the Ethics of Representation', desc: 'Featuring Maui Hudson and Belén Páez, with breakout discussions' },
    { type: 'session', time: '2:10 – 2:25pm PT', title: 'Keynote: Toward Abundance', desc: 'Jason Edward Lewis (Concordia University)' },
    { type: 'session', time: '2:25 – 2:45pm PT', title: 'Closing Synthesis' },
  ];

  const speakers = [
    {
      initials: 'BI',
      image: '/speakers/brett-isaac.jpg',
      name: 'Brett Isaac',
      role: 'Panel 1: What Counts as Knowing',
      affiliation: 'Navajo Power',
      bio: 'Brett Isaac is a co-founder of Navajo Power, where he works to bring utility-scale clean energy to Native lands. His focus is on energy projects owned by and accountable to Indigenous communities, turning local natural resources into lasting economic self-determination and energy independence.',
    },
    {
      initials: 'MS',
      image: '/speakers/mack-scott.jpg',
      name: 'Mack H. Scott III',
      role: 'Panel 1: What Counts as Knowing',
      affiliation: 'Brown University',
      bio: 'Mack H. Scott III is an enrolled member of the Narragansett Indian Tribe (Nation), historian, educator, and public scholar specializing in Native American and Indigenous histories, with a particular focus on the Dawnland/Narragansett country and the intersections of indigeneity, race, memory, and futurity. He currently serves as Director of Undergraduate Studies for the Native American and Indigenous Studies Initiative and as a Visiting Assistant Professor at the Ruth J. Simmons Center for the Study of Slavery and Justice at Brown University.',
    },
    {
      initials: 'AB',
      image: '/speakers/anshuman-bapna.jpg',
      name: 'Anshuman Bapna',
      role: 'Panel 1: What Counts as Knowing',
      affiliation: 'Terra.do',
      bio: 'Anshuman Bapna is the founder of Terra.do, a climate learning and careers platform building a global community around the world’s top climate experts.',
    },
    {
      initials: 'NH',
      image: '/speakers/nava-haghighi.jpg',
      name: 'Nava Haghighi',
      role: 'Panel 2: What AI Assumes and What It Cannot See',
      affiliation: 'Stanford University',
      bio: 'Nava Haghighi has a PhD in Computer Science from Stanford, working at the intersection of human-computer interaction and critical technical design. Her research examines the ontological assumptions built into large language models and how design can surface and expand them.',
      linkedin: 'https://www.linkedin.com/in/nava-haghighi/',
    },
    {
      initials: 'DS',
      image: '/speakers/deibi-sibrian.jpg',
      name: 'Deibi Sibrian',
      role: 'Panel 2: What AI Assumes and What It Cannot See',
      affiliation: 'UC Berkeley',
      bio: 'Deibi Sibrian is a PhD candidate in the Department of Environmental Science, Policy, and Management (ESPM) at UC Berkeley, where he coined the “Cryptonocene,” a framework for studying the socio-environmental and health impacts of cryptocurrencies and AI. As an NSF Digital Transformation Fellow, he leads the Digital Ecologies Working Group and studies the “electric plantations” powering crypto mining in El Salvador, using Bitcoin City and Zacatillo Island as case studies.',
      linkedin: 'https://www.linkedin.com/in/deibi-sibrian-531a2a4a',
    },
    {
      initials: 'AR',
      image: '/speakers/amanda-ravenhill.jpg',
      name: 'Amanda Joy Ravenhill',
      role: 'Moderator, Panel 2: What AI Assumes and What It Cannot See',
      affiliation: 'Project Drawdown · Project TMRW',
      bio: 'Amanda Joy Ravenhill is co-founder and founding executive director of Project Drawdown and a former executive director of the Buckminster Fuller Institute. She is co-founder and Chief Environment Officer of Project TMRW, which uses AI to assess climate risk and coordinate ecosystem restoration.',
      linkedin: 'https://www.linkedin.com/in/amandaravenhill/',
    },
    {
      initials: 'MH',
      image: '/speakers/maui-hudson.jpg',
      name: 'Maui Hudson',
      role: 'Panel 3: Sovereignty, Consent, and the Ethics of Representation',
      affiliation: 'University of Waikato · Global Indigenous Data Alliance',
      bio: 'Maui Hudson (Whakatōhea, Ngā Ruahine, Te Māhurehure) is an Associate Professor at the University of Waikato and Director of the Te Kotahi Research Institute. He co-authored the CARE Principles for Indigenous Data Governance and co-directs Local Contexts, working on how Indigenous data sovereignty can guide the ethical use of AI.',
      linkedin: 'https://www.linkedin.com/in/mauihudson/',
    },
    {
      initials: 'BP',
      image: '/speakers/belen-paez.jpg',
      name: 'Belén Páez',
      role: 'Panel 3: Sovereignty, Consent, and the Ethics of Representation',
      affiliation: 'Fundación Pachamama · Amazon Sacred Headwaters Initiative',
      bio: 'Belén Páez is president of Fundación Pachamama and general secretary of the Amazon Sacred Headwaters Initiative, with nearly 30 years of work protecting Indigenous territories and rights in the Ecuadorian Amazon.',
    },
    {
      initials: 'JL',
      image: '/speakers/jason-edward-lewis.jpg',
      name: 'Jason Edward Lewis',
      role: 'Keynote: Toward Abundance',
      affiliation: 'Concordia University · Abundant Intelligences',
      bio: 'Jason Edward Lewis is Professor of Computation Arts and University Research Chair in Computational Media and the Indigenous Future Imaginary at Concordia University. He co-directs Abundant Intelligences and the Indigenous Futures Research Centre, and edited the widely cited Indigenous Protocol and Artificial Intelligence position paper.',
      linkedin: 'https://ca.linkedin.com/in/jason-edward-lewis',
    },
  ];

  const rsvpUrl = "https://luma.com/1blyy2mm";

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
                <span>September 16, 2026</span>
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
                  Linda Tuhiwai Smith, <em>Decolonizing Methodologies</em>
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
          <div className="format__grid">
            {formatCards.map((card, index) => (
              <div className="format__card" key={index}>
                <div className="format__card-number">{index + 1}</div>
                <h3 className="format__card-title">{card.title}</h3>
                {card.text && <p className="format__card-text">{card.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section section--alt" id="schedule">
        <div className="container">
          <h2 className="schedule__heading">Schedule</h2>
          <p className="schedule__intro">
            September 16, 2026 · 10:30am – 2:45pm Pacific Time
          </p>
          <div className="schedule__list">
            {scheduleItems.map((item, index) => (
              <div
                className={item.type === 'break' ? 'schedule__item schedule__item--break' : 'schedule__item'}
                key={index}
              >
                <div className="schedule__time">{item.time}</div>
                <div className="schedule__content">
                  <p className="schedule__title">{item.title}</p>
                  {item.desc && <p className="schedule__desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className="schedule__note">
            Times listed in Pacific. A calendar invite with your local time zone will be sent after registration.
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="section" id="speakers">
        <div className="container">
          <h2 className="speakers__heading">Speakers</h2>
          <p className="speakers__subtitle">
            Confirmed so far, with more to be announced
          </p>
          <div className="speakers__grid">
            {speakers.map((speaker, index) => (
              <div className="speaker" key={index}>
                <div className="speaker__top">
                  <div className="speaker__avatar">
                    {speaker.initials}
                    {speaker.image && (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="speaker__avatar-img"
                        onError={(e) => e.currentTarget.remove()}
                      />
                    )}
                  </div>
                  <div className="speaker__info">
                    <p className="speaker__name">{speaker.name}</p>
                    <p className="speaker__role">{speaker.role}</p>
                    <p className="speaker__affiliation">{speaker.affiliation}</p>
                  </div>
                </div>
                <p className="speaker__bio">{speaker.bio}</p>
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    className="speaker__linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section section--alt" id="sponsors">
        <div className="container">
          <h2 className="sponsors__heading">Sponsor</h2>
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
            src="https://luma.com/embed/event/evt-4DJCKb7bMgAHHtr/simple"
            loading="lazy"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Beyond WEIRD Registration"
            className="rsvp__form"
          />
        </div>
      </section>

      {/* Big Registration CTA */}
      <section className="register-cta" id="register-cta">
        <DecoCircles className="deco-rings--section-right" />
        <div className="container">
          <h2 className="register-cta__heading">Reserve Your Seat</h2>
          <p className="register-cta__text">
            Registration is free and space is limited. Join us on September 16, 2026.
          </p>
          <a href={rsvpUrl} className="btn btn--primary register-cta__btn" target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
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
