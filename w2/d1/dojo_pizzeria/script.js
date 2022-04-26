function pizzaOven(crustType,sauceType,cheese,topping){
    var pizza_recipe = {};

    pizza_recipe.crustType = crustType;
    pizza_recipe.sauceType = sauceType;
    pizza_recipe.cheese = cheese;
    pizza_recipe.topping = topping;

    return pizza_recipe;
}

var pizza1 = pizzaOven('deep dish','traditional',['mozzarella'], ['pepperoni', 'sausage']);
console.log(pizza1);

var pizza2 = pizzaOven('hand tossed','marinara',['mozzarella','feta'],['mushrooms','olives','onions']);
console.log(pizza2);

var pizza3 = pizzaOven('thin crust','garlic butter','ricotta',['chicken cutlet','pepperoni']);
console.log(pizza3);

var pizza4 = pizzaOven('cauliflower crust','traditional','mozzarella',['meatball','sausage','pepperoni']);
console.log(pizza4);

function randomPizza(){
    var pizzaTypes = [
        "Sicilian",
        "Grandma's",
        "Brick Oven",
        "Vegetarian"
    ];

    var pizzaSelection = Math.floor(Math.random() * 3 + 1);
    console.log(pizzaSelection);
    return pizzaTypes[pizzaSelection];
}

var selected_pizza = randomPizza();

console.log(selected_pizza);