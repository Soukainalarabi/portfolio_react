import React from 'react';
import Typed from 'typed.js';

export default function TypedComponents() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Bonjour    !</i> C\'est  Moi', 'Soukaina Larabi </br> Developpeuse Front-End </br>Parcourez mon portfolio pour </br> en savoir plus sur mes compétences </br> et projets.'],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="appTyped">
      <span ref={el} />
    </div>
  );
}