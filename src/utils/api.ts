import axios from "axios";
import { Image, ImagesResponse } from "../types/images";

export async function getImages(
  page: number,
  per_page: number,
  keyword: string
): Promise<ImagesResponse> {
  const url: string = "https://api.unsplash.com/search/photos";
  return await axios
    .get(url, {
      params: {
        query: keyword,
        page: page,
        per_page: per_page,
      },
      headers: {
        Authorization: "Client-ID " + process.env.REACT_APP_CLIENT_ID,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
}

export function downloadImage(image: Image): void {
  const url: string = image.links.download_location;
  axios
    .get(url, {
      headers: {
        Authorization: "Client-ID " + process.env.REACT_APP_CLIENT_ID,
      },
    })
    .then((res) => {
      const a: HTMLAnchorElement = document.createElement("a");
      a.href = res.data.url + "&dl=" + image.alt_description + ".jpg";
      a.click();
    });
}
