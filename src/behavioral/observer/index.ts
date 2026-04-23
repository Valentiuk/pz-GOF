interface Subscriber {
    update(context: string): void;
}

export class Store {
    private subscribers: Subscriber[] = [];

    public subscribe(s: Subscriber) { this.subscribers.push(s); }
    public notify(msg: string) {
        this.subscribers.forEach(s => s.update(msg));
    }
}

export class Customer implements Subscriber {
    constructor(private name: string) {}
    update(msg: string) { console.log(`[Observer] ${this.name} отримав сповіщення: ${msg}`); }
}