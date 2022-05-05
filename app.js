let device;
let audio = new Audio('sounds/lvl_up.mp3');
let theme = new Audio('sounds/101-opening.mp3');
let lakeTheme = new Audio('sounds/Lake_Verity.mp3');
const dataApi = {
	apiUrl: "https://pokeapi.co/api/v2/",
	endpoint: "pokemon/",
};

const randomPokemon = document.querySelector(".random-pokemon");

const pokeball = document.querySelector(".pokeball");

const randomNumber = () => Math.floor(Math.random()*(721 - 1 + 1)) + 1;
const generateRandomPokemon = () => {
	const url = dataApi.apiUrl + dataApi.endpoint + randomNumber();
	fetch(url)
		.then((data) => data.json())
		.then((pokemon) =>
			displayPokemon(pokemon.name, pokemon.sprites.front_default, pokemon.id)
		)
		.catch((error) => {
			console.error(error);
		});
};

const displayPokemon = (name, img, num) => {
	const html = `
    <h2>${name}</h2>
    <img class="pokemon" src="${img}" alt="${name}">
    <h3>${num}</h3>`;
	randomPokemon.innerHTML = html;
};

pokeball.addEventListener("click", generateRandomPokemon);

generateRandomPokemon();

//console.log(navigator);
if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('could not connect MIDI');
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);

    const inputs = midiAccess.inputs;
    console.log(inputs);

    for (var output of midiAccess.outputs.values()) {
        device = output;
        console.log('Output device selected', device);
    }

    inputs.forEach((input) =>{
        console.log(input);
        input.addEventListener('midimessage', handleInput);

    })
}
var result = confirm("You will get a randomly generated Pokemon using any of the four buttons in the center of the launchpad. With the top red or white bottom portion of launchpad you can play two different og tunes. Cancel or reset theme/launchpad by pressing any of the empty four corners. "+
              "Enjoy!");

              
function handleInput(input){
    console.log(input);

    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    console.log(command);
    console.log(note);
    console.log(velocity);

    switch (command){
        case 144:
        if (velocity > 0){
            noteOn(note);
        } else{
            noteOff(note);
        }
        break;
        case 128:
            noteOff(note);
        break;
    }
}

function noteOn(note){
    console.log(`note:${note} //on`);
    if (note == 51){
        audioPlay();
        clearMid();
    } else if(note == 55) {
        audioPlay();
        clearMid();
    } else if(note == 84) {
        audioPlay();
        clearMid();
    } else if(note == 80) {
        audioPlay();
        clearMid();
    }

    if (note == 66) {
        themePlay();
        clearTop();
    } else if (note == 67) {
        themePlay();
        clearTop();
    } else if (note == 96) {
        themePlay();
        clearTop();
    } else if (note == 97) {
        themePlay();
        clearTop();
    } else if (note == 61) {
        themePlay();
        clearTop();
    } else if (note == 62) {
        themePlay();
        clearTop();
    } else if (note == 63) {
        themePlay();
        clearTop();
    } else if (note == 92) {
        themePlay();
        clearTop();
    } else if (note == 93) {
        themePlay();
        clearTop();
    } else if (note == 94) {
        themePlay();
        clearTop();
    } else if (note == 56) {
        themePlay();
        clearTop();
    } else if (note == 57) {
        themePlay();
        clearTop();
    } else if (note == 58) {
        themePlay();
        clearTop();
    } else if (note == 89) {
        themePlay();
        clearTop();
    } else if (note == 90) {
        themePlay();
        clearTop();
    } else if (note == 91) {
        themePlay();
        clearTop();
    }

    if (note == 38) {
        lakePlay();
        clearBottom();
    } else if (note == 39) {
        lakePlay();
        clearBottom();
    } else if (note == 68) {
        lakePlay();
        clearBottom();
    } else if (note == 69) {
        lakePlay();
        clearBottom();
    } else if (note == 41) {
        lakePlay();
        clearBottom();
    } else if (note == 42) {
        lakePlay();
        clearBottom();
    } else if (note == 43) {
        lakePlay();
        clearBottom();
    } else if (note == 72) {
        lakePlay();
        clearBottom();
    } else if (note == 73) {
        lakePlay();
        clearBottom();
    } else if (note == 74) {
        lakePlay();
        clearBottom();
    } else if (note == 44) {
        lakePlay();
        clearBottom();
    } else if (note == 45) {
        lakePlay();
        clearBottom();
    } else if (note == 46) {
        lakePlay();
        clearBottom();
    } else if (note == 77) {
        lakePlay();
        clearBottom();
    } else if (note == 78) {
        lakePlay();
        clearBottom();
    } else if (note == 79) {
        lakePlay();
        clearBottom();
    }

    if (note == 99) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 98) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 95) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 64) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 65) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 60) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 40) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 36) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 37) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 75) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 71) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    } else if (note == 70) {
        themePause();
        theme.currentTime = 0;
        midiPokeball();
        lakePause();
    }
}
/*function stopTheme(note){
    console.log(`note:${note} //off`)
    if (note == 99) {
        themePause();
        midiPokeball();
    }
}*/
function noteOff(note){
    console.log(`note:${note} //off`)
    if (note == 51){
        generateRandomPokemon();
        midiPokeball();
    } else if(note == 55) {
        generateRandomPokemon();
        midiPokeball();
    } else if(note == 84) {
        generateRandomPokemon();
        midiPokeball();
    } else if(note == 80) {
        generateRandomPokemon();
        midiPokeball();
    }
}

function color(key, clr) {
    device && device.send([0x90, key, clr]);
}

function colorAll(){
    for(let i = 0; i<100; i++){
        color(i,1);
    }
}

function clearMid(){
    /*for(let i=0; i<100; i++){
        color(i,0);
    }*/
    device && device.send([0x90, 55, 0]);
    device && device.send([0x90, 84, 0]);
    device && device.send([0x90, 51, 0]);
    device && device.send([0x90, 80, 0]);
}

function clearBottom() {
    device && device.send([0x90, 38, 0]);
    device && device.send([0x90, 39, 0]);
    device && device.send([0x90, 68, 0]);
    device && device.send([0x90, 69, 0]);

    device && device.send([0x90, 41, 0]);
    device && device.send([0x90, 42, 0]);
    device && device.send([0x90, 43, 0]);
    device && device.send([0x90, 72, 0]);
    device && device.send([0x90, 73, 0]);
    device && device.send([0x90, 74, 0]);
        
    device && device.send([0x90, 44, 0]);
    device && device.send([0x90, 45, 0]);
    device && device.send([0x90, 46, 0]);
        //device && device.send([0x90, 59, color]);
        //device && device.send([0x90, 88, color]);
    device && device.send([0x90, 79, 0]);
    device && device.send([0x90, 77, 0]);
    device && device.send([0x90, 78, 0]);
}

function clearTop() {
    device && device.send([0x90, 66, 0]);
    device && device.send([0x90, 67, 0]);
    device && device.send([0x90, 96, 0]);
    device && device.send([0x90, 97, 0]);

    device && device.send([0x90, 61, 0]);
    device && device.send([0x90, 62, 0]);
    device && device.send([0x90, 63, 0]);
    device && device.send([0x90, 92, 0]);
    device && device.send([0x90, 93, 0]);
    device && device.send([0x90, 94, 0]);
        
    device && device.send([0x90, 56, 0]);
    device && device.send([0x90, 57, 0]);
    device && device.send([0x90, 58, 0]);
        //device && device.send([0x90, 59, color]);
        //device && device.send([0x90, 88, color]);
    device && device.send([0x90, 89, 0]);
    device && device.send([0x90, 90, 0]);
    device && device.send([0x90, 91, 0]);
}

function audioPlay(){
    audio.play();
}
function themePlay(){
    theme.play();
}
function themePause(){
    theme.pause();
}
function lakePlay(){
    lakeTheme.play();
}
function lakePause(){
    lakeTheme.pause();
    lakeTheme.currentTime = 0;
}
function midiPokeball() {
        device && device.send([0x90, 66, 72]);
        device && device.send([0x90, 67, 72]);
        device && device.send([0x90, 96, 72]);
        device && device.send([0x90, 97, 72]);

        device && device.send([0x90, 61, 72]);
        device && device.send([0x90, 62, 72]);
        device && device.send([0x90, 63, 72]);
        device && device.send([0x90, 92, 72]);
        device && device.send([0x90, 93, 72]);
        device && device.send([0x90, 94, 72]);
        
        device && device.send([0x90, 56, 72]);
        device && device.send([0x90, 57, 72]);
        device && device.send([0x90, 58, 72]);
        //device && device.send([0x90, 59, color]);
        //device && device.send([0x90, 88, color]);
        device && device.send([0x90, 89, 72]);
        device && device.send([0x90, 90, 72]);
        device && device.send([0x90, 91, 72]);

        device && device.send([0x90, 55, 3]);
        device && device.send([0x90, 84, 3]);
        device && device.send([0x90, 51, 3]);
        device && device.send([0x90, 80, 3]);

        device && device.send([0x90, 44, 3]);
        device && device.send([0x90, 45, 3]);
        device && device.send([0x90, 46, 3]);
        //device && device.send([0x90, 47, 3]);
        //device && device.send([0x90, 76, 3]);
        device && device.send([0x90, 77, 3]);
        device && device.send([0x90, 78, 3]);
        device && device.send([0x90, 79, 3]);

        device && device.send([0x90, 41, 3]);
        device && device.send([0x90, 42, 3]);
        device && device.send([0x90, 43, 3]);
        device && device.send([0x90, 72, 3]);
        device && device.send([0x90, 73, 3]);
        device && device.send([0x90, 74, 3]);

        device && device.send([0x90, 38, 3]);
        device && device.send([0x90, 39, 3]);
        device && device.send([0x90, 68, 3]);
        device && device.send([0x90, 69, 3]);
}