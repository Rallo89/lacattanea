import Tassoni from '../../images/tassoni.png'
import BirraMoretti33 from '../../images/birramoretti33.jpg'


const initState = {
    items: [
        {id:1,title:'Birra Moretti 33cl', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:3,img:BirraMoretti33},
        {id:2,title:'Tassoni', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:2,img: Tassoni}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;