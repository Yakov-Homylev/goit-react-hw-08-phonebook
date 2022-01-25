import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61e92eaa7bc0550017bc60f7.mockapi.io",
  }),
  tagTypes: ["contacts"],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => "/contacts",
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
