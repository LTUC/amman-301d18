'use strict';

let templateId = '#neighborhood-template';

let neighborhoods = []; //array of Neighborhood objects

function Neighborhood(rawDataObject) {
  this.name = rawDataObject.name;
  this.city = rawDataObject.city;
  this.population = rawDataObject.population;
  this.founded = rawDataObject.founded;
  this.body = rawDataObject.body;
  neighborhoods.push(this);
}


Neighborhood.prototype.renderObject = function () {
  console.log(this);
  // Demo Part 1: Build it all with jQuery
  // let container = $('#div1').append(`<h2>${this.name}</h2><p>Part of: ${this.city}</p><p>Part of: ${this.population}</p><p>Part of: ${this.founded}`);
  // // return container;
  // $('#neighborhoods').append(container);

  // Demo Part 2: Use jQuery to clone
  // let container = $('.template').clone();
  // container.removeClass('template')
  // container.find('.name').text(this.name);
  // container.find('.cityName').text(`Part of: ${this.city}`);
  // container.find('.population').text(`Current population: ${this.population}`);
  // container.find('.founded').text(`Founded On: ${this.founded}`);
  // container.find('.body').html(this.body);
  // $('#neighborhoods').append(container);

  
  // Demo Part 3: Mustache
  let template = $('#neighborhoodTemplate').html();
  let neighborhoodMergedTemplate = Mustache.render(template,this);
  $('#neighborhoods').append(neighborhoodMergedTemplate);
};



neighborhoodDataSet.forEach(neighborhoodObject => {
  // console.log(neighborhoodObject);
  let newObj = new Neighborhood(neighborhoodObject);
  console.log(newObj);
  newObj.renderObject();
});

// {/* <div>
//         <h2>{{name}}</h2>
//         <p>{{city}}</p>
//         <p>{{population}}</p>
//         <p>{{founded}}</p>
//         <p>{{body}}</p>
//       </div> */}

// {
//   name:        'Marj Alhamam',
//   city:        'Amman',
//   population:  '23,566',
//   founded:     '1820',
//   body:        '<p>This is example text to show you how <strong>HTML</strong> can be escaped using <em>Mustache</em>.</p>'
// }

// <div>
// <h2>Marj Alhamam</h2>
// <p>Amman</p>
// <p>23,566</p>
// <p>1820</p>
// <p></p>
// </div>

