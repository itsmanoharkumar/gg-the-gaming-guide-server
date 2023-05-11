module.exports = ({env}) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),//either account key or sas token is enough to make authentication
        sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        cdnBaseURL: env("STORAGE_CDN_URL"), // optional
      },
    },
  },
});
