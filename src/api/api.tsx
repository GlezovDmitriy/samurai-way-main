import axios from "axios";

const  baseUrl = '`https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY':'15da1886-3f4f-40d7-b1cc-eec13c4fc684'
    }
})
export const getUsers = (currentPage:number,pageSize:number)=>{
   return  axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials:true
        })
       .then(response => {                //возвратит промис только с data объектом, лишнее не нужно
           return response.data           // в data осн.данные
       })
}
