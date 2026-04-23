class Pizza {
    public sauce: string = "";
    public cheese: string = "";
    public toppings: string[] = [];
}

export class PizzaBuilder {
    private pizza: Pizza = new Pizza();

    public setSauce(sauce: string) { this.pizza.sauce = sauce; return this; }
    public setCheese(cheese: string) { this.pizza.cheese = cheese; return this; }
    public addTopping(topping: string) { this.pizza.toppings.push(topping); return this; }
    
    public build() { return this.pizza; }
}