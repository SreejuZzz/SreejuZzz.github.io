/* Reset & Base */
* {
  margin: 0; padding: 0; box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}
:root {
  --bg: #111; --text: #eee; --card: #1e1e1e;
  --btn-bg: #333; --btn-hover: #444;
}
.light {
  --bg: #fafafa; --text: #111; --card: #fff;
  --btn-bg: #ddd; --btn-hover: #ccc;
}

/* Layout */
main {
  text-align: center;
  padding: 2rem;
  z-index: 2;
  position: relative;
}
h1 { font-size: 2.5rem; margin-bottom: .5rem; }
.subtitle { margin-bottom: 1.5rem; font-size: 1.1rem; opacity: 0.8; }

.card {
  background: var(--card);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  max-width: 800px;
  margin: auto;
  transition: transform 0.2s;
}
.card:hover { transform: scale(1.02) rotateX(2deg) rotateY(2deg); }

pre {
  background: rgba(0,0,0,0.4);
  padding: 1rem;
  border-radius: 10px;
  overflow-x: auto;
  font-family: monospace;
  margin-bottom: 1rem;
}

/* Buttons */
.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
button, .btn {
  padding: .7rem 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: var(--btn-bg);
  color: var(--text);
  font-size: 1rem;
  transition: transform 0.2s, background 0.2s;
  text-decoration: none;
}
button:hover, .btn:hover {
  background: var(--btn-hover);
  transform: translateY(-2px) scale(1.05);
}

/* Theme Toggle */
.theme-toggle {
  position: absolute; top: 20px; right: 20px;
}
#themeButton {
  font-size: 1.3rem;
  background: var(--btn-bg);
  border-radius: 50%;
  width: 45px; height: 45px;
}

/* Toast */
#toast {
  position: fixed; bottom: 30px; left: 50%;
  transform: translateX(-50%);
  background: var(--btn-bg);
  color: var(--text);
  padding: .8rem 1.2rem;
  border-radius: 10px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
}
#toast.show {
  opacity: 1; transform: translateX(-50%) translateY(-10px);
}

/* Footer */
footer {
  margin-top: 2rem;
  opacity: 0.7;
}

/* Canvas Background */
#background {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0;
}

