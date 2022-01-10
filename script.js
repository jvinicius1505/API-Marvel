const timeStamp = 1641067134;
const apiKey = '4d1038a966963d22d9cd87f4eb771e5e';
const md5 = '8abe14732d48849f95b02700eaa965ba';

let aleatorio = [
    "Black Panther",
    "Hulk",
    "Wasp",
    "Carnage",
    "Iron Man",
    "Captain America",
    "X-men",
    "Blade",
    "Daredevil",
    "May Parker",
    "Ben Parker",
    "Absorbing Man",
    "Wolverine",
    "Cyclops",
    "Emma Frost",
    "Apocalypse",
    "Jean Grey",
    "Fantastic Four",
    "Human Torch",
    "Mr. fantastic",
    "Invisible Woman",
    "Thing",
    "Doctor Doom",
    "Mysterio",
    "Vulture (Adrian Toomes)",
    "Lizard",
    "Sandman",
    "Gambit",
    "Eddie Brock",
    "Kingpin",
    "Jessica Jones", 
    "Luke cage", 
    "Nova", 
    "Punisher", 
    "Guardians of the galaxy", 
    "Groot", 
    "Black Widow",
    "Kate Bishop",
    "Hawkeye",
    "Rocket raccoon", 
    "Spider-man",
    "Peter Quill", 
    "Gamora", 
    "Green Goblin (Norman Osborn)",
    "Thanos",
    "Rogue",
    "Spider-Man (2099)",
    "Cable",
    "Deadpool",
    "Ant-Man (Scott Lang)",
    "A-Bomb (HAS)",
    "red hulk",
    "Skaar",
    "Pepper Potts",
    "3-D Man",
    "Defenders",
    "Red Skull",
    "Arnim Zola",
    "Falcon",
    "Doctor Strange",
    "Vision",
    "Scarlet Witch",
    "Magneto",
    "Juggernaut",
    "Jubliee",
    "Quicksilver",
    "Winter Soldier"
]

let spiders = [
    "Spider-Man (Peter Parker)",
    "Spider-Man (2099)",
    "Spider-Man (Miles Morales)",
    "Spider-Man (Noir)",
    "Spider-Man (Ben Reilly)"
]

let input = document.getElementById("pesquisa");
let lucky = document.getElementById("lucky");

lucky.onclick = random;
window.onload = random;

input.addEventListener("keyup", (event)=>{
    if(event.keyCode = 1){
        pesquisar();
    }
})

function random(){
    let numero = Math.floor(Math.random() * aleatorio.length);
    let numero2 = Math.floor(Math.random() * aleatorio.length);
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${aleatorio[numero]}&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
    ).then((response) => {
        return response.json();
    }).then((jasonParsed) =>{
        input.placeholder = "Ex: " + aleatorio[numero2] + "..."
        let divHerois = document.getElementById("herois");
        jasonParsed.data.results.forEach(element => {
            input.value = "";
            let srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
            let nameChar = element.name;
            let descChar = element.description;
            let quadrinhos = [
                element.comics.items[0].name + ";",
                element.comics.items[1].name + ";",
                element.comics.items[2].name + ";",
                element.comics.items[3].name,
            ];
            let series = [
                element.series.items[0].name + ";",,
                element.series.items[1].name + ";",,
                element.series.items[2].name,
            ];
            let stories = [
                element.stories.items[0].name + ";",,
                element.stories.items[1].name + ";",,
                element.stories.items[2].name,
            ]
            createDivHero(srcImg, nameChar, descChar, quadrinhos, series, stories, divHerois)
        });        
        console.log(jasonParsed);
    });
}

function pesquisar(){
    let numero2 = Math.floor(Math.random() * aleatorio.length);
    if(input.value == "spider-man" || input.value == "spider man" || input.value == "Spider man" || input.value == "Spider-man" ){
        let numero = Math.floor(Math.random() * spiders.length);
        fetch(`https://gateway.marvel.com/v1/public/characters?name=${spiders[numero]}&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
        ).then((response) => {
            return response.json();
        }).then((jasonParsed) =>{
            let divHerois = document.getElementById("herois");
            input.placeholder = "Ex: " + aleatorio[numero2] + "..."
            jasonParsed.data.results.forEach(element => {
                input.value = "";
                let srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
                let nameChar = element.name;
                let descChar = element.description;
                let quadrinhos = [
                    element.comics.items[0].name + ";",
                    element.comics.items[1].name + ";",
                    element.comics.items[2].name + ";",
                    element.comics.items[3].name,
                ];
                let series = [
                    element.series.items[0].name + ";",,
                    element.series.items[1].name + ";",,
                    element.series.items[2].name,
                ];
                let stories = [
                    element.stories.items[0].name + ";",,
                    element.stories.items[1].name + ";",,
                    element.stories.items[2].name,
                ]
                createDivHero(srcImg, nameChar, descChar, quadrinhos, series, stories, divHerois)
            });        
            console.log(jasonParsed);
        });
    } 

    fetch(`https://gateway.marvel.com/v1/public/characters?name=${input.value}&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
    ).then((response) => {
        return response.json();
    }).then((jasonParsed) =>{
        input.placeholder = "Ex: " + aleatorio[numero2] + "..."
        let divHerois = document.getElementById("herois");

        jasonParsed.data.results.forEach(element => {
            input.value = "";
            let srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
            let nameChar = element.name;
            let descChar = element.description;
            let quadrinhos = [
                element.comics.items[0].name + ";",
                element.comics.items[1].name + ";",
                element.comics.items[2].name + ";",
                element.comics.items[3].name,
            ];
            let series = [
                element.series.items[0].name + ";",,
                element.series.items[1].name + ";",,
                element.series.items[2].name,
            ];
            let stories = [
                element.stories.items[0].name + ";",,
                element.stories.items[1].name + ";",,
                element.stories.items[2].name,
            ]
            createDivHero(srcImg, nameChar, descChar, quadrinhos, series, stories, divHerois)
        });        
        console.log(jasonParsed);
    });
}

function createDivHero(srcImg, nameChar, descChar, quadrinhos, series, stories, divHerois){
    let divEsq = document.createElement("div");
    divEsq.setAttribute("id", "esquerda");
    let divDir = document.createElement("div");
    divDir.setAttribute("id", "direita");

    let textNome = document.createElement("h1");
    let textDesc = document.createElement("strong");
    let image = document.createElement("img");
    let ulComic = document.createElement("ul");
    let ulSerie = document.createElement("ul");
    let ulStories = document.createElement("ul");
    let divNome = document.createElement("div");

    let divComics = document.createElement("div");
    divComics.classList.add("comics");
    let titCom = document.createElement("h4");
    titCom.textContent = "Comics:"
    divComics.appendChild(titCom);

    let divDescrip = document.createElement("div");
    divDescrip.classList.add("descrip");
    let titDes = document.createElement("h4");
    titDes.textContent = "Description:"
    divDescrip.appendChild(titDes);

    let divStories = document.createElement("div");
    divStories.classList.add("stories");
    let titSto = document.createElement("h4");
    titSto.textContent = "Stories:"
    divStories.appendChild(titSto);

    let divSeries = document.createElement("div");
    divSeries.classList.add("series");
    let titSer = document.createElement("h4");
    titSer.textContent = "Series:"
    divSeries.appendChild(titSer);

    


    textNome.textContent = nameChar;
    textDesc.textContent = descChar;
    image.src = srcImg;
    divNome.appendChild(textNome);
    divNome.classList.add("divNome");
    image.classList.add("imagem");

    if(descChar == ""){
        textDesc.textContent = `Sorry but '${nameChar}' has not a Description yet :/`
        divComics.appendChild(ulComic);
        divDescrip.appendChild(textDesc);
        divSeries.appendChild(ulSerie);
        divStories.appendChild(ulStories);
        divDir.style.gridTemplateAreas = `"comics desc" "comics stories" "series stories"`;
        
    }else{        
        divComics.appendChild(ulComic);
        divDescrip.appendChild(textDesc);
        divSeries.appendChild(ulSerie);
        divStories.appendChild(ulStories);
        divDir.style.gridTemplateAreas = `"comics desc" "comics desc" "series stories" "series stories"`;
    }

    for (var i=0; i < quadrinhos.length; i++){
        var liComic = document.createElement('p');    
        ulComic.appendChild(liComic);
        liComic.textContent = quadrinhos[i]; 
    }

    for (var i=0; i < series.length; i++){        
        var liSerie = document.createElement('p');    
        ulSerie.appendChild(liSerie);
        liSerie.textContent = series[i];
    }

    for (var i=0; i < stories.length; i++){        
        var liStories = document.createElement('p');    
        ulStories.appendChild(liStories);
        liStories.textContent = stories[i];
    }

    
    while(divHerois.firstChild){
        divHerois.removeChild(divHerois.lastChild);
    }

    divDir.appendChild(divComics);
    divDir.appendChild(divDescrip);
    divDir.appendChild(divStories);
    divDir.appendChild(divSeries);

    divEsq.appendChild(divNome);
    divEsq.appendChild(image);

    
    divHerois.appendChild(divEsq);
    divHerois.appendChild(divDir);

    
}