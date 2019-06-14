import just from '/js/just.js/just.js';

const input = just.select('.input');
const output = just.select('.output');

input.on('input', () => {
    const value = input.value;
    output.innerHTML(marked(value));
});