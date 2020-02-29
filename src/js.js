import _ from 'lodash';
import printMe from './print.js';
import './css.css';
  function component() {
    var element = document.createElement('div');

  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hell34o', 'webpack'], ' ');
    element.classList.add('hello');
    printMe();
    return element;
  }

  document.body.appendChild(component());