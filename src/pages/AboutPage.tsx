import React from 'react';
import './AboutPage.css';

export function AboutPage(): JSX.Element {
  return (
    <>
      <p>Hey! My name is John. Here's what I look like, ish:</p>
      <img className="selfie" src="/assets/images/me.jpg"></img>
      <p>I’m a backend developer in Seattle, though I’m looking to relocate to The Netherlands. Compilers, functional programming languages, and data science excite me. I would also like to learn more about urban and transportation planning and how technology can be used to improve the urban landscape.</p>
      <p>My current pet project is a cocktail website I am working on along with my friends.</p>
      <p>Aside from software engineering, exercise fuels me. I help organize a run club in Seattle with ~20 or so recurring runners. Literature has been an interest of mine through my life and in 2019 I wrote 2 novel manuscripts. Editing them has been significantly slower. Finallly, I like studying languages. English is my native language and I know a bit of Spanish and German. Currently, I am studying Dutch.</p>

      <p><em>(Als u Nederlands met mij spreken wilt, dan <a href="mailto:john@statelesscoder.com">stuurt u mij een bericht!</a>)</em></p>
    </>
  );
}
