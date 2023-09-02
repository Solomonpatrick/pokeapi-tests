# pokeapi-tests
PokeAPI Tests
This repository contains a set of tests designed to validate the functionality and data accuracy of the PokeAPI.


Overview
The tests are divided into three categories:
1. Endpoint Availability: Tests to ensure the PokeAPI endpoints are accessible.
2. Data Validation: Tests to confirm that specific data points from the API match expected values.
3. Structure Validation: Tests to ensure that the response structure of the API adheres to expected formats.


Prerequisites:
1. Python (version 3.6 or higher)
2. 'requests' library


Setup:
1. Install the required Python libraries:
pip install requests
2. Clone this repository or download the 'pokeapi_tests.py' file.


Running the Tests:
To execute the tests, navigate to the directory containing the 'pokeapi_tests.py' file and run:
python pokeapi_tests.py

If a test passes, you won't see any output. However, if a test fails, an assertion error will be raised, providing details about the failure.


Advanced Testing with pytest:
For a more structured approach with detailed test reports, consider using 'pytest'.

1. Install pytest:
pip install pytest

2. Run the tests using pytest:
pytest pokeapi_tests.py

This will provide a detailed report of passed and failed tests.
