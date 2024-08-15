class Graph{
    constructor(points= [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addPoint(point) {
        this.points.push(point);
    }

    containsPoint(point){
        return this.points.find((P) => P.equals(point));
    }

    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    tryAddSegment(seg) {
        if (!this.constainsSegment(seg)) {
            this.addSegment(seg);
            return true;
        }
    }

    draw(ctx) {
        for (const seg of this.segments) {
            seg.draw(ctx);
        }
    
        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}
