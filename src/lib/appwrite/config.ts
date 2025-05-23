import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_PROJECT_ID,
  URL: import.meta.env.VITE_APPWRITE_URL,

};

export const client = new Client();



client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.URL);

export const account = new Account(client);


export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
