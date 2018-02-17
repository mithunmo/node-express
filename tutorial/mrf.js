const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
];

var animals_name = animals.map((animal, index, animals) => {
    return animal.name;
})

console.log(animals_name);

var filter_name = animals.filter( (animal) => {
    return animal.size == "small";
});

console.log(filter_name);

var total_weight = animals.reduce( (weight, animal , index, animals) => {
    return weight += animal.weight;
}, 0);
console.log(total_weight);



