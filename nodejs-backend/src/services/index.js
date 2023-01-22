const users = require("./users/users.service.js");
const react-frameworks = require("./react-frameworks/react-frameworks.service.js");
const angular-framemworks = require("./angular-framemworks/angular-framemworks.service.js");
const vue-frameworks = require("./vue-frameworks/vue-frameworks.service.js");
const svelte-frameworks = require("./svelte-frameworks/svelte-frameworks.service.js");
const frontend-js = require("./frontend-js/frontend-js.service.js");
const web-application-stack = require("./web-application-stack/web-application-stack.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(react-frameworks);
  app.configure(angular-framemworks);
  app.configure(vue-frameworks);
  app.configure(svelte-frameworks);
  app.configure(frontend-js);
  app.configure(web-application-stack);
  // ~cb-add-configure-service-name~
};
