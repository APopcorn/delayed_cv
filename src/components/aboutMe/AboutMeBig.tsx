const AboutMeBig = () => {
  const year_started = 2020;
  const current_year = 2024;
  return (
    <div
      className="
        bg-gradient-to-b 
        from-fade-t 
        to-fade-b 
        text-hero-text 
        w-[72%]  
        m-8
        p-[1rem]
      "
    >
      <p
        className="
          md:text-[1.5rem]
          text-[1.2rem]
        "
      >
        I'm a {current_year - year_started} year student at the Faculty
        of Engineering (LTH), Lund University studying Computer science.
        I enjoy socializing and working in teams. I am eager to create
        and learn so hope you enjoy my projects.
        {/* that's why I hope you drop a project ide in the text */}
        {/* field below if you want. */}
      </p>
    </div>
  );
};

export default AboutMeBig;
