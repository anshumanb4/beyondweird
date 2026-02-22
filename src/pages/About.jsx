import { Link } from 'react-router-dom';
import DecoCircles from '../DecoCircles';

function About() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">Beyond WEIRD</Link>
          <div className="nav__links">
            <Link to="/about">Mission</Link>
            <Link to="/reading-list">Reading List</Link>
            <a href="https://tally.so/r/w84BDk" className="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="about-hero">
        <DecoCircles className="deco-rings--hero-right" />
        <div className="container">
          <h1 className="about-hero__title">Why This Has to Exist</h1>
          <p className="about-hero__subtitle">
            AI is already shaping governance, education, and policy. The question is whose logic it reasons with.
          </p>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="section">
        <div className="container">
          <div className="mission">
            <h2 className="mission__heading">The narrow logic of current AI</h2>
            <div className="mission__content">
              <p>
                AI is being incorporated into nearly every part of our lives at a speed that outpaces our ability to ask the right questions. It can reason at previously unheard-of levels. But the kind of reasoning it performs represents only the smallest sliver of how human beings actually think.
              </p>
              <p>
                The core logic of most large language models prioritizes efficiency, cost-benefit analysis, and individual optimization. These are not neutral values. They come directly from WEIRD societies: Western, Educated, Industrialized, Rich, Democratic. For most everyday tasks, this goes unnoticed. But in fields like climate policy, land governance, and community health, the stakes of reasoning narrowly are enormous.
              </p>
              <p>
                Most of the work happening in AI ethics focuses on removing bias to reach some imagined neutral ground. But neutrality is itself a position. And chasing it means we miss the more interesting question entirely.
              </p>
              <div className="about__highlight">
                <p>
                  "The problem is not that these models are biased. It is that we are not taking advantage of how much we could bias them on purpose."
                </p>
                <p style={{ fontStyle: 'normal', fontSize: '0.875rem', marginTop: '0.75rem', color: 'var(--color-text-muted)' }}>
                  — <em>Designing Toward Epistemic Pluralism</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Opportunity */}
      <section className="section section--alt">
        <div className="container">
          <div className="mission">
            <h2 className="mission__heading">A different kind of intelligence</h2>
            <div className="mission__content">
              <p>
                Indigenous reasoning is not a variation on Western thought. It is structurally different. Where Western frameworks tend toward individual optimization and linear causality, Indigenous frameworks center relationality, land kinship, and responsibility to future generations. These are not softer values layered on top of logic. They are a different architecture of logic itself.
              </p>
              <p>
                If AI is going to help shape our future, narrowing its worldview to one way of thinking limits what we can even imagine. The models we build today will influence how decisions get made for decades. That is a reason to build them more carefully, and more ambitiously, than we have been.
              </p>
              <p>
                This is not about representing Indigenous communities in datasets, or adding diversity to training pipelines. It is about asking whether a model could reason in a fundamentally different way, and what it would take to build that ethically.
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

      {/* Section 3: The Approach */}
      <section className="section">
        <div className="container">
          <div className="mission">
            <h2 className="mission__heading">Governance before data</h2>
            <div className="mission__content">
              <p>
                The path toward epistemological plurality in AI has to start with relationships, not datasets. Any attempt to encode Indigenous reasoning without deep community involvement, consent, and ongoing accountability would reproduce exactly the extractive dynamic we are trying to move beyond.
              </p>
              <p>
                The approach we are working toward is scaffolding first: building the governance structures, consent protocols, and community review processes before any model training begins. That means working with Indigenous communities as co-designers, not informants. It means developing new evaluation methods that can measure relational coherence, not just factual accuracy. And it means being willing to move slowly.
              </p>
              <p>
                Beyond WEIRD is the first public step in that longer project. It is a space to convene the people whose thinking will shape what comes next: AI researchers, Indigenous knowledge-holders, philosophers, and policymakers who understand that the most important question in AI right now is not how fast we can move, but in which direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section rsvp">
        <div className="container">
          <h2 className="rsvp__heading">Join the conversation</h2>
          <p className="rsvp__text">
            Be part of the inaugural Beyond WEIRD conference on May 21, 2026.
          </p>
          <Link to="/" className="btn btn--outline" style={{ marginRight: '1rem' }}>
            Back to Conference
          </Link>
          <a href="https://tally.so/r/w84BDk" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
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

export default About;
