import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';

const create = (personObject) => {
    const request = axios.post(baseUrl, personObject);
    return request.then((response) => response.data);
};

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
}

const deleteItem = (id) => {
    const request = axios.delete(baseUrl + `/${id}`);
    return request.then(response => response);
}

const updateItem = (id, updatedObject) => {
    const request = axios.put(baseUrl + `/${id}`, updatedObject);
    return request.then(response => response.data);
}

export default {
    create,
    getAll,
    deleteItem,
    updateItem
}