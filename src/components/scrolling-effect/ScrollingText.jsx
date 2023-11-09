import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scrolling.css";

function ScrollingText() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char, i) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const words = char.innerText.split(" ");
      char.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const wordSpans = char.querySelectorAll(".word");

      gsap.fromTo(
        wordSpans,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.5,
          stagger: 1,
          scrollTrigger: {
            trigger: char,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="changing-wrap">
      <p className="reveal-type" data-bg-color="gray" data-fg-color="#000">
        Забудьте про незручності в дорозі! <br />
        Тут є великий вибір товарів для автобудинку, які роблять кожну подорож
        комфортною та приємною.
      </p>
    </div>
  );
}

export default ScrollingText;
