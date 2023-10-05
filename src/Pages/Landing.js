import About from '../Components/About';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import { team_src, events_src } from '../Components/slider_src';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Landing = () => {
	return (
		<>
			<Navbar />
			<div style={{ overflowX: 'hidden' }}>
				<Hero
					bgImg={'/assets/homepage-hero-img.png'}
					heading={'Guide to Technology...'}
					subHeading={'We LEARN, EXPLORE and GROW Together'}
					bgPos={'95% -200%'}
					bgSize={'1000px'}
				/>
				<About />
				<Slider src={team_src} sliderTitle={'Team Leads'} />
				{/* <Department /> */}
				<Slider src={events_src} sliderTitle={'Events'} />
				<Contact />
			</div>
			<Footer />
		</>
	);
};

export default Landing;
