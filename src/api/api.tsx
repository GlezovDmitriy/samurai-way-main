import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', // в запросе базовый УРЛ добавится автомат-ки
    headers: {
        'API-KEY': '15da1886-3f4f-40d7-b1cc-eec13c4fc684'
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {                //возвратит промис только с data объектом, лишнее не нужно
                return response.data           // в data осн.данные
            })
    }
}
