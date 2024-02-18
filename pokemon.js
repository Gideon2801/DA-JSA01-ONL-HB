let pokemon_image = document.getElementsByClassName("pokemon_image")[0]
let search = document.getElementsByClassName("input_search")[0]
let form = document.getElementById("poke-form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let name = search.value
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(data => data.json())
    console.log(pokemon.sprites.front_default);
    pokemon_image.setAttribute("src", pokemon.sprites.front_default)
})  