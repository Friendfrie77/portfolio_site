import React, { createRef, useEffect, useRef } from "react"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const ns = `hero`

const sampleData = [
  {
    id: 1,
    text: "1 some text some text some test",
    image: {
      sourceUrl: "https://placeimg.com/1280/768/nature"
    }
  },
  {
    id: 2,
    text: "2 some text some text some test",
    image: {
      sourceUrl: "https://placeimg.com/1280/768/arch"
    }
  },
  {
    id: 3,
    text: "3 some text some text some test",
    image: {
      sourceUrl: "https://placeimg.com/1280/768/tech"
    }
  }
]

const Hero = () => {
  const panelRefs = useRef([])
  panelRefs.current = []

  const numPanels = sampleData.length

  if (panelRefs.current.length !== numPanels) {
    panelRefs.current = Array(numPanels)
      .fill()
      .map((_, i) => {
        return panelRefs.current[i] || createRef()
      })
  }

  useEffect(() => {
    panelRefs.current.forEach((panelRef, index) => {
      // GSAPs default 'end' value.
      let endValue = "bottom top"
      // Unpin the last item right away so it doesn't cover the non-hero content below it.
      // Still apply scrollTrigger to it so it will 'layer' over the prev image.
      if (index === panelRefs.current.length - 1) endValue = "top top"

      if (panelRef.current) {
        ScrollTrigger.create({
          trigger: panelRef.current,
          scrub: true,
          start: "top top",
          end: endValue,
          markers: true,
          pin: true, // Causes a break on certain pages in another project (difficult to repro here)
          pinSpacing: false
        })
      }
    })
  })

  return (
    <div className={`${ns}`}>
      <div className={`${ns}__container`}>
        {sampleData.map((panel, index) => {
          const { id, image, text } = panel

          return (
            <div
              className={`${ns}__panel`}
              key={id}
              ref={panelRefs.current[index]}
            >
              <div className={`${ns}__image`}>
                <img src={image.sourceUrl} alt={``} />
              </div>
              <div className={`${ns}__text`}>{text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
