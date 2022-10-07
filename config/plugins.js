module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  ckeditor: true

//   ckeditor: {
//     enabled: true,
//     // resolve: "./src/plugins/strapi-plugin-ckeditor"
//   },
  // ...
});
