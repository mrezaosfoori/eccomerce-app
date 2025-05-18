import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: process.env.REACT_APP_PROJECT_ID,
  URL: process.env.REACT_APP_APPWRITE_URL,

};

export const client = new Client();



client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.URL);

export const account = new Account(client);


export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
