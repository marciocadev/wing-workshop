"use strict";
module.exports = function({  }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      return ({"status": 200, "body": "Hello from the API"});
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-1.js.map