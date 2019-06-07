import just from '/js/just.js/just.js';

just.plugin(function value () {
    return this.elements[0].value;
})

const input = just.select('.input');
const output = just.select('.output');

input.on('input', () => {
    const value = input.value();
    output.innerHTML(marked(value));
});