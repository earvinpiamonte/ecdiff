import ReactDOM from 'react-dom';

import '../index.css';
import AppContent from '../components/AppContent';

const $body = document.body;
const $root = document.createElement('div');

$root.id = 'root';
$body.innerHTML = '';
$body.appendChild($root);

ReactDOM.render(<AppContent />, $root);
