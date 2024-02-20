import {createSlice,current} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"cart" ,
    initialState:{
        items:[]
    },
    reducers:{  // reducer function
        addItem:(state,action)=>{   // case reducer for types of action
            const newItem = action.payload;
            
            let index=-1;
            for(let i=0;i<state.items.length;i++){
                if(current(state.items[i]).id===newItem.id){  // current of
                    index=i;
                    break;
                }
            }
            if(index!==-1){
                state.items[index].count=1+ current(state.items[index]).count;
            }
            else{
                newItem.count=1;
                state.items.push(newItem);
            }
            
            
        },
        removeItem:(state,action)=>{
            let index ;
            const removeItemId = action.payload;
            for(index=0;index<state.items.length;index++){
                if(current(state.items[index]).id === removeItemId){
                    break;
                }
            }
            console.log(index);
            if(current(state.items[index]).count==1){
                state.items.splice(index,1);
            }
            else{
                state.items[index].count=current(state.items[index]).count-1;
            }
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }

})
export const {addItem,removeItem,clearCart}= cartSlice.actions;  // action creators 
export default cartSlice.reducer;