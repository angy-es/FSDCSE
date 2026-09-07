import react from "react";
import ICard from "./ICard";
function Gallery() {
  return (
    <CardGallery>
      <ICard name="Alice" />
      <ICard name="Bob" />
      <ICard name="Charlie" />
      <ICard name="David" />
    </CardGallery>
  );
}

export default Gallery;