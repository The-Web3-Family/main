module.exports = function (eleventyConfig) {
  // Static assets that ship as-is, unchanged, into the built site.
  // Add christopher.jpg here once the real photo exists in src/.
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
