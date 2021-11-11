import AsyncStorage from "@react-native-async-storage/async-storage";
import StorageKey from "../constants/StorageKey";
import ApiUtils from "./ApiUtils";

const apiUtils = ApiUtils.getInstance();

/// Login with magic link token
async function userLoginToBackend({
  email,
  authorization,
  invitationCode,
}: {
  email: string;
  authorization: string;
  invitationCode?: string;
}): Promise<any> {
  try {
    await AsyncStorage.removeItem(StorageKey.USER_AUTH_INFO);
    await AsyncStorage.removeItem(StorageKey.USER_PROFILE);

    const headers = {
      email: email,
      authorization: authorization,
    };

    return await apiUtils.post(
      "/api/public/user/login",
      { invitationCode },
      headers
    );
  } catch (error) {
    console.log("userLoginToBackend: " + error);
    throw error;
  }
}

/// Check if user already has profile in our db
async function checkIfUserHasProfile(): Promise<any> {
  try {
    return await apiUtils.get("/api/auth/user/check-profile");
  } catch (error) {
    console.log("checkIfUserHasProfile: " + error);
    throw error;
  }
}

/// Check if email already exist in db
async function checkIfEmailAlreadyExist(email: string): Promise<any> {
  try {
    return await apiUtils.get(`/api/public/user/${email}/check-email`);
  } catch (error) {
    console.log("checkIfEmailAlreadyExist: " + error);
    throw error;
  }
}

/// Check if email already exist in db
async function getCategoriesList(): Promise<any> {
  try {
    return await apiUtils.get(`/api/public/homepage/list-category`);
  } catch (error) {
    console.log("getCategoriesList: " + error);
    throw error;
  }
}

/// Create user profile
async function createUserProfile(data: Object): Promise<any> {
  try {
    return await apiUtils.post(`/api/auth/user/create-profile`, data);
  } catch (error) {
    console.log("createUserProfile: " + error);
    throw error;
  }
}

/// get user profile
async function getUserProfile(userId: string): Promise<any> {
  try {
    return await apiUtils.get(`/api/public/user/${userId}/profile`);
  } catch (error) {
    console.log("getUserProfile: " + error);
    throw error;
  }
}

/// check if invitation code valid
async function validInvitationCode(invitationCode: string): Promise<any> {
  try {
    return await apiUtils.get(
      `/api/public/verification/${invitationCode}/check-invitation`
    );
  } catch (error) {
    console.log("validInvitationCode: " + error);
    throw error;
  }
}

/// send sms valid code
async function sendSmsCodeToPhone(phoneNumber: string): Promise<any> {
  try {
    return await apiUtils.post(`/api/public/verification/send`, {
      phoneNumber,
    });
  } catch (error) {
    console.log("sendSmsCodeToPhone: " + error);
    throw error;
  }
}

/// verify sms valid code
async function verifySmsValidCode(
  phoneNumber: string,
  verificationCode: string
): Promise<any> {
  try {
    return await apiUtils.post(`/api/public/verification/verify`, {
      phoneNumber,
      verificationCode,
    });
  } catch (error) {
    console.log("verifySmsValidCode: " + error);
    throw error;
  }
}

/// reserve username
async function reserveUsername(
  phoneNumber: string,
  userName: string
): Promise<any> {
  try {
    return await apiUtils.post(`/api/public/user/reserve`, {
      phoneNumber,
      userName,
    });
  } catch (error) {
    console.log("reserveUsername: " + error);
    throw error;
  }
}

/// update user profile
async function updateUserProfile(profile: object): Promise<any> {
  try {
    return await apiUtils.put(`/api/auth/user/update-profile`, profile);
  } catch (error) {
    console.log("reserveUsername: " + error);
    throw error;
  }
}

/// create collectible
async function createNewNft(data: object): Promise<any> {
  try {
    return await apiUtils.post(`/api/auth/collectible/create`, data);
  } catch (error) {
    console.log("createNewNft: " + error);
    throw error;
  }
}

/// check if user like the collectible
async function checkIsLikedCollectible(collectibleId: string): Promise<any> {
  try {
    return await apiUtils.get(`/api/auth/user/${collectibleId}/check-like`);
  } catch (error) {
    console.log("checkIsLikedCollectible: " + error);
    throw error;
  }
}

/// unfollow user
async function unFollow(followingUserId: string): Promise<any> {
  try {
    return await apiUtils.delete(`/api/auth/user/${followingUserId}/unfollow`);
  } catch (error) {
    console.log("unFollow: " + error);
    throw error;
  }
}

/// follow user
async function follow(followingUserId: string): Promise<any> {
  try {
    return await apiUtils.post(`/api/auth/user/follow`, {
      followingUserId,
    });
  } catch (error) {
    console.log("follow: " + error);
    throw error;
  }
}

/// remove follower
async function removeFollower(followerUserId: string): Promise<any> {
  try {
    return await apiUtils.delete(`/api/auth/user/${followerUserId}/remove`);
  } catch (error) {
    console.log("removeFollower: " + error);
    throw error;
  }
}

/// set collectible on hold status
async function putCollectibleOnHold(collectibleId: string): Promise<any> {
  try {
    return await apiUtils.put(
      `/api/auth/collectible/${collectibleId}/put-on-hold`
    );
  } catch (error) {
    console.log("putCollectibleOnHold: " + error);
    throw error;
  }
}

/// set collectible on hold status
async function putCollectibleOnSale(
  collectibleId: string,
  numOfCopies: number,
  price: number
): Promise<any> {
  try {
    const data = {
      numOfCopies,
      price,
    };
    return await apiUtils.put(
      `/api/auth/collectible/${collectibleId}/put-on-sale`,
      data
    );
  } catch (error) {
    console.log("putCollectibleOnSale: " + error);
    throw error;
  }
}

async function checkNftTransfer(
  receiverAddress: string,
  collectibleId: string,
  numOfCopies: number
) {
  try {
    const data = {
      receiverAddress: receiverAddress.toLowerCase(),
      collectibleId : collectibleId.toLowerCase(),
      numOfCopies: numOfCopies,

    };
    return await apiUtils.put(`/api/auth/collectible/transfer-check`, data);
  } catch (error) {
    console.log("checkNftTransfer: " + error);
    throw error;
  }
}
async function NftTransfer(
  receiverAddress: string,
  collectibleId: string,
  numOfCopies: number
) {
  try {
    const data = {
      receiverAddress: receiverAddress.toLowerCase(),
      collectibleId : collectibleId.toLowerCase(),
      numOfCopies: numOfCopies,
    };
    
    return await apiUtils.put(`/api/auth/collectible/transfer`, data);
  } catch (error) {
    console.log("NftTransfer: " + error);
    throw error;
  }
}


export default {
  userLoginToBackend,
  checkIfUserHasProfile,
  checkIfEmailAlreadyExist,
  getCategoriesList,
  createUserProfile,
  getUserProfile,
  validInvitationCode,
  sendSmsCodeToPhone,
  verifySmsValidCode,
  reserveUsername,
  updateUserProfile,
  createNewNft,
  checkIsLikedCollectible,
  unFollow,
  follow,
  removeFollower,
  putCollectibleOnHold,
  putCollectibleOnSale,
  checkNftTransfer,
  NftTransfer
};
