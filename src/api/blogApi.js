import api from "../api/axios";

export const getBlogs = () => {
    return api.get("/blogs");
};

export const getBlog = (slug) => {
    return api.get(`/blogs/${slug}`);
};