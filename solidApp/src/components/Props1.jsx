import { SiPreact } from 'solid-icons/si'

/**
 * 
 * @param {string} props 
 * @returns html e props name
 */

function MyComponent(props) {
    return <div class="props">Nova <SiPreact /> {props.name}</div>;
}

export default MyComponent;
