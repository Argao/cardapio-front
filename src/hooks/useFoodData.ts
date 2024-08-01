import axios, {AxiosPromise} from "axios";
import {FoodData} from "../interface/FoodData.ts";
import {useQuery} from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async():AxiosPromise<FoodData[]> =>{
    return axios.get(API_URL + '/food'); //response
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}