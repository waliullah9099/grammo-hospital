import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSchedule: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
    }),

    getsingleSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "GET",
      }),
    }),

    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllScheduleQuery,
  useCreateScheduleMutation,
  useDeleteScheduleMutation,
  useGetsingleScheduleMutation,
} = scheduleApi;
