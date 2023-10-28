import { Link } from 'react-router-dom';
import './index.css';

export default function LinksButtons() {
	return (
	    <div className="c-b">
	      <button className="home">
	        <Link to="/useArray">UseArray</Link>
	      </button>

	      <button className="home">
	        <Link to="/about">About</Link>
	      </button>
  		</div>
	)
}