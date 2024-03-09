import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const CustorCursor = () => {
  return (
    <div>
      <AnimatedCursor
      innerSize={12}
      outerSize={30}
      color='29, 36, 202'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
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
        '.link'
      ]}
    />
    </div>
  )
}

export default CustorCursor
