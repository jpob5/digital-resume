import { HashLink as Link } from 'react-router-hash-link';

import './Navigation.css';

export default function Header(props) {
    return (
        <nav>
            <div class="flex-container">
                <div>
                    <p>Jacob Fife</p>
                </div>
                <div>
                    <ul>
                        <li><Link smooth to="#header">Home</Link></li>
                        <li><Link smooth to="#experience">Experience</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}