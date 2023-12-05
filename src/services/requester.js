import { showErrorMessage, showSuccessMessage } from "../utils/errorHandler";

export const host = "http://localhost:3030"



async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        
        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }
     

    try {
        const response = await fetch(host + url, options)

        // if (response.status === 403) {
        //     throw new Error(response.message);
        // }

        if (response.status === 204) {
            return {}
        }
        const result = await response.json()

        if (response.ok == false) {
            throw new Error(result.message);
        }

        return result;

    } catch (error) {
        showErrorMessage(error.message)
        throw new Error(error.message)
    }

}
export const requestFactory = () => {
    return {
        get: request.bind(null, 'GET'),
        post: request.bind(null, 'POST'),
        put: request.bind(null, 'PUT'),
        patch: request.bind(null, 'PATCH'),
        delete: request.bind(null, 'DELETE'),
    }
};
