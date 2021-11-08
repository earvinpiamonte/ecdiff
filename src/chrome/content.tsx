import ReactDOM from 'react-dom';

import '../index.css';
import AppContent from '../components/AppContent';

const $body = document.body;
const $root = document.createElement('div');

$root.id = 'root';
$body.innerHTML = '';
$body.classList.add('invisible'); // Invisible until the app is loaded
$body.appendChild($root);

ReactDOM.render(<AppContent />, $root);
