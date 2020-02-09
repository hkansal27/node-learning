var Module = require("module");

(function(moduleWrapCopy) {
  Module.wrap = function(script) {
    script = "console.log('debug');" + script
    return moduleWrapCopy(script); // Call original wrapper function
  };
}(Module.wrap)); // Pass original function to IIFE

require("./module.js");
