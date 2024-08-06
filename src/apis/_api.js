import axios from "axios";
export default class APIService {
  apiName = "http://localhost:5287"; // TODO cấu hình host ở đây
  controllerName = "";
  baseUrl = "";
  instance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  initAPI() {
    this.baseUrl = `${this.apiName}/${this.controllerName}/`;

    // Tạo một interceptor để thêm token vào header của request
    this.instance.interceptors.request.use(
      (config) => {
        const context = localStorage.getItem("context");
        let token = null;
        if(context) {
          const contextData = JSON.parse(context);
          token = contextData?.Token;
        }
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Tạo một interceptor để xử lý các lỗi trả về từ server
    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { response } = error;
        if (response && (response.status === 401 || response.status === 403)) {
          // Nếu token hết hạn hoặc không hợp lệ, thực hiện đăng xuất
          //   await store.dispatch('logout')
          // Chuyển hướng về trang đăng nhập
          const router = this.getRouter();
          if (router) {
            router.push("/login");
          }
        }
        return Promise.reject(error);
      }
    );
  }

  getRouter() {
    // Truy cập router từ app.config.globalProperties
    return app.__vue_app__?.config?.globalProperties?.$router;
  }

  getBaseUrl() {
    if (this.baseUrl == "") {
      this.initAPI();
    }

    return this.baseUrl;
  }

  async get(url, params = {}) {
    try {
      const response = await this.instance.get(this.getBaseUrl() + url, {
        params,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url, data) {
    try {
      const response = await this.instance.post(this.getBaseUrl() + url, data);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async put(url, data) {
    try {
      const response = await this.instance.put(this.getBaseUrl() + url, data);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(url, params = {}) {
    try {
      const response = await this.instance.delete(this.getBaseUrl() + url, {
        params,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}