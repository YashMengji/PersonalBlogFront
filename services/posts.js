import { makeRequests } from "./makeRequests";;

export function createPost(formData) {
    return makeRequests('POST', '/posts', formData);
}

export function getPosts() {
    return makeRequests('GET', '/posts');
}

export function getPostImg(id) {
    return makeRequests('GET', `/posts/${id}/image`);
}