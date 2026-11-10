
function Countdown({ timeLeft }) {
  return (
    <section className="countdown-section">
      <span className="eyebrow">SAVE THE DATE</span>
      <h2>Counting Down to Forever</h2>

      <div className="countdown-grid">
        {[
          ["days", "Days"],
          ["hours", "Hours"],
          ["minutes", "Minutes"],
          ["seconds", "Seconds"],
        ].map(([key, label]) => (
          <div className="countdown-item" key={key}>
            <strong>
              {String(timeLeft[key] ?? 0).padStart(2, "0")}
            </strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <p>10 January 2027</p>
    </section>
  );
}

export default Countdown;
