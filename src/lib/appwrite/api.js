import { toast } from "react-toastify";
import { account, appwriteConfig, databases } from "./config";
import { ID, ImageGravity, Query } from "appwrite";

export async function createUserAccount(data) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      data.email,
      data.password
    );

    if (!newAccount) throw Error;
    console.log(newAccount, "newAccount");

    // const avatarUrl = avatars.getInitials(user.name);

    // const newUser = await saveUserToDB({
    //   accountId: newAccount.$id,
    //   name: newAccount.name,
    //   email: newAccount.email,
    //   username: user.username,
    //   imageUrl: avatarUrl,
    // });

    // console.log(newUser, "newUser");

    return newAccount;
  } catch (error) {
    toast.error(error.message);
    console.log(error, "createUserAccount");
    return error;
  }
}

// export async function saveUserToDB(user) {
//   try {
//     console.log(user, "saveUserToDBsaveUserToDB");
//     const newUser = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       ID.unique(),
//       user
//     );

//     return newUser;
//   } catch (error) {
//     console.log(error, "saveUserToDB");
//   }
// }

export async function signInAccount(user) {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );
    console.log({ session });

    return session;
  } catch (error) {
    toast.error(error.message);
    console.log(error, "signInAccount");
  }
}

export async function updateAccount(data) {
  try {
    await account.updateName(data.name);
    await account.updateEmail(data.email, data.password);
    await account.updatePhone(data.phone, data.password);
    console.log("Profile updated successfully");
  } catch (error) {
    toast.error(error.message);
    console.log(error, "updateAccount");
  }
}
export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    console.log(error, "error signOutAccount");
  }
}
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    console.log(error, "getaccount");
  }
}

// ============================== GET USER
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    console.log({ currentAccount });

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error, "getCurrentUser");
    return null;
  }
}

// export async function createPost(post: INewPost) {
//   try {
//     // Upload file to appwrite storage
//     const uploadedFile = await uploadFile(post.file[0]);

//     if (!uploadedFile) throw Error;

//     // Get file url
//     const fileUrl = getFilePreview(uploadedFile.$id);
//     console.log({ fileUrl });
//     if (!fileUrl) {
//       await deleteFile(uploadedFile.$id);
//       throw Error;
//     }

//     // Convert tags into array
//     const tags = post.tags?.replace(/ /g, "").split(",") || [];

//     // Create post
//     const newPost = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       ID.unique(),
//       {
//         creator: post.userId,
//         caption: post.caption,
//         imageUrl: fileUrl,
//         imageId: uploadedFile.$id,
//         location: post.location,
//         tags: tags,
//       }
//     );

//     if (!newPost) {
//       await deleteFile(uploadedFile.$id);
//       throw Error;
//     }

//     return newPost;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function uploadFile(file: File) {
//   try {
//     const uploadedFile = await storage.createFile(
//       appwriteConfig.storageId,
//       ID.unique(),
//       file
//     );

//     return uploadedFile;
//   } catch (error) {
//     console.log(error);
//   }
// }
// export function getFilePreview(fileId: string) {
//   try {
//     const fileUrl = storage.getFilePreview(
//       appwriteConfig.storageId,
//       fileId,
//       2000,
//       2000,
//       ImageGravity.Top,
//       100
//     );

//     if (!fileUrl) throw Error;

//     return fileUrl;
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function deleteFile(fileId: string) {
//   try {
//     await storage.deleteFile(appwriteConfig.storageId, fileId);

//     return { status: "ok" };
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getRecentPosts() {
//   const posts = await databases.listDocuments(
//     appwriteConfig.databaseId,
//     appwriteConfig.postCollectionId,
//     [Query.orderDesc("$createdAt"), Query.limit(20)]
//   );
//   if (!posts) throw Error;
//   return posts;
// }

// export async function likePost(postId: string, likesArray: string[]) {
//   try {
//     const updatedPost = await databases.updateDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       postId,
//       {
//         likes:likesArray,
//       }
//     );
//     if (!updatedPost) throw Error;

//     return updatedPost;
//   } catch (error) {
//     console.log(error, "likePost");
//   }
// }
// export async function savePost(userId: string, postId: string) {
//   try {
//     const updatedPost = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.savesCollectionId,
//       ID.unique(),
//       {
//         user: userId,
//         post: postId,
//       }
//     );
//     if (!updatedPost) throw Error;
//     return updatedPost;
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function deleteSavedPost(saveRecordId: string) {
//   try {
//     const statusCode = await databases.deleteDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.savesCollectionId,
//       saveRecordId
//     );
//     if (!statusCode) throw Error;
//     return { status: "ok" };
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getPostById(postId: string) {
//   try {
//     const post = await databases.getDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       postId
//     );
//     return post;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function updatePost(post: IUpdatePost) {
//   const hasFileToUpdate=post.file.length>0;
//   try {
//     let image={
//       imageUrl:post.imageUrl,
//       imageId:post.imageId
//     }
//     if(hasFileToUpdate){
//       const uploadedFile = await uploadFile(post.file[0]);
//       if (!uploadedFile) throw Error;
//       const fileUrl = getFilePreview(uploadedFile.$id);
//       console.log({ fileUrl });
//       if (!fileUrl) {
//         await deleteFile(uploadedFile.$id);
//         throw Error;
//       }

//       image={...image,imageUrl:fileUrl,imageId:uploadedFile.$id}

//     }

//     const tags = post.tags?.replace(/ /g, "").split(",") || [];

//     const updatedPost = await databases.updateDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       post.postId,
//       {
//         caption: post.caption,
//         imageUrl: image.imageUrl,
//         imageId: image.imageId,
//         location: post.location,
//         tags: tags,
//       }
//     );

//     if (!updatedPost) {
//       await deleteFile(post.imageId);
//       throw Error;
//     }

//     return updatedPost;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function deletePost(postId:string,imageId:string){

//   if(!postId || imageId) throw Error
//   try {
//     await databases.deleteDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       postId
//     );

//     return { status: "ok" };
//   } catch (error) {
//     console.log(error);
//   }

// }

export async function createClient(client) {
  try {
    const newClient = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.clientCollectionId,
      ID.unique(),
      {...client,status:"pending"}
    );

    if (!newClient) throw Error;
    console.log(newClient, "newAccount");

    return newClient;
  } catch (error) {
    toast.error(error.message);
    console.log(error, "createUserAccount");
    return error;
  }
}
export async function getAllClients() {
  try {
    const allClients = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.clientCollectionId
    );

    if (!allClients) throw Error;
    console.log(allClients, "newAccount");

    return allClients;
  } catch (error) {
    toast.error(error.message);
    console.log(error, "createUserAccount");
    return error;
  }
}
