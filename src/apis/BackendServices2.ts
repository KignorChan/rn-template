import ApiUtils from "./ApiUtils";

const apiUtils = ApiUtils.getInstance();

export async function getStoriesList(): Promise<any> {
  try {
    var result = await apiUtils.get("/api/public/feature-story/list");
    return result.data;
  } catch (error) {
    console.log("getStoryList Error: " + error);
  }
}

export function getSearchResults(
  keyword: string,
  pageNumber: number = 1,
  pageSize: number = 8
) {
  console.log(keyword);
  return apiUtils.get(
    `/api/public/homepage/search?field=${keyword}&page=${pageNumber}&pageSize=${pageSize}`
  );
}

export async function getUsersCollectable(
  id: string,
  pageNumber: number = 1,
  pagSize: number = 8
) {
  try {
    return apiUtils.get(
      `/api/public/user/${id}/list-collectibles?page=${pageNumber}&pageSize=${pagSize}&tradable=2&author=creator`
    );
  } catch (error) {
    console.log("getCollectableById Error: " + error);
  }
}
export const getHomePageCollectables = (
  page: number = 1,
  pageSize: number = 8
) => {
  return apiUtils.get(
    `/api/auth/homepage/list-collectibles?page=${page}&pageSize=${pageSize}`
  );
};
export const getStoryList = () => {
  return apiUtils.get(`/api/public/feature-story/list`, {});
};
export const getCollectableLikesCount = (id: any) => {
  return apiUtils.get(`/api/public/collectibles/${id}/show-num-like`);
};
export const getCollectableCommentsCount = (id: any) => {
  return apiUtils.get(`/api/public/collectibles/${id}/show-num-comments`);
};
export const getStoreDetale = (id: string) => {
  return apiUtils.get(`/api/public/feature-story/${id}/show`);
};
export const getCollectableById = (id: string) => {
  return apiUtils.get(`/api/public/collectibles/${id}/get-collectible-by-id`);
};
export const getCollectableComments = (
  collectibleId: any,
  pageNumber: number = 1,
  pagSize: number = 10
) => {
  return apiUtils.get(
    `/api/public/collectibles/${collectibleId}/show-comments?page=${pageNumber}&pageSize=${pagSize}`
  );
};

export const disLikeCollectable = (collectibleId: any) => {
  return apiUtils.delete(`/api/auth/user/${collectibleId}/unlike`);
};

export const getUserProfile = (userId: any) => {
  return apiUtils.get(`/api/public/user/${userId}/profile`);
};

export const getUserProfileByWalletAddress = (address: string) => {
  return apiUtils.get(`/api/public/user/${address}/transaction-profile`);
};

export const getUserFollowers = (
  userId: any,
  pageNumber: number = 1,
  pagSize: number = 500
) => {
  console.log("in the backend service 2 the income userid is: ", userId);
  return apiUtils.get(
    `/api/public/user/${userId}/list-follower?page=${pageNumber}&pageSize=${pagSize}`
  );
};

export const getUserFollowings = (
  userId: any,
  pageNumber: number = 1,
  pagSize: number = 500
) => {
  return apiUtils.get(
    `/api/public/user/${userId}/list-following?page=${pageNumber}&pageSize=${pagSize}`
  );
};

export const getUserSaleCollectables = (
  userId: any,
  pageNumber: number = 1,
  pagSize: number = 100
) => {
  return apiUtils.get(
    `/api/public/user/${userId}/list-collectibles?page=${pageNumber}&pageSize=${pagSize}&tradable=0&author=owner`
  );
};

export const getUserCreatedCollectables = (
  userId: any,
  pageNumber: number = 1,
  pagSize: number = 100
) => {
  return apiUtils.get(
    `/api/public/user/${userId}/list-collectibles?page=${pageNumber}&pageSize=${pagSize}&tradable=2&author=creator`
  );
};

export const getUserCollectedCollectables = (
  userId: any,
  pageNumber: number = 1,
  pagSize: number = 100
) => {
  return apiUtils.get(
    `/api/public/user/${userId}/list-collectibles?page=${pageNumber}&pageSize=${pagSize}&tradable=2&author=owner`
  );
};

export const getCollectedTradeHistory = (collectableId: string) => {
  return apiUtils.get(
    `/api/public/collectibles/${collectableId}/get-trade-history`
  );
};

export const getCollectableCommons = (
  collectableId: string,
  pageNumber: number = 1,
  pagSize: number = 10
) => {
  return apiUtils.get(
    `/api/public/collectibles/${collectableId}/show-comments?page=${pageNumber}&pageSize=${pagSize}`
  );
};

export const getSubComments = (
  commentId: string,
  pageNumber: number = 1,
  pagSize: number = 10
) => {
  return apiUtils.get(
    `/api/public/collectibles/${commentId}/show-subcomments?page=${pageNumber}&pageSize=${pagSize}`
  );
};

export const getCategoryList = () => {
  return apiUtils.get(`/api/public/homepage/list-category`);
};

export const getUserNotification = (
  pageNumber: number = 1,
  pagSize: number = 100
) => {
  return apiUtils.get(
    `/api/auth/notification/get-notification?pageSize=${pagSize}&page=${pageNumber}`
  );
};
export const getDiscoveryCollectable = () => {
  return apiUtils.get(`/api/auth/homepage/list-discovery`);
};

export const checkFollow = (otherUserId: string) => {
  return apiUtils.get(`/api/auth/user/${otherUserId}/check-follow`);
};

export const unFollow = (otherUserId: string) => {
  return apiUtils.delete(`/api/auth/user/${otherUserId}/unfollow`);
};

export const deactiveNotification = (notificationId: string) => {
  return apiUtils.put(
    `/api/auth/notification/${notificationId}/deactive-notification`
  );
};

export const listCatigoryCollectables = (catigoryName: string) => {
  return apiUtils.get(`/api/auth/homepage/${catigoryName}/list-category`);
};
export const getCollectibleStatusForSC = async (collectibleId: any) => {
  return apiUtils.get(
    `/api/public/collectibles/${collectibleId}/get-collectible-by-id`
  );
};
export const applyToBeWhitelist = (catigory: string) => {
  return apiUtils.post(
    `/api/auth/user/request`, {'categoryName': catigory}
  );
};

export const getInvitaionsLeft = () => {
  return apiUtils.get(
    `/api/auth/user/invite-count`
  );
};

export const updateInvitionCount = (inviteId:string) => {
  return apiUtils.put(
    `/api/auth/user/${inviteId}/update`
  );
};

export const checkOnWhitelist = (catigory: string) => {
  return apiUtils.get(
    `/api/auth/user/${catigory}/check-cateogry`
  );
};
export const tradeCheck = async (data: Object) => {
  try {
    return await apiUtils.post(`/api/auth/trade-check`, data);
  } catch (error) {
    console.log("tradeCheck line178: " + error);
    throw error;
  }
};
export const putOnSaleAuthCheck = async (collectibleId: any, data: Object) => {
  try {
    return await apiUtils.put(
      `/api/auth/collectible/${collectibleId}/put-on-sale-check`,
      data
    );
  } catch (error) {
    console.log("tradeCheck line178: " + error);
    throw error;
  }
};
export const putOnHoldAuthCheck = async (collectibleId: any) => {
  try {
    return await apiUtils.put(
      `/api/auth/collectible/${collectibleId}/put-on-hold-check`,
      {}
    );
  } catch (error) {
    console.log("tradeCheck line194: " + error);
    throw error;
  }
};

export const getInvitationInfo = async () => {
  try {
    return await apiUtils.post(
      `/api/auth/user/invite`,
      {}
    );
  } catch (error) {
    console.log("tradeCheck line194: " + error);
    throw error;
  }
};

