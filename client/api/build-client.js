import axios from "axios";
import { headers } from "next/headers";

export default async () => {
  if (typeof window === "undefined") {
    // on the server!
    const headersList = await headers();
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: {
        Host: headersList.get("host"),
        Cookie: headersList.get("cookie"),
      },
    });
  } else {
    // on the browser!
    return axios.create({
      baseURL: "/",
    });
  }
};
