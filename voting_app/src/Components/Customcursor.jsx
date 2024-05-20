import React from 'react';
import AnimatedCursor from 'react-animated-cursor';


function Customcursor() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={24}
        outerSize={48}
        color="255, 255, 255"
        outerAlpha={0.25}
        innerScale={0.5}
        outerScale={1.5}
        trailingSpeed={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      
    </div>
  );
}

export default Customcursor;
