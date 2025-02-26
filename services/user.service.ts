import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/user";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data.data;
});

export const fetchUser = createAsyncThunk('users/fetchUser', async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data.data;
});

export const createUser = createAsyncThunk('users/createUser', async (user: User) => {
  const response = await axios.post(`${API_BASE_URL}`, user);
  return response.data.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, user }: { id: string; user: User }) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, user);
  return response.data.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: string) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
  return id;
});