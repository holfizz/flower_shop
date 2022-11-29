import {createSlice} from "@reduxjs/toolkit";

interface initialStateType {
    cart:any[];
    cartTotalQuantity:number;
    cartTotalPrice:number;

}
const initialState : initialStateType = {
    cart: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '') : [],
    cartTotalQuantity:0,
    cartTotalPrice:0,
}

const CartControl = createSlice({
    name:'selectSlice',
    initialState,
    reducers: {

        addToCart(state : any , action: any){
            const itemIndex =  state.cart.findIndex((f:any)=>f.id===action.payload.id)
            if(itemIndex>=0){
                state.cart[itemIndex].cartQuantity +=1
            }else{
                state.cart.push({...action.payload, cartQuantity:1})
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cart))

        },
        increment(state:any, action:any) {
            const itemIndex =  state.cart.findIndex((f:any)=>f.id===action.payload.id)
            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -= 1
            }else if(state.cart[itemIndex].cartQuantity ===1){
                state.cart = state.cart.filter((cartItem:any)=> {
                    console.log('1')
                    return cartItem.id !== action.payload.id
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cart))
        },
        clearCart(state:any){
            state.cart =[]
            localStorage.setItem('cartItems', JSON.stringify(state.cart))

        },
        getTotal(state:any){
           let{total, quantity}= state.cart.reduce((cartTotal:any, cartItem:any)=>{
               const {price, cartQuantity} = cartItem
               const itemTotal = price * cartQuantity
               cartTotal.total += itemTotal
               cartTotal.quantity +=cartQuantity
               return cartTotal
           },{
               total:0,
               quantity:0,
               }
           )
            state.cartTotalQuantity = quantity
            state.cartTotalPrice = total
        },
        removeItem(state:any, action:any){
            state.cart = state.cart.filter((cartItem:any)=> {
                console.log('1')
                return cartItem.id !== action.payload.id
            })
        }
    }
})
export default CartControl.reducer
export const {addToCart, increment, clearCart, getTotal, removeItem} = CartControl.actions