import router from "@/routers/router.js";
import commonFn from "@/common/commonFn.js";
import { DConstant } from "@/common/constants.js";

export function injectInstall(app) {
  app.config.globalProperties.$router = router;
  app.config.globalProperties.$commonFn = commonFn;
  app.config.globalProperties.$constants = DConstant;
}
