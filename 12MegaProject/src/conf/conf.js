const conf = {
    appwriteUrl: String(import.meta.env.VITA_APPWRITE_URL),

    appwriteProjectId: String(import.meta.env.VITA_PROJECT_ID),
    
    appwriteDatabaseId: String(import.meta.env.VITA_DATABASE_ID),

    appwriteCollectionId: String(import.meta.env.VITA_COLLECTION_ID),

    appwriteBucketId: String(import.meta.env.VITA_BUCKET_ID),
    
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf