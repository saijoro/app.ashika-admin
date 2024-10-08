// import { removeUserDetails } from "@/redux/Modules/auth";
// import { store } from "@redux/../../src/redux/index";
import Cookies from "js-cookie";
import prepareURLEncodedParams from "@/lib/helpers/prepareURLEncodedParams";

interface IAPIResponse {
  success: boolean;
  status: number;
  data: any;
  ok: boolean;
}
class FetchService {
  authStatusCodes: number[] = [401, 403];
  authErrorURLs: string[] = [
    "/users/signin",
    "/forgot-password",
    "/forgot-password/update-password",
    "/users/get-all-dummy",
  ];

  // constructor() {
  //   store.subscribe(() => {});
  // }

  configureAuthorization(config: any) {
    const accessToken = "Bearer " + Cookies.get("token");
    config.headers["Authorization"] = accessToken;
  }
  setHeader(config: any) {
    config.headers = {};
  }
  setDefaultHeaders(config: any) {
    config.headers = {
      "Content-Type": "application/json",
    };
  }

  // dispatchRemoveUserDetails() {
  //   store.dispatch(removeUserDetails());
  // }
  checkToLogOutOrNot(path: string) {
    return this.authErrorURLs.some((arrayUrl: string) =>
      path.includes(arrayUrl)
    );
  }
  isAuthRequest(path: string) {
    return this.authErrorURLs.includes(path);
  }

  async hit(...args: any): Promise<IAPIResponse> {
    let [path, config] = args;
    this.setDefaultHeaders(config);

    if (!this.isAuthRequest(path)) {
      this.configureAuthorization(config);
    }

    // request interceptor starts

    let url =  path;

    const response = await fetch(url, config);

    if (response.status == 200 || response.status == 201) {
      return {
        success: true,
        status: response.status,
        data: await response.json(),
        ok: response.ok,
      };
    } else if (
      this.authStatusCodes.includes(response.status) &&
      !this.checkToLogOutOrNot(path)
    ) {
      setTimeout(() => {
        // this.dispatchRemoveUserDetails();
        Cookies.remove("access_token");
        window.location.href = "/";
      }, 1000);
      return {
        success: false,
        status: response.status,
        ok: response.ok,
        data: await response.json(),
      };
    } else {
      return {
        status: response?.status,
        success: false,
        data: await response.json(),
        ok: response.ok,
      };
    }
  }
  async post(url: string, payload?: any) {
    return await this.hit(url, {
      method: "POST",
      body: payload ? JSON.stringify(payload) : undefined,
    });
  }
  async postFormData(url: string, file?: any) {
    return await this.hit(url, {
      method: "POST",
      body: file,
    });
  }

  async get(url: string, queryParams = {}) {
    if (Object.keys(queryParams).length) {
      url = prepareURLEncodedParams(url, queryParams);
    }
    return await this.hit(url, {
      method: "GET",
    });
  }
  async delete(url: string, payload = {}) {
    return this.hit(url, {
      method: "DELETE",
      body: Object.keys(payload)?.length ? JSON.stringify(payload) : undefined,
    });
  }

  async put(url: string, payload = {}) {
    return this.hit(url, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  }
  async patch(url: string, payload = {}) {
    return this.hit(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  }
}
export const $fetch = new FetchService();
