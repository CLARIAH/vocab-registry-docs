// Import the 'js-yaml' library to allow parsing of YAML files
import yaml from "js-yaml";

// Import the markdown-it library, used to render Markdown content
import markdownIt from "markdown-it";

// Import the markdown-it-attrs plugin to enable custom attributes (like classes) in Markdown
import markdownItAttrs from "markdown-it-attrs";

// Import the markdown-it-github-alerts plugin to add GitHub-style alerts in Markdown
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";

// Export the Eleventy configuration function
export default function (eleventyConfig) {
    // Set the Markdown library to markdown-it with the attrs plugin enabled
    // This allows you to add attributes to Markdown elements, e.g., {.class-name}
    eleventyConfig.setLibrary("md", markdownIt({ html: true })
        .use(markdownItAttrs)
        .use(MarkdownItGitHubAlerts, { markers: '*' }));

    // Copy static assets directly to the output folder
    // This copies all files from src/static to the root of the output (_site) directory
    eleventyConfig.addPassthroughCopy({ "src/static": "static" });

    // Copy the main CSS file to the root of the output folder
    eleventyConfig.addPassthroughCopy({ "src/main.css": "." });

    // Enable Eleventy to read YAML files as data files
    // This lets you use .yml or .yaml files in the _data directory
    eleventyConfig.addDataExtension("yml,yaml", contents => yaml.load(contents));

    // Return custom input directory for Eleventy to look for content
    return {
        dir: {
            input: "src" // Use 'src' as the root directory for content and templates
        }
    };
}
