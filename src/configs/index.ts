//Public Host
const host = "http://54.198.222.109";

//const host = "http://localhost";

// const host = "http://192.168.0.129";

export default {
  //Public Host
  API_BASE_URL: `${host}`,
  //API_BASE_URL: `${host}:4000`,
  SOCKET_BASE_URL: `${host}:8080`,
  // SOCKET_BASE_URL: `http://54.198.222.109:8080`,

  COIN_MARKET_CAP_API_KEY: "8ea5b83c-5ed9-4cf0-8e06-18820fc3186a",

  /// Magic key
  /// test: pk_live_BAE68C105D1EDA52
  /// production: pk_live_8C55B1F08E15786C
  MAGIC_PUBLISHABLE_API_KEY: "pk_test_86297F543031FFCC",
  EXPORT_PRIVATE_KEY_SITE: "https://reveal.magic.link/metaspace",
  WYRE_WEB_URL: "https://pay.sendwyre.com",
  SERVICE_FEE_RATE: 0.024,

  RPC_URL:
    "https://polygon-mumbai.infura.io/v3/3f2d7215aec24e57ae58f4656a59fe7d",
  POLYGONSCAN_API_URI: "https://api-testnet.polygonscan.com",
  POLYGONSCAN_API_KEY: "XDM4UNIQU9MRH6Q58R9RZ9JN3NTDH1UK92",
  REACT_APP_METASPACE_TOKEN: "0x59c9843A1142D9f84402C89dADEBF74380f8752e",
  REACT_APP_METASPACE_SALES: "0x1a6E128806dd9908Cf14Ad41d4f8f625c2DDB706",
  REPORT_EMAIL: "maggie@ourmeta.space",
  WEB_BASE_URL: "https://app.ourmeta.space",
};
