const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

/*

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

*/

/** Adding Validatiions */
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);//kind of collection
const fruit = new Fruit({
    name: "Peach",
    rating: 3,
    review: "Pretty yuck!"
})

const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "Sour"
})

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "Not from NewZealand"
})

// fruit.save();

// Fruit.insertMany([kiwi, orange], (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("success");

// })

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    }
    else {
        setTimeout(function () {
            mongoose.disconnect();
        }, 100);
        fruits.forEach((fruit) => {
            console.log(fruit.name)
        });
    }
})

// Fruit.updateOne({ _id: "6239303ce78dd11f0fea87c6" }, { name: "strawberries" }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Succesfully updated the doc")
//     }
// })

// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/personDB", { useNewUrlParser: true });

// const PersonSchema = new mongoose.Schema({ name: String, age: Number })

// const Person = mongoose.model("Perosn", PersonSchema);
// const person = new Person({ name: "Abc", age: 23 })

// person.save();
Fruit.deleteOne({ _id: "62392f6abd50a4733455cc49" }, (err) => {
    if (err)
        console.log(err);
    else
        console.log("deleted successfully")

})

