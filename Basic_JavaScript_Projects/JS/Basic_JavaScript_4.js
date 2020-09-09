function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "Grey",
        Breed: "Russian Blue",
        Age: 2,
        Sound:"Meow"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}