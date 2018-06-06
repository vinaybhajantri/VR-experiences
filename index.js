

const $ = (query) => document.querySelector(query);

const sphere = $('a-box');

const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;

const animate = () => {
  degrees = shiftDegrees(degrees);
  const color = `hsl(${degrees}, 50%, 50%)`;
  const position = `0 ${Math.sin(Date.now() / 1000)} -5`;

  sphere.setAttribute('color', color);
  sphere.setAttribute('position', position);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);