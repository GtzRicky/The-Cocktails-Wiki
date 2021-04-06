import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <section className="section about-section">
            <h1 className="section-title">About</h1>
            <h2>
                Hi! This is a personal project based on The Cocktail DB. Here you can find any cocktail and how to mix it.
            </h2>
            
            <div>
                <h3>Contact details</h3>
                <h4>Built by Ricardo Gutiérrez</h4>
                <h3>
                    <a href="https://github.com/GtzRicky"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    <a href="https://twitter.com/GtzRicky"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                    <a href="https://www.instagram.com/ricardogusar/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                </h3>

            </div>
            <hr/>
            <p>
                Remember! Consumption of alcoholic beverages impairs your ability to drive a car or operate machinery, and may cause health problems.
                “Alcohol abuse is dangerous to your health” 
                “Alcohol is addictive” 
                “Alcohol increases your risk to personal injuries” 
                “Alcohol is a major cause of violence and crime” 
                “Drinking during pregnancy can be harmful to your unborn baby” 
                “Don’t drink and walk on the road, you may be killed” 
                “Alcohol reduces driving ability, don’t drink and drive”
            </p>
        </section>
    )
}

export default About;