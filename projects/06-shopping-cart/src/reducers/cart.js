export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateCartInLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}


const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(state)
            newCart[productInCartIndex].quantity += 1
            updateCartInLocalStorage(newCart)
            return newCart
        }

        const newCart = [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ]

        updateCartInLocalStorage(newCart)
        return newCart
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newCart = state.filter(item => item.id !== id)
        updateCartInLocalStorage(newCart)
        return newCart
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateCartInLocalStorage([])
        return []
    }
}

export const cartReducer = (state, action) => {

    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]

    return updateState ? updateState(state, action) : state
}