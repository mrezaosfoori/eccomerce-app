import { useMutation, useQuery } from "@tanstack/react-query";

import { getIranCities } from "../api/api";
import {
  createClient,
  createUserAccount,
  getAccount,
  getAllClients,
  getCurrentUser,
  signInAccount,
  signOutAccount,
  updateAccount,
} from "../appwrite/api";

export const useCreateNewUser = () => {
  return useMutation({
    mutationFn: (data) => createUserAccount(data),
  });
};
export const useSignInUser = () => {
  return useMutation({
    mutationFn: (data) => signInAccount(data),
  });
};
export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: (data) => updateAccount(data),
  });
};
export const useSignOutUser = () => {
  return useMutation({
    mutationFn: (data) => signOutAccount(data),
  });
};
export const useGetAccount = () => {
  return useQuery({
    queryKey: ["getAccount"],
    queryFn: getAccount,
  });
};
export const useGetCurrentUser = () => {
  return useMutation({
    mutationFn: (data) => getCurrentUser(data),
  });
};


export const useCreateClient = () => {
  return useMutation({
    mutationFn: (data) => createClient(data),
  });
};

export const useGetAllClients = () => {
  return useQuery({
    queryKey: ["getAllClients"],
    queryFn: getAllClients,
  });
};
