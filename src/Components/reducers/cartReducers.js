import Tassoni from '../../images/tassoni.png'
import BirraMoretti33 from '../../images/birramoretti33.jpg'
import { ADD_TO_CART } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Birra Moretti 33cl', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:3,img:BirraMoretti33},
        {id:2,title:'Tassoni', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:2,img: Tassoni}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        console.log('ADD TO CART')
        let addedItem = state.items.find(item => item.id === action.id)
        console.log(addedItem)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item => action.id === item.id)
        console.log(existed_item)
        if(existed_item){
            console.log('Esiste')
            addedItem.quantity += 1 
            return{
                ...state,
                total: state.total + addedItem.price 
            }
        }
        else{
            console.log('Non esiste')
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
          
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }
    else{
        return state
    }
}

export default cartReducer;