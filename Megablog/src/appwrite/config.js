import conf from "../config/conf.js";
import { Account, ID, Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.dbId,
        conf.collId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      throw error; // Propagate the error
    }
  }
  
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.dbId,
        conf.collId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
      throw error; // Propagate the error
    }
  }


  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(conf.dbId, conf.collId, slug);
      return true;
    } catch (error) {
      console.log("Appwrite error: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.dbId, conf.collId, slug);
    } catch (error) {
      console.log("Appwrite error: ", error);
      return false;
    }
  }

  async getPosts(Queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(conf.dbId, conf.collId, Queries);
    } catch (error) {
      console.log("Appwrite error: ", error);
      return false;
    }
  }

  async uploadFile(file) {
    if (!file) {
      throw new Error("No file provided for upload.");
    }
    try {
      return await this.bucket.createFile(conf.buckId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite error: ", error);
      throw error; // Re-throw to catch it in submit()
    }
  }
  

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.buckId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite error: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.buckId, fileId);
  }
}

const service = new Service();
export default service;
