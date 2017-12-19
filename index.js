function isCrapBrowser() {
  const nua = window.navigator.userAgent;
  if(/Trident\/[567]\.0/.exec(nua) != null) {
    return true;
  }
  if(nua.indexOf('Chrome') == -1) {
    return false;
  }
  if (nua.indexOf('Mozilla/5.0') > -1 &&
      nua.indexOf('Android ') > -1    &&
      nua.indexOf('AppleWebKit') > -1)) {
    return true;
  }
  return false;
}

function fixThisSVG(svg) {
  const width = svg.getAttribute('width');
  const height = svg.getAttribute('height');

  if (width && height && !svg.getAttribute('data-ignore-svg-polyfill')) {
    const ratio = (parseInt(height, 10) / parseInt(width, 10) * 100) + '%';
    const wrapper = document.createElement('div');
    const spacer = document.createElement('div');

    spacer.setAttribute('style', 'display: block; padding-bottom: ' + ratio);
    wrapper.setAttribute('style', 'position: relative;');

    wrapper.appendChild(spacer);

    svg.parentNode.appendBefore(wrapper, svg);

    svg.setAttribute('style', 'display: block; width: 100%; position: absolute; top: 0; left: 0; bottom: 0;');

    wrapper.appendChild(svg);
  }
}

function fixSizes() {
  [...document.querySelectorAll('svg')].forEach(fixThisSVG);
}

export default function init() {
  if (isCrapBrowser()) {
    fixSizes();
  }
}
