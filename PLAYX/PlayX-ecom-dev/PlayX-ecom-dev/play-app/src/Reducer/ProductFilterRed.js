import React from 'react'

export const ProdutFilterRed=(state,action) =>{

    switch(action.type){
        case "sortBy":
        return {...state,sortBy: action.payload}
        case  "Game":
            return {...state, Game : !state.Game}
        case "accessories":
            return {...state,Accessories : !state.Accessories}
            case "vr":
                return {...state, VR : !state.VR}
                case "console":
                    return {...state, Console : !state.Console}
                case "rating":
                    return {...state, rating: action.payload}
                case "slider":
                    return {...state, newPrice : action.payload}
                    case "clearAll":
                        return {
                            sortBy: "",
                      Game : false,
                   Accessories : false,
                     VR : false,
                 Console : false,
                  rating : 0,
                   newPrice : 9000,
                        }
                default: 
               return state
    }
    
}