import fs from "fs";
import path from "path";

const folderDir = "./src/common/constants/";

export const useConstant = () => {
  return {
    name: "base:constants",
    resolveId(id) {
      if (id === "base:constants") {
        return `\0base:constants`;
      }
    },
    load(id) {
      if (id === "\0base:constants") {
        const files = fs.readdirSync(folderDir);
        let script = `const constants = {}`;
        let scriptImport = ``;
        let scriptAssign = `\n `;
        files.forEach((file) => {
          const variableName = path.basename(file, ".js");
          scriptImport += `\n import ${variableName} from '${folderDir}${file}'`;
          scriptAssign += `\n constants["${variableName}"] = ${variableName}`;
        });

        script += scriptImport;
        script += scriptAssign;
        script += "\n export default constants";
        return script;
      }
    },
  };
};
