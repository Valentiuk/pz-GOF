import { Database } from '../src/creational/singleton';
import { RoadLogistics, SeaLogistics } from '../src/creational/factory-method';
import { PizzaBuilder } from '../src/creational/builder';
import { SquarePegAdapter } from '../src/structural/adapter';
import { VideoConverterFacade } from '../src/structural/facade';
import { Navigator, RoadStrategy, WalkingStrategy } from '../src/behavioral/strategy';
import { Store, Customer } from '../src/behavioral/observer';

console.log("CREATIONAL PATTERNS");
Database.getInstance().query("SELECT * FROM users");

const road = new RoadLogistics();
console.log(road.planDelivery());

const pizza = new PizzaBuilder().setSauce("Tomato").setCheese("Mozzarella").addTopping("Salami").build();
console.log(`[Builder] Піца готова з соусом: ${pizza.sauce}`);

console.log("\nSTRUCTURAL PATTERNS");
const adapter = new SquarePegAdapter({ width: 10 } as any);
console.log(`[Adapter] Адаптований радіус: ${adapter.getRadius().toFixed(2)}`);

new VideoConverterFacade().convert("movie.mp4");

console.log("\nBEHAVIORAL PATTERNS");
const nav = new Navigator(new RoadStrategy());
nav.build("Київ", "Львів");

const store = new Store();
store.subscribe(new Customer("Олег"));
store.notify("Знижка 50% на всі товари");