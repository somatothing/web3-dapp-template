import { autoUpdateFiles } from "../utils/autoUpdater";

const aggregatedConfig = {};
autoUpdateFiles("./src/config/abi", aggregatedConfig);

export default aggregatedConfig;
