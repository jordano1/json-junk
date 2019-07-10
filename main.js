let obj = {
    "name": "Jordan",
    "pizza":[
        {"topping":"pepperonni", "crust":"cheese"},
        {"topping":"pineapple", "crust":"asiago"},
        {"topping":"ham", "crust":"nacho"},
    ]
}

obj.pizza.forEach(za => {
    console.log(za.crust)
});