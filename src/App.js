import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  // KODUNUZ BURAYA GELECEK
  const [blurLevel, setBlurLevel] = useState(0);

  const handleBlurChange = (event) => {
    setBlurLevel(event.target.value);
  };
  return (
    <div>
      <img
        src={`${BASE_IMG_URL}?blur=${blurLevel}`}
        alt="Blurred"
        style={{ filter: blurLevel === "0" ? "none" : `blur(${blurLevel}px)` }}
      />
      <input
        type="range"
        min="0"
        max="10"
        value={blurLevel}
        onChange={handleBlurChange}
      />
    </div>
  );
};

export default App;
