// 1. Copy and paste your prototype in here and refactor into class syntax.


// function CuboidMaker(attr) {
//     this.length = attr.length,
//     this.width = attr.width,
//     this.height = attr.height
//   }

//   CuboidMaker.prototype.volume = function volCub() {
//     return (this.length * this.width * this.height);
//   }

//   CuboidMaker.prototype.surfaceArea = function sArea() {
//     return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//   }
//   const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

class CuboidMaker2 {
    constructor(attr) {
        this.length = attr.length,
        this.width = attr.width,
        this.height = attr.height
    }
    
    volume = function volCub() {
        return (this.length * this.width * this.height);
    };

    surfaceArea = function sArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    };

}
  const cuboid2 = new CuboidMaker2({length: 4, width: 5, height: 5});
 
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker2 {
    constructor(cAttr) {
        super(cAttr)
    }

    volume2 = function volCub2() {
        return (this.length * this.width * this.height);
    };

    surfaceArea2 = function sArea2() {
        return (6 * (this.width ** 2));
    };
}

//since a cube has equal sizes:
const cube = new CubeMaker({length: 10, width: 10, height: 10});
console.log(cube.volume()); // 1000
console.log(cube.surfaceArea()); // 600