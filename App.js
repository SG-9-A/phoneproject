import Sprite from "./src/components/object-graphics/Sprite";
import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC } from "./src/components/object-graphics/Sprite";

function App() {
  const [spriteSheetImage, setSpriteSheetImage] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, []);

  if (!spriteSheetImage) {
    return null;
  }

  return (
    <div>
      <Sprite image={spriteSheetImage} frameCoord={"1x0"} />
      <Sprite image={spriteSheetImage} frameCoord={"0x2"} />
      <Sprite image={spriteSheetImage} frameCoord={"0x3"} />
    </div>
  );
}

export default App;