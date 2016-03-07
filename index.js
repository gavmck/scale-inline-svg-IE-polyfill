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

    svg.parentNode.appendChild(wrapper);

    svg.setAttribute('style', 'display: block; width: 100%; position: absolute; top: 0; left: 0;');

    wrapper.appendChild(svg);
  }
}

function fixSizes() {
  const svgs = document.querySelectorAll('svg');
  for (let i = 0; i < svgs.length; i++) {
    fixThisSVG(svgs[i]);
  }
}

export default function init() {
  fixSizes();
}
