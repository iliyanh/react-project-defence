export const host = "http://localhost:3030"


async function request(method,token, url, data) {

    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    try {
        const response = await fetch(host + url, options)


        if (response.status === 403) {
            localStorage.removeItem("user");
        }

        if (response.status === 204) {
            return response
        } 
        const result = await response.json()
        
        if (response.ok == false) {
            throw new Error(result.message);
        }

        return result;

    } catch (error) {
        alert(error.message);
        throw error
    }

}
export const requestFactory = (token) => {
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'PATCH', token),
        delete: request.bind(null, 'DELETE', token),
    }
};
