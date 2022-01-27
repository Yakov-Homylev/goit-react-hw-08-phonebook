import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const data = getState();
      const token = data.authorization.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["contacts"],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: "/contacts",
      }),
      providesTags: ["contacts"],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: "/contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
