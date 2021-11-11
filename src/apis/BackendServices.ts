import ApiUtils from "./ApiUtils";

const apiUtils = ApiUtils.getInstance();

/**
 * Sample to call api
 * @returns 
 */
export async function getStoriesList(): Promise<any> {
  try {
    var result = await apiUtils.get("/api/public/feature-story/list");
    return result.data;
  } catch (error) {
    console.log("getStoryList Error: " + error);
  }
}
