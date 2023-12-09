import { requestFactory } from './requester';

const request = requestFactory();

export const getAll = async (id) => {
    const searchQuery = encodeURIComponent(`id="${id}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`/data/comments?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (id, comment) => {
    const result = await request.post("/data/comments", { id, comment });

    return result;
};