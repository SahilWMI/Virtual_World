class GraphEditor {
    constructor(canvas, graph) {
        this.canvas = canvas;
        this.graph = graph;

        this.ctx = this.canvas.getContext("2d");

        this.#addEventListeners();

    }

    #addEventListeners(){
        this.canvas.addEventListener("mousedown", (evt) => {
            const mouse = new PointerEvent(evt.offsetX, evt.offsetY);
        });
    }

    display() {
        this.graph.draw(this.ctx);
    }
}
