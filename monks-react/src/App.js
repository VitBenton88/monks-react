import './sass/style.scss';
import ParticlesBg from "particles-bg";

function App() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    random: 15
  }

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        )
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.closePath()
      }
    })
  }

  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )

  return (
    <div id="home" className="App">
      <ParticlesBg type="custom" config={config} bg={true} />
      <nav className="container">
        <h1>Nervous Monks</h1>
        <ul className="social">
          <li className="d-inline-block"><a href="https://www.facebook.com/nervousmonks/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
          <li className="d-inline-block"><a href="https://www.instagram.com/nervousmonks/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li className="d-inline-block"><a href="https://soundcloud.com/nervousmonks" target="_blank" rel="noreferrer"><i className="fab fa-soundcloud"></i></a></li>
          <li className="d-inline-block"><a href="https://nervousmonks.bandcamp.com/releases" target="_blank" rel="noreferrer"><i className="fab fa-bandcamp"></i></a></li>
        </ul>
        <h2 className="contact"><a href="mailto:nervousmonks@gmail.com">Contact</a></h2>
      </nav>
      <section class="container media youtube music-video mt-5">
        <div class="row">
            <div class="col-12">
              <YoutubeEmbed embedId="9XjjFLAchb0" />
            </div>
        </div>
      </section>
      <section class="container media soundcloud mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/448310646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay"></iframe>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
