
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['i2vsgFjp9USahkJPivYFfS'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  