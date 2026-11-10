
import { useEffect, useState } from "react";
import "./App.css";
import fotoPasangan from './assets/foto-pasangan.jpg';
import fotoBagas from './assets/foto-bagas.jpg';
import fotoRosa from './assets/foto-rosa.jpg';

import Countdown from "./components/Countdown";
import Event from './components/Event';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Wishes from './components/Wishes';
import LoveStory from "./components/LoveStory";

const weddingDate = new Date("2027-01-10T09:00:00+07:00");

const guestName = (
  new URLSearchParams(window.location.search).get("to") || "Tamu Undangan"
)
  .toLowerCase()
  .replace(/\b\w/g, (char) => char.toUpperCase());

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [attendance, setAttendance] = useState("Hadir");
  const [guest, setGuest] = useState(guestName);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const distance = weddingDate.getTime() - Date.now();

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / 86400000),
        hours: Math.floor((distance / 3600000) % 24),
        minutes: Math.floor((distance / 60000) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const submitRSVP = (e) => {
    e.preventDefault();

    if (!guest.trim()) return;

    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* OPENING */}
      <div className={`opening ${isOpened ? "opening-hidden" : ""}`}>
        <div className="opening-content">
          <span className="eyebrow">THE WEDDING OF</span>

          <h1>
            Bagas <span>&</span> Rosa
          </h1>

          <div className="opening-line" />

          <p>10 JANUARY 2027</p>

          <div className="guest-greeting">
            <span>Dear,</span>
            <strong>{guestName}</strong>
          </div>

          <button
            className="primary-button"
            onClick={() => setIsOpened(true)}
          >
            Open Invitation <span>↗</span>
          </button>

          <small>YOU ARE CORDIALLY INVITED</small>
        </div>
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image">
          <img
            src={fotoPasangan}
            alt="Foto Bagas dan Rosa"
          />
        </div>

        <div className="hero-content">
          <span className="eyebrow">A NEW CHAPTER BEGINS</span>
          <h1>Bagas <span>&</span> Rosa</h1>
          <p>Sunday, 10 January 2027</p>
          <div className="scroll-indicator">SCROLL TO EXPLORE ↓</div>
        </div>
      </section>

      {/* GREETING */}
      <section className="section greeting" id="greeting">
        <span className="eyebrow">WITH LOVE AND GRATITUDE</span>
        <h2>A beautiful beginning<br />to forever.</h2>
        <p>
          Dengan penuh rasa syukur, kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir dan menjadi
          bagian dari hari istimewa kami.
        </p>
        <div className="decorative-divider">✳</div>
      </section>

      {/* COUPLE */}
      <section className="section couple" id="couple">
        <span className="eyebrow">THE HAPPY COUPLE</span>
        <h2>Meet the Couple</h2>

        <div className="couple-grid">
          <article className="person">
            <div className="person-photo">
              <img src={fotoBagas} alt="Bagas" />
            </div>
            <h3>Bagas</h3>
            <p>
              Putra dari Bapak [Nama Ayah]<br />
              & Ibu [Nama Ibu]
            </p>
          </article>

          <div className="couple-ampersand">&</div>

          <article className="person">
            <div className="person-photo">
              <img src={fotoRosa} alt="Rosa" />
            </div>
            <h3>Rosa</h3>
            <p>
              Putri dari Bapak [Nama Ayah]<br />
              & Ibu [Nama Ibu]
            </p>
          </article>
        </div>
      </section>

      <LoveStory />

      <Countdown timeLeft={timeLeft} />

      <Event />

      <Gallery />

      <RSVP guestName={guestName} />

      <Wishes />

      {/* GIFT */}
      <section className="section gift" id="gift">
        <span className="eyebrow">A TOKEN OF LOVE</span>
        <h2>Wedding Gift</h2>
        <p>
          Doa restu Anda merupakan hadiah terindah bagi kami.
          Namun, jika ingin memberikan tanda kasih:
        </p>
        <div className="gift-card">
          <span>BANK ACCOUNT</span>
          <h3>[Nama Bank]</h3>
          <strong>0000000000</strong>
          <p>Bagas / Rosa</p>
        </div>
      </section>

      {/* CLOSING */}
      <footer className="closing">
        <span className="eyebrow">WITH LOVE</span>
        <h2>Bagas <span>&</span> Rosa</h2>
        <p>Thank you for being part of our special day.</p>
        <div className="opening-line" />
        <small>10 JANUARY 2027 · FOREVER BEGINS</small>
      </footer>

      {/* FLOATING NAVIGATION */}
      {isOpened && (
        <nav className="floating-nav">
          {[
            ["home", "⌂", "Home"],
            ["couple", "♡", "Couple"],
            ["event", "▦", "Event"],
            ["gallery", "▧", "Gallery"],
            ["rsvp", "✉", "RSVP"],
          ].map(([id, icon, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              <span>{icon}</span>
              <small>{label}</small>
            </button>
          ))}
        </nav>
      )}
    </main>
  );
}

export default App;
