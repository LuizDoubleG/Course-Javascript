// My object practicing:
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

// Strange phenomenon -> "ghost" CPU propertie appears
// even though I added it after*
const desktop2 = new Desktop ('GTX1080TI', '16TB', '1TB + 240G SSD', 'Windows');
console.log(desktop2);
console.log(desktop2.CPU);
desktop2.boot();

// Adding new propertie and creating new desktop
const desktop3 = Object.assign({
    CPU : 'AMD Ryzen 5'
}, desktop2);
console.log(desktop3);

// Adding new propertie to old desktop*
desktop2.CPU = 'Intel i5 10gen';
console.log(desktop2);
console.log(desktop2.CPU);

// Cloning objects
const desktop4 = {...newDesktop};
console.log(desktop4);


// Testing if "new Desktop" command affects another const
const desktop5 = new Desktop ('GTX750TI', '4TB', '1TB', 'Windows');
console.log(desktop5);
console.log(desktop2);
// It doesn't

//*Strange feature -> adding a feature to an object add it 
// to every previous console.log too...
// maybe add it adds it to any previous usage too.