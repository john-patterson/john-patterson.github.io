export function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__photo">
          <img src="/assets/images/me.jpg" alt="John Patterson" loading="lazy" />
        </div>
        <div className="about__body">
          <h2 className="section__title">About</h2>
          <p>
            Hey! I'm John — an engineering manager living in Amsterdam and working at Adyen. I
            made the move from Seattle to the Netherlands a while back, and these days I spend most
            of my time helping a team of engineers, PMs, and designers ship merchant-facing
            payments products.
          </p>
          <p>
            I started out as a backend developer and still enjoy the craft — but what energizes me
            most now is growing people and teams, untangling cross-functional problems, and making
            delivery feel calm and predictable.
          </p>
          <p>
            Outside of work, exercise fuels me — I help organize a run club and log a lot of
            kilometers. I'm a lifelong reader and writer, and I like studying languages: English is
            my native tongue, I know some Spanish and German, and I'm working on my Dutch.
          </p>
          <p className="about__nl">
            <em>
              Als u Nederlands met mij spreken wilt, dan{" "}
              <a href="mailto:john@johnppatterson.com">stuurt u mij een bericht!</a>
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
