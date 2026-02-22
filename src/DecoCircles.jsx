export default function DecoCircles({ className = '' }) {
  return (
    <div className={`deco-rings ${className}`} aria-hidden="true">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="62"  stroke="var(--color-teal)" strokeWidth="5"/>
        <circle cx="250" cy="250" r="118" stroke="var(--color-teal)" strokeWidth="3.5" opacity="0.55"/>
        <circle cx="250" cy="250" r="182" stroke="var(--color-accent-light)" strokeWidth="2.5" opacity="0.45"/>
        <circle cx="250" cy="250" r="252" stroke="var(--color-teal)" strokeWidth="2" opacity="0.25"/>
        <circle cx="250" cy="250" r="328" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.15"/>
      </svg>
    </div>
  );
}
