import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App(){
return (
<div>
    <section className="hero is-primary">
    <div className="hero-body">
    <p className="title">personal digital Assistant</p>
    </div>
    </section>
    

<div className="container">
    <section className="section">
        <div className="columns">
        <div className="column is-4">
            <ProfileCard title ="alexa" handle = "@alexa99" image = {AlexaImage} description ="alexa is created by amazon" />
        </div>
        <div className="column is-4">
            <ProfileCard title ="cortana" handle = "@cortana99" image ={CortanaImage} description ="cortan is created by microsoft"/>
        </div>
        <div className="column is-4">
            <ProfileCard title ="siri" handle = "@siri99" image = {SiriImage} description ="siri is created by apple"/>
        </div>

        </div>
    </section>
</div>
</div>
);
}

export default App;