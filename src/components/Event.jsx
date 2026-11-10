
function Event() {
  return (
    <section className="section event" id="event">
      <span className="eyebrow">JOIN OUR CELEBRATION</span>
      <h2>The Wedding Day</h2>

      <div className="event-grid">
        <article className="event-card">
          <span className="event-symbol">I</span>
          <h3>Akad Nikah</h3>
          <strong>09.00 WIB</strong>
          <p>Sunday, 10 January 2027</p>
          <p>
            Gedung Pernikahan<br />
            [Alamat lengkap]
          </p>
        </article>

        <article className="event-card">
          <span className="event-symbol">II</span>
          <h3>Wedding Reception</h3>
          <strong>11.00 – 14.00 WIB</strong>
          <p>Sunday, 10 January 2027</p>
          <p>
            Gedung Pernikahan<br />
            [Alamat lengkap]
          </p>
        </article>
      </div>

      <a
        href="https://maps.google.com/?q=Indonesia"
        target="_blank"
        rel="noreferrer"
        className="outline-button"
      >
        View Location ↗
      </a>
    </section>
  );
}

export default Event;
