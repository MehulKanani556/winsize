import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [unit, setUnit] = React.useState('pixels'); // State for selected unit
  const [isDarkMode, setIsDarkMode] = React.useState(false); // State for theme

  const DPI = 96; // Adjust this value based on your screen's DPI
  const widthInInches = screenSize.width / DPI;
  const heightInInches = screenSize.height / DPI;
  const widthInCm = widthInInches * 2.54;
  const heightInCm = heightInInches * 2.54;
  const widthInMm = widthInInches * 25.4;
  const heightInMm = heightInInches * 25.4;

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <button onClick={toggleTheme} style={{ marginBottom: '10px' }}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Select Unit:</p>
        <select value={unit} onChange={handleUnitChange}>
          <option value="pixels">Pixels</option>
          <option value="cm">Centimeters</option>
          <option value="mm">Millimeters</option>
        </select>
      </div>

      {unit === 'pixels' && (
        <p>Screen Size: {screenSize.width} x {screenSize.height} pixels</p>
      )}
      {unit === 'cm' && (
        <p>Screen Size: {widthInCm.toFixed(2)} cm x {heightInCm.toFixed(2)} cm</p>
      )}
      {unit === 'mm' && (
        <p>Screen Size: {widthInMm.toFixed(2)} mm x {heightInMm.toFixed(2)} mm</p>
      )}
      {/* <CURRENT_CURSOR_POSITION> */}
    </div>
  );
}

export default App;
