import _ from 'lodash';
import './style.css';
import Picture from './icon.png';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;

  const myPicture = new Image();
  myPicture = Picture;
  element.appendChild(myPicture)
}

document.body.appendChild(component());