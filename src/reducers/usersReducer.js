export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            // remember in reducers need to return a new piece of data because behind the scenes redux is doing a simple comparison of if the data being returned is from the
            // same place of memory that it's stored in. Need to either create a new Object or Array.
            return [...state, action.payload];
        default:
            return state;
    }
}