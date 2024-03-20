let instance = document.querySelector(".pokemonDiv");
let next = null;

function getPokemonList(e = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'){

    fetch(e)
    .then((Response) => Response.json())
    .then((data) => {
        next = data.next;
        for(urls of data.results)
            getPokemon(urls.url);
        
    }).catch( (error) => {
        console.log(error);
    });
}

function getPokemon(e){
    fetch(e).then((response) => response.json())
    .then((data) => {
        instance.innerHTML += `
        <div class="card ${data.types[0].type.name}">
                    <div class="number">
                        <small>#${data.id}</small>
                    </div>
                    <img src=${data.sprites.other["official-artwork"].front_default} alt="${data.name}">
                    <div class="detail">
                        <h3>${data.name}</h3>
                        <small>Type : ${data.types[0].type.name}</small>
                        <button class="pokeinfo hello" onclick="toggleContent(this)">Know more...</button>
                        <div class="desc">
                            <p><b>Height</b> is <b>${data.height} cm</b></p>
                            <p><b>Weight</b> is <b>${data.weight} Kg</b></p>
                            <h3>Stat</h3>
                            <p><b>hp : ${data.stats[0].base_stat}</b></p>
                            <p><b>attack : ${data.stats[1].base_stat}</b></p>
                            <p><b>defense : ${data.stats[2].base_stat}</b></p>
                            <p><b>special-attack : ${data.stats[3].base_stat}</b></p>
                            <p><b>special-defense : ${data.stats[4].base_stat}</b></p>
                            <p><b>speed : ${data.stats[5].base_stat}</b></p>
                        </div>
                    </div>
                </div>
        `;

        
    }).catch((error) => {
        console.log(error);
    });
}

getPokemonList();

function toggleContent(e){
    console.log(e.parentNode.childNodes[7]);
    if(e.innerText == "Know more..."){
        e.innerText = "Know less...";
        e.parentNode.childNodes[7].removeAttribute("class");
    }         
    else{
        e.innerText = "Know more...";
        e.parentNode.childNodes[7].setAttribute("class","desc");
    }    
}

document.querySelector(".loadMore").addEventListener("click",() => {
    
    getPokemonList(next);
});

/*

instance.innerHTML += `
        <div class="card ${data.types[0].type.name}">
                    <div class="number">
                        <small>#${data.id}</small>
                    </div>
                    <img src="${data.sprites.front_defalut}" alt="${data.name}">
                    <div class="detail">
                        <h3>${data.name}</h3>
                        <small>Type : ${data.types[0].type.name}</small>
                        <button class="pokeinfo">Know more...</button>
                        <div class="desc">
                            <p><b>Height</b> is <b>${data.height}</b></p>
                            <p><b>Weight</b> is <b>${data.weight}</b></p>
                            <h3>Stat</h3>
                            <p><b>hp : ${data.stats[0].base_stat}</b></p>
                            <p><b>attack : ${data.stats[1].base_stat}</b></p>
                            <p><b>defense : ${data.stats[2].base_stat}</b></p>
                            <p><b>special-attack : ${data.stats[3].base_stat}</b></p>
                            <p><b>special-defense : ${data.stats[4].base_stat}</b></p>
                            <p><b>speed : ${data.stats[5].base_stat}</b></p>
                        </div>
                    </div>
                </div>
        `;


*/