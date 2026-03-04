export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("R2_ACCESS_KEY_ID"),
        secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
        endpoint: env("R2_ENDPOINT"),
        params: {
          Bucket: env("R2_BUCKET"),
        },
      },
    },
  },
});
