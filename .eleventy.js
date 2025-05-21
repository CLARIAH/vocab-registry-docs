import yaml from "js-yaml";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"src/static": "."});
    eleventyConfig.addPassthroughCopy({"src/main.css": "."});

    eleventyConfig.addDataExtension("yml,yaml", contents => yaml.load(contents));

    return {
        dir: {
            input: "src"
        }
    };
};
