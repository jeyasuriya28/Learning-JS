//object can be assign by using curly braces {}
//object can be filled with unorderred data.
//this data in object can be organizd by key value pairs. key is a variable name that holds value.

//eg 

let spaceship = {
    FuelType : 'diesel',     //object assigned b curly braces
    color : 'silver'         //key is the fueltype
}                            // diesel and silver is the value  the whole is properties

//Accessing properties
//we can use dot notation to access properties

let school = {
  classes: 'One to Twelve',
  Strength: 500
};

let school1 = school.classes;                     //dot property // 

//Bracket notation use [] to access a key value.
// to use bracket to access we can pass property name as a string

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
   let isActive = spaceship2['Active Mission']           // spaceship2 object and fueltype property name
console.log(isActive);

//property assignment we can use . [] and = to add new key value pairs to existing property

let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  
  
  spaceship3.color = 'glorious gold';
  
  spaceship3.numEngines = 9;
  
  delete spaceship3['Secret Mission'];


  //Nested Object object inside another objects 
  let spaceship4 = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
//pass by refrence : parameters are passed as an arguement it refers to riginal value. so it change affects the original value
let spaceship5 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };

  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado'
  }

  greenEnergy(spaceship5);


//iterating throught objects we can use for in loop to iterate through objects

/*syntax:
 for (let variableName in outerObject.innerObject) {
  console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
};
*/

let spaceship6 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        }
    }
};

for (let crewMember in spaceship6.crew) {
    console.log(`${crewMember}: ${spaceship6.crew[crewMember].name}`)
};
/*
1. objects stores collection of key value pairs
2. Each key value pair is a property, when property is a function it is known as methods
3. the object literal is composed of comma seperated key value pairs surrounded by curly braces
4. we can edit reassign the value in object by using dot notation or []
5. we can add methods to our object literals by adding key value pairs using anonymous function
6. nested object by chaining operator
7.we can change value to object by using pass by refrence and pass by vlaue
8.we can iterate objects by for in loop
9. we can change object property when is declared by const keyword
*/


//this keyword: calling ibject which provide access to calling object property.

const dress = {
    model: 'Shrug',
    clothType: 'cotton',
    provideInfo() {
        return `I purchased ${model} and cloth type is ${clothType}.`

    }
};
console.log(this.dress)

//privacy place_ underscore before the name of a property means property should not be altered

//getters : getters are the method that return internal properties of an objet
//getters can be used to perform an action on data whwn getting property
//getters can return different values using conditionals
// ingetter we can access properties of calling object using this keyword

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };
  
  console.log(robot.energyLevel);

  //setters: setters we can reassign value of existing property with an object
  const robot1 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }   
    } 
  };
  
  robot.numOfSensors = 100;
  console.log(robot1.numOfSensors);

  //factory function it a function that returns a object that can be reused to make multiple object instance.
  //factory function also have parameters allowing us to customize the object

  const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        
    beep() {
        console.log('Beep Boop')
     }
    };
  }
const tinCan= robotFactory('PS-1, true');
tinCan.beep();
  
  
  
// property value shortand method is the property name as same as parameter
function robotFactory1(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  const newRobot = robotFactory1('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


//destructing assignment we an create av variable with the name of an objects key that is wrapped in curly braces {} and assign it to object

  const robot2 = {
    model: '1E78V',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Pew');
        },
    }
  };

  const{functionality} = robot2;
  functionality.beep();

  /*
  1. object method belongs to calling object
  2. this keyword refers to calling object and can be used to access properties of calling objects
  3. methods do not automatically have access to other internal properties of calling object
  4. the value of this depends on where this is being accessed
  5. arrrow function does not hepls if we want to access internal properties
  6. using underscore before property name means do not chane value by others
  7. setters and getters used to assigning property
  */

  //build in objects eg

  const food = {
    dish: 'lunch',
    menu: true,
    recipe: 'continental'
  };

  const foodKeys = object.keys(food);
  console.log(foodKeys);


  const foodEntries = object.entries(food)
  console.log(foodEntries);

  const newFood = object.assign({Indian: true, Chinese: false}, food);
