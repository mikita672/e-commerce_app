import React from "react";
import PageTitle from "./PageTitle";

export default function About() {
  const h3Style = "text-lg font-semibold text-primary dark:text-light mb-2";
  const pStyle = "text-gray-600 dark:text-lighter";

  return (
    <div className="max-w-6xl min-h-213 mx-auto px-6 py-8 font-primary">
      <PageTitle title="About" />
      <p className="leading-6 mb-8 text-gray-600 dark:text-lighter">
        <span className="text-lg font-semibold text-primary dark:text-light">
          Meowterest
        </span>{" "}
        is an e-commerce application project created to learn react and
        springboot.{" "}
        <span className="text-lg font-semibold text-primary dark:text-light">
          Made by Mikita Dzeviatau
        </span>
        , git: {""}
        <a href="https://github.com/mikita672" className="underline">
          mikita672
        </a>
      </p>

      <h2 className="text-2xl leading-8 font-bold text-primary dark:text-light mb-6">
        Interesting facts about cats
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className={h3Style}>Cats are cute!</h3>
          <p className={pStyle}>😽😽😽</p>
        </div>

        <div>
          <h3 className={h3Style}>The Healing Power of Purrs</h3>
          <p className={pStyle}>
            While we often think of purring as a sign of contentment, it also
            serves a therapeutic purpose. A cat’s purr vibrates at a frequency
            of 25 to 150 Hertz, a range known to promote tissue regeneration,
            reduce pain and swelling, and even improve bone density.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>They Are "Sweet-Blind"</h3>
          <p className={pStyle}>
            If you’ve ever wondered why your cat ignores that piece of cake you
            dropped, it’s because they physically cannot taste it. Cats are one
            of the few mammals that lack the taste receptors for sweetness. As
            obligate carnivores, their bodies are designed purely for processing
            meat, so they have no evolutionary need to detect sugar.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Meowing is a Human-Only Language</h3>
          <p className={pStyle}>
            Kittens meow to their mothers to signal they are hungry or cold, but
            adult cats rarely meow at each other. They use scent, body language,
            and hissing to communicate with other felines. The "meow" was
            developed almost exclusively as a tool to communicate with humans to
            get our attention.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Gravity-Defying Jumps</h3>
          <p className={pStyle}>
            Domestic cats are incredible athletes capable of jumping up to six
            times their own height in a single bound. This is thanks to their
            powerful back leg muscles and a flexible spine that acts like a
            spring, allowing them to reach high perches to survey their
            territory or escape predators.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Their Whiskers Are Navigation Tools</h3>
          <p className={pStyle}>
            Whiskers (vibrissae) are not just facial hair; they are deeply
            embedded, highly sensitive touch receptors. They are roughly as wide
            as the cat's body, allowing the cat to judge whether they can fit
            through a narrow opening without needing to squeeze through first.
          </p>
        </div>
      </div>
    </div>
  );
}
