const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10)
    dinosaur1 = Dinosaur('t-rex', 'herbivore', 10)
    dinosaur2 = Dinosaur('bellusaurus', 'carnivore', 100)
    dinosaur3 = Dinosaur('eoraptor', 'omivore', 1)
    dinosaur4 = Dinosaur('canada goose', 'carivore', 40)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });
  
  it('should be able to add a dinosaur to its collection', function(){
    park.addADinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.removeADinosaur(dinosaur1);
    const expected = [dinosaur2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur4);
    const expected = 141
    assert.strictEqual(park.calculateAmountofVistorsPerDay(), expected)
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
