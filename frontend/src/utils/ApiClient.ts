import axios from "axios";

class ApiClient {
  static API_URL = "http://localhost:8000/";
	private client;

  constructor() {
    const options = {
      baseURL: ApiClient.API_URL,
      timeout: 5000,
      withCredentials: true,
    };

    this.client = axios.create(options);
  }

  async createUser(username: string, email: string, password: string) {
    return await this.client.post(`/users/create`, { username, email, password });
  }
	
	async loginUser(username: string, password: string) {
		return await this.client.post('/users/login', { username, password });
	}
}

export default new ApiClient()