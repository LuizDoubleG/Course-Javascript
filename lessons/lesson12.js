//Lesson 12: Factory functions
//Several objects 
//ex.:
//full object with function and specifications:

//const cellPhone = {
    //brand : 'SAMSUNG',
    //screenSize : {
        //vertical : 155,
        //horizontal : 75
    //},
    //batteryCapacity : 5000,
    //call : function() {
        //console.log("Making phone call...")
    //}
//}

//If we want 100 objects like that, one option is:
//repeat it 100x
//instead:

//function createCellPhone() {
    function createCellPhone (brand, screenSize, batteryCapacity) {
        // const cellPhone = {
        //     brand : 'SAMSUNG',
        //     screenSize : {
                //vertical : 155,
                //horizontal : 75
            //},
            //batteryCapacity : 5000,
            //call : function() {
                //console.log("Making phone call...")
            //}
        //}
        //return cellPhone;
    
        //(tip: comment all = ctrl + ;)
       //or:
    
        //return {
            //brand : 'SAMSUNG',
            //screenSize : {
                //vertical : 155,
                //horizontal : 75
            //},
            //batteryCapacity : 5000,
            //call : function() {
                //console.log("Making phone call...")
            //}
        //}
    
        //This is Hard Coding, that means it can't be parameterized
        // it isn't dynamic 
        // but, with function createCellPhone(...,...,...) {
        // and this:
    
        //return {
            //brand : brand,
            //screenSize : screenSize,
            //batteryCapacity : batteryCapacity,
            //call : function() {
                //console.log("Making phone call...")
            //}
        //}
       //or:
        return {
            brand,
            screenSize,
            batteryCapacity,
            call () {
                console.log("Making phone call...");
            }
        }
        // Now it is dynamic and parameterizable
    }
    // camelCase -> oneTwoThreeFour
    const cellPhone1 = createCellPhone('Xiaomi', 5.5, 5000);
    console.log(cellPhone1);