import './sass/style.scss'
import Particles from './components/Particles'
import Social from './components/Social'
import YoutubeEmbed from './components/YoutubeEmbed'

function App() {
	return (
		<div id="home" className="App">
			<Particles />
			<nav className="container">
				<h1 className="to-neon">Nervous Monks</h1>
				<Social />
				<h2 className="contact"><a className="to-neon" href="mailto:nervousmonks@gmail.com">Contact</a></h2>
			</nav>
			<section className="container media youtube music-video mt-5">
				<div className="row">
					<div className="col-12">
						<YoutubeEmbed embedId="9XjjFLAchb0" />
					</div>
				</div>
			</section>
			<section className="container media soundcloud mt-5">
				<div className="row d-flex justify-content-center">
					<div className="col-12 col-md-8 col-lg-6">
						<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/448310646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="SoundCloud Player" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"></iframe>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
