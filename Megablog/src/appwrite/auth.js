import conf from "../config/conf.js";
import { Account, ID, Client } from "appwrite";

class AuthService {
  client = new Client();

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userId = ID.unique(); // Generate a valid user ID
      const userAccount = await this.account.create(userId, email, password, name);
      return userAccount ? this.login({ email, password }) : userAccount;
    } catch (e) {
      console.error("Appwrite error:", e.message);
      throw e; // Re-throw the error to handle it in the calling function
    }
  }

  async login({email, password}) {
    try {
        return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw error;
    }
}

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite error:", error.message);
      return null;
    }
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (e) {
      console.error("Appwrite error:", e.message);
    }
  }
}

export default new AuthService();
