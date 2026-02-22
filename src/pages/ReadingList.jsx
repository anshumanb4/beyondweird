import { Link } from 'react-router-dom';
import DecoCircles from '../DecoCircles';

const sections = [
  {
    title: "The WEIRD Problem",
    intro: null,
    entries: [
      {
        citation: 'Henrich, J., Heine, S.J., & Norenzayan, A. (2010). \u201CThe weirdest people in the world?\u201D \u00A0Behavioral and Brain Sciences, 33(2-3), 61\u201383.',
        annotation: "The paper that coined the term. Demonstrates that the vast majority of behavioral science research draws from Western, Educated, Industrialized, Rich, and Democratic populations, and that these populations are statistical outliers, not the norm."
      }
    ]
  },
  {
    title: "Indigenous Epistemologies",
    intro: null,
    entries: [
      {
        citation: "Smith, L.T. (2021). Decolonizing Methodologies: Research and Indigenous Peoples. 3rd edition. Zed Books.",
        italic: "Decolonizing Methodologies: Research and Indigenous Peoples",
        annotation: "The foundational text. Originally published in 1999, this book examines how Western research methods are embedded in colonial frameworks and proposes decolonized alternatives rooted in Indigenous ways of knowing."
      },
      {
        citation: 'Blackstock, C. (2007). \u201CThe Breath of Life versus the Embodiment of Life: Indigenous Knowledge and Western Research.\u201D World Indigenous Nations Higher Education Consortium Journal.',
        annotation: "A concise articulation of how Indigenous epistemologies differ structurally from Western ones."
      },
      {
        citation: 'Ermine, W. (2007). \u201CThe Ethical Space of Engagement.\u201D Indigenous Law Journal, 6(1), 193\u2013203.',
        annotation: null
      },
      {
        citation: "TallBear, K. (2013). Native American DNA: Tribal Belonging and the False Promise of Genetic Science. University of Minnesota Press.",
        annotation: "Examines how Western technoscience has been used to define, categorize, and sometimes erase Indigenous identity."
      }
    ]
  },
  {
    title: "Indigenous Knowledge and AI",
    intro: "These are the works most directly relevant to the conference\u2019s central question: what happens when Indigenous epistemologies and artificial intelligence meet?",
    entries: [
      {
        citation: "Lewis, J.E. et al. (2020). Indigenous Protocol and Artificial Intelligence Position Paper. The Initiative for Indigenous Futures and the Canadian Institute for Advanced Research (CIFAR).",
        annotation: null
      },
      {
        citation: 'Lewis, J.E., Arista, N., Pechawis, A., & Kite, S. (2018). \u201CMaking Kin with the Machines.\u201D Journal of Design and Science, MIT Press.',
        annotation: "Proposes drawing on Indigenous kinship protocols to reimagine the foundations on which we design AI systems."
      },
      {
        citation: 'Abdilla, A., Kelleher, M., Shaw, R., & Poirier, B. (2017). \u201CIndigenous Knowledge Systems and Pattern Thinking: An Expanded Analysis of the First Indigenous Robotics Prototype Workshop.\u201D',
        annotation: "Examines how Aboriginal practices of articulating and transmitting cultural knowledge might inform pattern recognition research, an early experiment in bringing Indigenous epistemology into direct contact with AI."
      }
    ]
  },
  {
    title: "Data Sovereignty and Knowledge Governance",
    intro: null,
    entries: [
      {
        citation: 'Carroll, S.R., Garba, I., Figueroa-Rodr\u00EDguez, O.L., et al. (2020). \u201CThe CARE Principles for Indigenous Data Governance.\u201D Data Science Journal, 19(43), 1\u201312.',
        annotation: "The CARE framework (Collective Benefit, Authority to Control, Responsibility, Ethics) is now the standard reference for Indigenous data governance."
      },
      {
        citation: 'Anderson, J., & Christen, K. (2013). \u201CChuck a Copyright on it\u201D: Dilemmas of Digital Return and the Possibilities for Traditional Knowledge Licenses and Labels. Museum Anthropology Review, 7(1-2), 106\u2013126.',
        annotation: "Introduces the TK Labels, a system of digital markers that allow Indigenous communities to assert governance over their cultural heritage in digital environments."
      },
      {
        citation: "Kukutai, T., & Taylor, J. (Eds.). (2016). Indigenous Data Sovereignty: Toward an Agenda. ANU Press.",
        annotation: "A foundational collection on the concept of Indigenous data sovereignty."
      },
      {
        citation: "First Nations Information Governance Centre. (2014). Ownership, Control, Access, and Possession (OCAP): The Path to First Nations Information Governance.",
        annotation: "The OCAP principles, developed by and for First Nations in Canada, assert that First Nations control data collection processes in their communities and own, protect, and control how their information is used."
      }
    ]
  },
  {
    title: "Systems Thinking and Leverage",
    intro: "The Beyond WEIRD project draws on systems thinking to argue that shifting AI\u2019s epistemological foundations is a high-leverage intervention.",
    entries: [
      {
        citation: 'Meadows, D. (1999). \u201CLeverage Points: Places to Intervene in a System.\u201D The Sustainability Institute.',
        annotation: "Meadows\u2019 classic essay argues that the most powerful way to change a system is to shift its underlying paradigms."
      },
      {
        citation: "Meadows, D. (2008). Thinking in Systems: A Primer. Edited by Diana Wright. Chelsea Green Publishing.",
        annotation: "The accessible introduction to systems thinking."
      }
    ]
  },
  {
    title: "Further Exploration",
    intro: "For those who want to go deeper into specific threads.",
    entries: [
      {
        citation: 'Whyte, K.P. (2013). \u201COn the Role of Traditional Ecological Knowledge as a Collaborative Concept: A Philosophical Study.\u201D Ecological Processes, 2(7).',
        annotation: null
      },
      {
        citation: 'Tuck, E., & Yang, K.W. (2012). \u201CDecolonization Is Not a Metaphor.\u201D Decolonization: Indigeneity, Education & Society, 1(1), 1\u201340.',
        annotation: "A reminder that decolonization has specific meanings and should not be reduced to a metaphor for other kinds of social justice work."
      },
      {
        citation: "Harding, S. (Ed.). (2011). The Postcolonial Science and Technology Studies Reader. Duke University Press.",
        annotation: "A wide-ranging collection on how science and technology are shaped by colonial relationships."
      },
      {
        citation: "Intergovernmental Panel on Climate Change. (2022). Climate Change 2022: Impacts, Adaptation and Vulnerability. Especially Chapter 18: Climate Resilient Development Pathways.",
        annotation: "Includes explicit recognition that Indigenous peoples\u2019 knowledge is essential for climate adaptation."
      }
    ]
  }
];

function ReadingList() {
  return (
    <>
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

      <section className="about-hero">
        <DecoCircles className="deco-rings--hero-right" />
        <div className="container">
          <h1 className="about-hero__title">Reading List</h1>
          <p className="about-hero__subtitle">
            A set of readings at the intersection of Indigenous epistemologies, AI, and knowledge governance. This list reflects the intellectual foundations of the Beyond WEIRD project.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reading-list">
            {sections.map((section, si) => (
              <div className="reading-section" key={si}>
                <h2 className="reading-section__title">{section.title}</h2>
                {section.intro && (
                  <p className="reading-section__intro">{section.intro}</p>
                )}
                <ol className="reading-entries">
                  {section.entries.map((entry, ei) => (
                    <li className="reading-entry" key={ei}>
                      <p className="reading-entry__citation">{entry.citation}</p>
                      {entry.annotation && (
                        <p className="reading-entry__annotation">{entry.annotation}</p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}

            <p className="reading-list__footer">
              This list is a living document and will be updated as the project evolves. Suggestions are welcome — reach out at <a href="mailto:nevabpna@gmail.com">nevabpna@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>

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

export default ReadingList;
