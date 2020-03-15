import {
    ADD_CONTACT,
    ERROR_CONTACT,
    CLEAR_ERROR,
    CLEAR_SUCCESS
   } from './type'
   
   export default (state,{type,payload})=>{
       switch(type){
       
          case ADD_CONTACT:
               return{
                   ...state,
                   success:payload.msg,
               }
             case ERROR_CONTACT:
                 return{
                   ...state,
                    errors:payload
                 }
  
         case CLEAR_ERROR:
                  return{
                    ...state,
                    errors:null
                     }
 
          case CLEAR_SUCCESS:
                     return{
                     ...state,
                      success:null
                      }
       
           default:
               return state
       }
   }