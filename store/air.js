export const state = () => ({
    allPrice:0
})

export const mutations = {
    setAllPrice(state,price){
        state.allPrice = price
    }
}