import { TMeta, TResponseSuccess } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getAllSchedule: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/schedule",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformErrorResponse: (response: [], meta: TMeta) => {
    //     return {
    //       schedules: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.schedule],
    // }),

    getAllSchedule: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
      transformErrorResponse: (response: any[], meta: TMeta) => {
        return {
          schedule: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),

    getsingleSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "GET",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useGetAllScheduleQuery,
  useCreateScheduleMutation,
  useDeleteScheduleMutation,
  useGetsingleScheduleMutation,
} = scheduleApi;
