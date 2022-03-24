import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URI = `${process.env.NEXT_PUBLIC_API_HOST}/api/graphql`;

export const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
  headers: {
    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkViZEVOdDVTUVctNWlLQVpYNE1JUCJ9.eyJpc3MiOiJodHRwczovL3NoZWx0ZXItaW4tdWEuZXUuYXV0aDAuY29tLyIsInN1YiI6IkNKWXNJSHUxbUc3dVJNbHNZOXRGNE5HRzAyeEg2Q2x6QGNsaWVudHMiLCJhdWQiOiJodHRwczovL3NoZWx0ZXItaW4tdWEuZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE2NDgwNjM2NjQsImV4cCI6MTY0ODE1MDA2NCwiYXpwIjoiQ0pZc0lIdTFtRzd1Uk1sc1k5dEY0TkdHMDJ4SDZDbHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.c1bMqAsuE4btbDsfJKMG6wAxkw0TJO1womEqYbxxpkvHxThArNeTiHvO6wSyLI_Iy-DEeuVb_QwInukgPYTfhmaQBTbbgmrHSQ2DqeU1ihVTGkKd_8UJjQFR1pNhsaVR1sxslvrNbEh5aOCY2ORxagVwTJppA3C2msg6gJ_RWMdYgSm28hMYVzBH9yxZWkqyp50dUOXDftlwWFooJQKvMrI7tlrQpSKIZKG5XZ6bF6MlsKerfkk_3CaZJJFZQMBXWaYkCEITsjnwX50S9dqCNJZiTq86zDzz7pFHeGfSEsrxORxGeC6ds2oykP1swLl1Ek5La8MtVOrnIx9-OVjEKw',
  }
});
