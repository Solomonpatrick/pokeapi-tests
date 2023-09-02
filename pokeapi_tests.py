import requests

API_BASE_URL = "https://pokeapi.co/api/v2/"

# Test 1: Endpoint Availability
def test_pokemon_endpoint_availability():
    response = requests.get(API_BASE_URL + "pokemon/")
    assert response.status_code == 200

def test_generation_endpoint_availability():
    response = requests.get(API_BASE_URL + "generation/")
    assert response.status_code == 200

def test_pokedex_endpoint_availability():
    response = requests.get(API_BASE_URL + "pokedex/")
    assert response.status_code == 200

# Test 2: Data Validation
def test_pokemon_812_is_rillaboom():
    response = requests.get(API_BASE_URL + "pokemon/812/")
    data = response.json()
    assert data['name'] == "rillaboom"

def test_5th_generation_details():
    response = requests.get(API_BASE_URL + "generation/5/")
    data = response.json()
    assert data['name'] == "unova"
    assert len(data['version_groups']) == 2

def test_kanto_pokedex():
    response = requests.get(API_BASE_URL + "pokedex/kanto/")
    data = response.json()
    known_pokemon = "bulbasaur"
    pokemon_list = [pokemon['pokemon_species']['name'] for pokemon in data['pokemon_entries']]
    assert known_pokemon in pokemon_list

# Test 3: Structure Validation
def test_pokemon_structure():
    response = requests.get(API_BASE_URL + "pokemon/1/")
    data = response.json()
    assert 'name' in data
    assert 'id' in data
    assert 'types' in data

def test_generation_structure():
    response = requests.get(API_BASE_URL + "generation/1/")
    data = response.json()
    assert 'name' in data
    assert 'id' in data
    assert 'version_groups' in data
