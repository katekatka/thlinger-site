import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "THALINGER Avocat",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Articles Français 🇫🇷")
              .child(
                S.documentList()
                  .title("Articles FR")
                  .filter('_type == "article" && language == "fr"')
              ),
            S.listItem()
              .title("Articles English 🇬🇧")
              .child(
                S.documentList()
                  .title("Articles EN")
                  .filter('_type == "article" && language == "en"')
              ),
          ]),
    }),
    visionTool(),
  ],
});
