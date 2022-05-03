let device;
let audio = new Audio('sounds/lvl_up.mp3');
const dataApi = {
	apiUrl: "https://pokeapi.co/api/v2/",
	endpoint: "pokemon/",
};

const randomPokemon = document.querySelector(".random-pokemon");

const pokeball = document.querySelector(".pokeball");

const generateRandomNuber = () => Math.floor(Math.random() * 200) + 1;

const generateRandomPokemon = () => {
	const url = dataApi.apiUrl + dataApi.endpoint + generateRandomNuber();
	fetch(url)
		.then((data) => data.json())
		.then((pokemon) =>
			displayPokemon(pokemon.name, pokemon.sprites.front_default)
		)
		.catch((error) => {
			console.error(error);
		});
};

const displayPokemon = (name, img) => {
	const html = `
    <h2>${name}</h2>
    <img class="pokemon" src="${img}" alt="${name}">`;
	randomPokemon.innerHTML = html;
};

pokeball.addEventListener("click", generateRandomPokemon);

generateRandomPokemon();

//console.log(navigator);
if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('cound not connect MIDI');
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
var r=confirm("For this project, you will get a randomly generated Pokemon using the top right button on the launchpad. "+
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
    if (note == 99){
     audioplay();
     colorAll();
    }
}

function noteOff(note){
    console.log(`note:${note} //off`)
    if (note == 99){
        generateRandomPokemon();
        clearColor();
        color(99,100)
      }
      if (note == 64){
        clearColor();
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

function clearColor(){
    for(let i=0; i<100; i++){
        color(i,0);
    }
}

function audioplay(){
    audio.play();
}

function audiopause(){
    audio.pause();
}