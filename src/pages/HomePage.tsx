import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage(): JSX.Element {
  return (
    <>
      <div>
        <p>Hi, I'm John Patterson, a Software Engineer.</p>
        <p>
          Thanks for coming to my little corner of the Internet. If you are looking to
          employ me, check out my <Link to="/resume">resume</Link> or maybe my <Link to="/works">portfolio</Link>.
          If you just want to learn a little bit more about me, you can look at my <Link to="/about">about</Link> page.
        </p>
        <p>
          If you're interested in this website, it was made using the following:
          <ol>
            <li>React</li>
            <li>TypeScript</li>
            <li>GitHub Pages</li>
          </ol>
          You can see the source code <a href="https://github.com/john-patterson/john-patterson.github.io">on GitHub</a>.
        </p>
      </div>
    </>
  );
}
