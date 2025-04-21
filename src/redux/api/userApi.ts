import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleUser: builder.query({
            query: (id) => ({
                url: '/user/me',
                method: 'GET',
            }),
            providesTags: [tagTypes.user],
        })
    })
})


export const { useGetSingleUserQuery } = userApi;