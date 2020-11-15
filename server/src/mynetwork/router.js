import NetwortController from "./controller";

const router = require("express").Router();

router.get("/connections", NetwortController.getConnections);
router.get("/connections/totalpage", NetwortController.getConnectionPages);

export default router;
