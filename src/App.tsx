// App.tsx

import  { useState } from "react";
import { Header } from "./App/Components/Header/Header";

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
