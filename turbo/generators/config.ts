import { PlopTypes } from "@turbo/gen";
import fs from "node:fs";
import path from "node:path";

const getTemplates = async (answers) => {
  // fetch data from a remote API
  const templates = fs.readdirSync(path.resolve("turbo/generators/templates"));

  return templates;
};
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("create-app", {
    description: "Create App",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What type of file should be created?",
        choices: getTemplates,
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of the new file to create?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "app name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "app name cannot include spaces";
          }
          if (!input) {
            return "app name is required";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "templates/{{ type }}/**/*",

        destination: "{{ turbo.paths.root }}/apps/{{ dashCase title }}",
        base: "templates/{{ type }}",
      },
    ],
  });
}
