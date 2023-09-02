//To run it using Postman:
/* 1. Install Postman:
If you don't already have Postman installed, download and install it from the official website.

2. Set Up a New Collection:
Open Postman.
Click on the "New" button (top left) and choose "Collection".
Name the collection, e.g., "PokeAPI Tests".
3. Create Requests for the Tests:
For each test, you'll create a request inside the collection:

Click on the collection name.
Click on "Add requests".
Fill in the request details:
Name: Name of the test (e.g., "Pokemon Endpoint Availability").
HTTP Method: GET (as all our tests use GET).
Request URL: The URL for the test (e.g., https://pokeapi.co/api/v2/pokemon/).
4. Add Tests:
For each request, you can add tests:

Click on the "Tests" tab of the request.
Add the test code. Postman uses JavaScript for tests.

5. Save & Execute Tests:
After adding the tests, click on the "Save" button.
Click on the "Send" button to execute the request and its tests.
The test results will appear at the bottom of the window.
6. Repeat:
Repeat steps 3-5 for each test you want to add.

7. Export and Share (Optional):
If you wish to share the tests:

Right-click on the collection.
Choose "Export" and save the file.
Share the exported file. Others can then import it into their Postman and run the tests.

 */


//1. Endpoint Availability:
//Test that the Pokémon endpoint (/pokemon/) is accessible:
// For the request with URL: https://pokeapi.co/api/v2/pokemon/
pm.test("Pokemon endpoint is accessible", function () {
    pm.response.to.have.status(200);
});

//Test that the Generation endpoint (/generation/) is accessible:
// For the request with URL: https://pokeapi.co/api/v2/generation/
pm.test("Generation endpoint is accessible", function () {
    pm.response.to.have.status(200);
});

//Test that the Pokédex endpoint (/pokedex/) is accessible:
// For the request with URL: https://pokeapi.co/api/v2/pokedex/
pm.test("Pokedex endpoint is accessible", function () {
    pm.response.to.have.status(200);
});

//2. Data Validation:
//Confirm Pokémon number 812 is Rillaboom:
pm.test("Pokemon 812 is Rillaboom", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("rillaboom");
});

//Check that the 5th generation of games is set in Unova, and there are two resources in the version groups array:
pm.test("5th generation details are correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.main_region.name).to.eql("unova");
    pm.expect(jsonData.version_groups.length).to.eql(2);
});

//Search for all the Pokémon in the Kanto dex and confirm a known Pokémon (e.g., Bulbasaur) is in the result:
pm.test("Bulbasaur is in the Kanto dex", function () {
    var jsonData = pm.response.json();
    var pokemonNames = jsonData.pokemon_entries.map(entry => entry.pokemon_species.name);
    pm.expect(pokemonNames).to.include("bulbasaur");
});


//3. Structure Validation:
//Ensure the Pokémon endpoint response contains keys like name, id, and types:
pm.test("Pokemon structure is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("types");
});

//Ensure the Generation endpoint response contains keys like name, id, and version_groups:
pm.test("Generation structure is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("version_groups");
});

