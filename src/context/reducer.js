export const initialState = {
    user: null,
    token: null,
    item: [],
    playlists: [],
    discover_weekly: null
}

export const USER_TYPE = "USER";
export const TOKEN_TYPE = "TOKEN";
export const PLAYLISTS_TYPE = "PLAYLISTS";
export const DISCOVER_WEEKLY = "DISCOVER_WEEKLY";

export const reducer = (state, action) => {
    switch(action.type) {
        case USER_TYPE:
            return {
                ...state,
                user: action.payload
            };
        case TOKEN_TYPE:
            return {
                ...state,
                token: action.payload
            };
        case PLAYLISTS_TYPE:
            return {
                ...state,
                playlists: action.payload
            };
        case DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.payload
            };
        default :
            return state;
        
    }
}
