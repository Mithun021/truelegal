import api from "./axios";

export const createAppointment = (data) => {
    return api.post("/appointments", data);
};