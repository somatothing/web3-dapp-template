import fs from "fs";
import path from "path";

// Monitor a directory for changes
const monitorDirectory = (
  directory: string,
  onUpdate: (filePath: string, updatedContent: string | null) => void
) => {
  fs.watch(directory, (eventType, filename) => {
    if (filename && (eventType === "change" || eventType === "rename")) {
      const filePath = path.join(directory, filename);
      if (fs.existsSync(filePath)) {
        const updatedContent = fs.readFileSync(filePath, "utf8");
        onUpdate(filePath, updatedContent);
      } else {
        onUpdate(filePath, null);
      }
    }
  });
};

// Exported function to auto-update files
export const autoUpdateFiles = (
  directory: string,
  targetObject: Record<string, string | null>
) => {
  monitorDirectory(directory, (filePath, updatedContent) => {
    const fileName = path.basename(filePath);
    if (updatedContent) {
      targetObject[fileName] = updatedContent;
    } else {
      delete targetObject[fileName];
    }
  });
};
