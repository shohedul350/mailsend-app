import React ,{useReducer}from 'react'
import axios from 'axios'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    ERROR_CONTACT,
    CLEAR_ERROR,
    CLEAR_SUCCESS
   } from './type'

 const ContactState = (props) => {

    const initialState={
        errors:null,
        success:null
    }

    const [state,dispatch]=useReducer(contactReducer,initialState)



//add contact
const addContact=async (contact)=>{
    const config={
        header:{
            'Content-Type':'application/json'
        }
    }
    try {
       const res=await axios.post('/api/send',contact,config)
        dispatch({
            type:ADD_CONTACT,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CONTACT,
            payload:error.response.data
        })
    }
   
}





//clear error

const clearError=()=>{
    dispatch(
        {
            type:CLEAR_ERROR,
            
        }
    )
}

//clear success
const clearSuccess =()=>{
     setTimeout(() => { 
     dispatch({
        type:CLEAR_SUCCESS,
     })
    }, 3000);
  }

    return (
      <contactContext.Provider
      value={{
         errors: state.error,
         success:state.success,
         addContact,
         clearError,
        clearSuccess,
      }}
      
      >{props.children}</contactContext.Provider>
    )
}
  export default ContactState; 