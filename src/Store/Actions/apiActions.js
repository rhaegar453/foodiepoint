import * as actions from './../ActionTypes/API';
import axios from 'axios';

export const requestApiStarted=()=>{
    return {
        type:actions.REQUEST_API_STARTED
    }
}

export const requestAPISuccess=(recipes)=>{
    return{
        type:actions.REQUEST_API_SUCCESS,
        payload:recipes
    }
}

export const requestApiFailed=(err)=>{
    return{
        type:actions.REQUEST_API_FAILED,
        payload:err
    }
}

export const requestAPI=(ingredients,dish)=>{
    return dispatch=>{
        let config={headers: {'Content-Type':'text/plain',"Access-Control-Allow-Origin":"*"
        ,"Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}};
        let url=`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        dispatch(requestApiStarted());
        axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`, {}).
        then(response=>{
            dispatch(requestAPISuccess(response.data.results));
            console.log(response.data.results);
        })
        .catch((err)=>{
            dispatch(requestApiFailed(err));
            console.log(err);
        });
    }
}

export const makeFavorite=(item)=>{
    return {
        type:actions.ADD_TO_FAVORITES,
        payload:item
    }
}

export const removeFavorite=(item)=>{
    return{
        type:actions.REMOVE_FROM_FAVORITES,
        payload:item
    }
}