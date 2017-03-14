import axios from 'axios';

export function searchTyped(string){
    if (string.length > 0) {
    return function(dispatch) {
        return axios.get("https://api.spotify.com/v1/search?q=" + string + "&type=artist&offset=0&limit=5")
        .then((response) => {
            console.log(response);
            dispatch({type: "SEARCH_RESULT", payload: response.data.artists, query: string})
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_REJECTED"})
        })

    }
} else {
    return {type: "EMPTY_SEARCH"}
}
}


export function clickOnSuggestion(artist) {
    return function(dispatch) {
        return axios.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist&offset=0&limit=5")
        .then((response) => {
            console.log(response);
            dispatch({type: "CLICK_ON_SUGGESTION", payload: response.data.artists, query: artist})
        })
    }
}

export function enterKeyDown(artist) {
    return function(dispatch) {
        return axios.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist&offset=0&limit=5")
        .then((response) => {
            console.log(response);
            dispatch({type: "CLICK_ON_SUGGESTION", payload: response.data.artists, query: artist})
        })
    }
}

export function clearInputValue() {
    return {
        type: "CLEAR_INPUT_VALUE",
    }
}


export function paginateMore(offset, string){
    let newOffset = offset + 5;
    return function(dispatch) {
        return axios.get("https://api.spotify.com/v1/search?q=" + string + "&type=artist&offset=" + newOffset + "&limit=5")
        .then((response) => {
            console.log(response);
            dispatch({type: "PAGINATE_MORE", payload: response.data.artists, offset: newOffset})
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_REJECTED"})
        })
    }
}

export function paginateDown(offset, string){
    let newOffset = offset - 5;
    return function(dispatch) {
        return axios.get("https://api.spotify.com/v1/search?q=" + string + "&type=artist&offset=" + newOffset + "&limit=5")
        .then((response) => {
            console.log(response);
            dispatch({type: "PAGINATE_MORE", payload: response.data.artists, offset: newOffset})
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_REJECTED"})
        })
    }
}
