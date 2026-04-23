interface RouteStrategy {
    buildRoute(a: string, b: string): string;
}

export class RoadStrategy implements RouteStrategy {
    buildRoute(a: string, b: string) { return `Маршрут від ${a} до ${b} дорогами`; }
}

export class WalkingStrategy implements RouteStrategy {
    buildRoute(a: string, b: string) { return `Пішохідна стежка від ${a} до ${b}`; }
}

export class Navigator {
    constructor(private strategy: RouteStrategy) {}
    public build(a: string, b: string) { console.log(`[Strategy] ${this.strategy.buildRoute(a, b)}`); }
}