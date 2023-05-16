import './style.css';
import profile from './profile.jpg';

export default function Headshot(props) {
    return (
        <div className="headshot">
            <img src={profile} alt={`Headshot of Jacob`} />
        </div>
    );
}