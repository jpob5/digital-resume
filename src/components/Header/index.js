import './Header.css';

import Headshot from '../Headshot';

export default function Header(props) {
    return (
        <header id="header">
            <div class="flex-container">
                <div>
                    <Headshot />
                </div>
                <div>
                    <h1>Jacob Fife</h1>
                    <h2>Web developer</h2>
                    <p>Creative Front-End Developer with 7 years professional experience in building and maintaining responsive websites and online media. An advanced understanding of HTML5, JavaScript ES6 (React/jQuery) and Sass with a passion in creating exceptional user experiences that follow accessibility guidelines.</p>
                </div>
            </div>
        </header>
    );
}