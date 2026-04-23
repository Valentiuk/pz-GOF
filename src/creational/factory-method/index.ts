interface Transport { deliver(): string; }
class Truck implements Transport { deliver() { return "[Factory Method] Доставка землею"; } }
class Ship implements Transport { deliver() { return "[Factory Method] Доставка морем"; } }
export abstract class Logistics {
    public abstract createTransport(): Transport;
    public planDelivery(): string { return this.createTransport().deliver(); }
}
export class RoadLogistics extends Logistics { createTransport() { return new Truck(); } }
export class SeaLogistics extends Logistics { createTransport() { return new Ship(); } }
