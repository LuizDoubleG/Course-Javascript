//Cloning Objects
const cellPhone = {
    brand : 'SAMSUNG',
    screenSize : {
        vertical : 155,
        horizontal : 75
    },
    call : function() {
        console.log("Making phone call...")
    }
}

//const newObject = Object.assign({}, cellPhone);
const newObject = Object.assign({
    batteryCapacity : 6000
}, cellPhone);
console.log(newObject);

const object2 = {...cellPhone}; //spread
console.log(object2);

// My object:
function createDesktop (graphicCard, memory, storage, SO) {
    return { 
    graphicCard,
    memory,
    storage,
    SO,
    boot () {
        console.log('Booting PC with', SO);
    }
    }
};

const newDesktop = createDesktop 
('GTX1050 TI', '8TB', '1TB', 'Linux');
console.log(newDesktop);
newDesktop.boot();

function Desktop (graphicCard, memory, storage, SO) {
    this.graphicCard = graphicCard,
    this.memory = memory,
    this.storage = storage,
    this.SO = SO,
    this.boot = function() {
        console.log('Booting PC with', SO);
    }
};

const desktop2 = new Desktop ('GTX1080TI', '16TB', '1TB + 240G SSD', 'Windows');
console.log(desktop2);
console.log(desktop2.CPU);
desktop2.boot();

const desktop3 = Object.assign({
    CPU : 'AMD Ryzen 5'
}, desktop2);
console.log(desktop3);

desktop2.CPU = 'Intel i5 10gen';
console.log(desktop2);
console.log(desktop2.CPU);

const desktop4 = {...newDesktop};
console.log(desktop4);
//Strange feature -> adding a feature to an object add it 
//to every previous console.log too
//maybe add it adds it to any previous usage too

