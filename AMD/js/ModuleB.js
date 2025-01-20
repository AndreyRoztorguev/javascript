define("ModuleB", [], function () {
  const userAgentInfo = navigator.userAgent;

  function getUserAgentInfo() {
    return userAgentInfo;
  }

  return { getUserAgentInfo };
});
