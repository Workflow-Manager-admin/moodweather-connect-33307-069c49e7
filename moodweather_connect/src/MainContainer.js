import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * MainContainer for MoodWeather Connect.
 * 
 * Renders a vertically stacked interface with:
 * - City input at the top
 * - Mood dropdown (Happy, Sad, Tired, Anxious, Excited)
 * - Submit button ("Check Weather & Mood")
 * - Area for weather info (to be populated later)
 * 
 * Uses uplifting primary, secondary, and accent colors:
 *   --primary:   #4A90E2
 *   --secondary: #F5A623
 *   --accent:    #7ED957
 */
function MainContainer() {
  // Color palette as inline CSS variables, later may be moved to CSS file.
  const theme = {
    '--mw-primary': '#4A90E2',
    '--mw-secondary': '#F5A623',
    '--mw-accent': '#7ED957',
  };

  // React state for the city input and mood dropdown
  const [city, setCity] = useState('');
  const [mood, setMood] = useState('');

  // Handlers that update state on field change
  // These handlers ensure the components are controlled
  // and accessible for further logic

  // PUBLIC_INTERFACE
  /**
   * Handles input changes for city.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // PUBLIC_INTERFACE
  /**
   * Handles selection changes for mood.
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  // Input, dropdown, and button styles tailored to palette and accessibility.
  // These can be refactored into a CSS file/class if reused elsewhere.
  return (
    <div
      className="mw-main-container"
      style={{
        ...theme,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 0 48px 0",
        background: "linear-gradient(180deg, var(--mw-primary) 0%, var(--mw-secondary) 100%)",
        minHeight: "80vh",
        borderRadius: "14px",
        margin: "48px auto",
        maxWidth: "375px",
        boxShadow: "0 3px 20px 0 rgba(74, 144, 226, 0.15)"
      }}
    >
      <form
        className="mw-form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          width: "100%",
          maxWidth: "315px",
        }}
        autoComplete="off"
        onSubmit={e => e.preventDefault()} // Logic to be added
      >
        <label htmlFor="city-input" style={{
          fontWeight: 500,
          color: "white",
          fontSize: "1.02rem",
          letterSpacing: "0.01em"
        }}>
          City
        </label>
        <input
          id="city-input"
          name="city"
          type="text"
          placeholder="Enter your city..."
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "1.5px solid var(--mw-accent)",
            fontSize: "1rem",
            outline: "none",
            marginBottom: "0",
            color: "#313131",
            background: "rgba(255,255,255,0.96)",
            fontWeight: 400
          }}
          aria-label="Enter city"
          autoComplete="off"
          value={city}
          onChange={handleCityChange}
          disabled={false}
        />

        <label htmlFor="mood-dropdown" style={{
          fontWeight: 500,
          color: "white",
          fontSize: "1.02rem"
        }}>
          How are you feeling?
        </label>
        <select
          id="mood-dropdown"
          name="mood"
          aria-label="Select your mood"
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "1.5px solid var(--mw-secondary)",
            background: "rgba(255,255,255,0.98)",
            color: "#313131",
            fontWeight: 500,
            fontSize: "1rem",
            marginBottom: "0"
          }}
          value={mood}
          onChange={handleMoodChange}
          disabled={false}
        >
          <option value="" disabled>
            Select your mood
          </option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Tired">Tired</option>
          <option value="Anxious">Anxious</option>
          <option value="Excited">Excited</option>
        </select>

        <button
          className="mw-submit-btn"
          type="submit"
          style={{
            background: "var(--mw-accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.12rem",
            padding: "12px 0",
            border: "none",
            borderRadius: "6px",
            marginTop: "4px",
            cursor: "pointer",
            boxShadow: "0 1px 4px 0 rgba(73, 210, 87, 0.05)",
            transition: "background 0.19s"
          }}
          disabled={false}
        >
          Check Weather &amp; Mood
        </button>
      </form>

      <div
        className="mw-weather-display"
        style={{
          marginTop: "34px",
          width: "100%",
          minHeight: "92px",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.83)",
          color: "var(--mw-primary)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          fontSize: "1.15rem",
          letterSpacing: "0.01em",
          boxShadow: "0 1px 8px 0 rgba(74, 144, 226, 0.04)"
        }}
      >
        {/* Weather data and mood info will display here */}
        <span style={{
          color: "var(--mw-secondary)",
          opacity: 0.75,
          fontSize: "1.02rem",
        }}>
          Weather information will appear here.
        </span>
      </div>
    </div>
  );
}

export default MainContainer;
