import just from '/js/just.js/just.js';
const md = new Remarkable();

void async function initTextarea () {
    just.plugin(function setCursorToEnd () {
        this.elements[0].selectionStart = this.elements[0].value.length;
    });
    
    const input = just.select('#input');
    const output = just.select('#output');

    async function updateOutput () {
        const value = md.render(input.value);
        input.setCursorToEnd();
        output.html(value);
    }

    input.on('input', async () => await updateOutput());

    await updateOutput();
}();

void async function initPublishFeature () {
    const publish = just.select("#publish");

    publish.on("click", () => {
        //Are you sure?
        //Save to db
        //redirect to /read/TITLE
    });
}();

void async function initCancelFeature () {
    const cancel = just.select("#cancel");

    cancel.on("click", () => {
        //are you sure?
        //Cancel
        //redirect to ???
    });
}();