export default function HeroSection() {
  return (
    <section id="heroSection">
      <div className="hero-section">
          <div className="hero-section-content-box">
           <p className="section-title"> Hey, I'm Caleb Lwipa</p>
           <h1 className="hero-section-title">
            <span className="hero-section-title-color"> Full Stack</span>{""}
            <br />
            Developer
           </h1>
           <p className="hero-section-description">
            I am a passionate Full Stack Developer with expertise in building dynamic and responsive web applications. 
            I love creating seamless user experiences and bringing innovative ideas to life through code.
            <br />
            Let's build something amazing together!
           </p>
            <button className="btn btn-primary"> Get In Touch</button>
          </div>
                <div className="hero-section-img">
        <img src="img/hero_img.png" alt="Hero" />
      </div>
      </div>
    </section>
  );
}