export const CONFIG_API_PATH = {
  CONFIGS_PATH: "v1/public/website-configs",
  CONFIG_PATH: (code: string) => `v1/public/website-configs/${code}`,
};

export const WEBSITE_API_PATH = {
  ME_PATH: "v1/public/websites/me",
};
