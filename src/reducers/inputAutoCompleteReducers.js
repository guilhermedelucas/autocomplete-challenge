export default function reducer(state={
    input: null,
    value: null,
    autoCompleteResult: [],
    results: [],
    totalResults: [],
    offset: 0,
    total: null,
    query: null,
}, action) {
    switch (action.type) {
        case "SEARCH_RESULT": {
            return {
                ...state,
                autoCompleteResult: action.payload.items,
                totalResults: action.payload.total,
                results: action.payload.items,
                input: true,
                query: action.query
            }
        }
        case "PAGINATE_MORE": {
            return {
                ...state,
                results: action.payload.items,
                totalResults: action.payload.total,
                offset: action.offset,
                input: true
            }
        }
        case "EMPTY_SEARCH": {
            return {
                ...state,
                autoCompleteResult: [],
                results: [],
                offset: 0,
                totalResults: null,
                input: null
            }
        }
        case "CLICK_ON_SUGGESTION": {
            return {
                ...state,
                autoCompleteResult: [],
                results: action.payload.items,
                totalResults: action.payload.total,
                value: action.query
            }
        }
        case "CLEAR_INPUT_VALUE": {
            return {
                ...state,
                value: null,
                totalResults: null,
                offset: 0
            }
        }
    }
    return state
}
