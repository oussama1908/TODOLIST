import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
export const  register=createAsyncThunk("/api/register",async(data,{rejectWithValue})=>{
    try {
        const res= await axios.post("/registre",data)
        console.log(res)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
export const  login=createAsyncThunk("/api/login",async(data,{rejectWithValue})=>{
    try {
        const res= await axios.post("http://localhost:5000/api/login",data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
    const userSlice=createSlice({
    name:"user",
    initialState:{
        userdata:{},
        isLoading:false,
        error:null,
        token:localStorage.getItem("token")|| null,
        isAuth: localStorage.getItem("isAuth")|| false
    },
    reducers:{
         logout:(state)=>{
            
            state.isAuth=false
            state.token=null
            localStorage.removeItem("isAuth")
            localStorage.removeItem("token")

         }
    },
    extraReducers:{
        [register.pending]:(state)=>{
            state.isLoading=true

        },
        [register.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.error=null
            state.token=action.payload.token
            state.isAuth=true
            localStorage.setItem("isAuth",state.isAuth)
            localStorage.setItem("token",state.token)
        },
        [register.rejected]:(state,action)=>{
            state.isLoading=false
            state.token=null
            state.isAuth=false
            state.error=action.error
        },
        [login.pending]:(state)=>{
            state.isLoading=false

        },
        [login.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.error=null
            state.token=action.payload.token
            state.isAuth=true
            localStorage.setItem("isAuth",state.isAuth)
            localStorage.setItem("token",state.token)
        },
        [login.rejected]:(state,action)=>{
            state.isLoading=false
            state.token=null
            state.isAuth=false
            state.error=action.error
        }
    }
})

export default userSlice.reducer
export const { logout } = userSlice.actions; 
