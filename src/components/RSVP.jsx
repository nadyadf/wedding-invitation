
import { useState } from 'react';

function RSVP({ guestName }) {
  const [guest, setGuest] = useState(
    guestName === 'Tamu Undangan' ? '' : guestName
  );

  const [attendance, setAttendance] = useState('Hadir');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitRSVP = (e) => {
    e.preventDefault();

    if (!guest.trim()) return;

    setSubmitted(true);
  };

  return (
    <section className="section rsvp" id="rsvp">
      <span className="eyebrow">KINDLY RESPOND</span>
      <h2>Will You Join Us?</h2>
      <p>
        Kehadiran dan doa restu Anda merupakan
        kebahagiaan bagi kami.
      </p>

      {submitted ? (
        <div className="success-message">
          <span>✳</span>
          <h3>Thank You!</h3>
          <p>
            Konfirmasi Anda telah dicatat pada tampilan ini.
          </p>
        </div>
      ) : (
        <form className="rsvp-form" onSubmit={submitRSVP}>
          <label>Nama lengkap</label>
          <input
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            required
            placeholder="Nama Anda"
          />

          <label>Konfirmasi kehadiran</label>
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option>Hadir</option>
            <option>Tidak Hadir</option>
          </select>

          <label>Ucapan dan doa</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan ucapan untuk kedua mempelai..."
            rows={4}
          />

          <button className="primary-button" type="submit">
            Send Response ↗
          </button>
        </form>
      )}
    </section>
  );
}

export default RSVP;
