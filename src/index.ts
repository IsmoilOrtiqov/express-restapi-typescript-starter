import cors from "cors";
import express from "express";
import apiRoutes from "./api";
import config from "./shared/config";

const app = express();

process.on("unhandledRejection", (err) => {
    console.log("UnhandledRejection: ", err);
    process.exit(1);
});

app.use(cors());

app.use(express.json());

app.use(apiRoutes);

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});