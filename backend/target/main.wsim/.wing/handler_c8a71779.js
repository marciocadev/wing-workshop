"use strict";
exports.handler = async function(event) {
  return await (
          (await (async () => {
            const $Closure2Client = 
          require("./inflight.$Closure2-1.js")({
            $api_url: process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_CLOUD_API_ATTRS_URL"],
            $expect_Util: require("/home/marcio/.volta/tools/image/packages/winglang/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
            $http_Util: require("/home/marcio/.volta/tools/image/packages/winglang/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
          })
        ;
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ).handle(event);
};