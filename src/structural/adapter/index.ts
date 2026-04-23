class RoundPeg {
    constructor(public radius: number) {}
}

class SquarePeg {
    constructor(public width: number) {}
}

export class SquarePegAdapter {
    constructor(private peg: SquarePeg) {}

    public getRadius(): number {
        return this.peg.width * Math.sqrt(2) / 2;
    }
}