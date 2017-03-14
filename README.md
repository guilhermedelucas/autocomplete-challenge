# guilhermedelucas-quandoo-challenge

Website using Spotify API, to develop the Quandoo Autocomplete Challenge.
Search for your favorite artist, click and redirect to Spotify artist page.

#Features:
    * React with Redux
    * Component InputAutocomplete dispatch all the input actions:
        - Make the request to the Spotify API
        - Set the url to return the limit of 5 results to the search bar
        - Keyboard events, ArrowDown, ArrowUp, Enter
        - Mouse hover, click on the suggestion
        - Live data
    * Component DisplayResults:
        - Show the results
        - Create buttons when results are more than five.
    * Server running on Node

#How to use
    * Clone the repo access https://guilherme-quandoochallenge.herokuapp.com/ to test
    * For local machine
        - On terminal type npm install (Node npm required)
        - To start the app, type node index.js
        - Open the browser on localhost:8080
    * Webpack is ready to deploy build the app and deploy, just run npm run build on the terminal
