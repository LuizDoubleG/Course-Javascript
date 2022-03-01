// Lesson 14: dynamic nature of objects in JavaScript
const mouse = {
    color: 'Green',
    brand: 'Razzer'
};
console.log(mouse);
mouse.speed = 5000;
mouse.changeDPI = function() {
    console.log('Changing DPI...');
}
console.log(mouse); 

delete mouse.speed;
delete mouse.changeDPI;
console.log(mouse);
