export const host = "http://localhost:3030"


async function request(method, url, data, token) {

    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    if (token) {
        const userToken = token.accessToken;
        options.headers["X-Authorization"] = userToken;
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
export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");