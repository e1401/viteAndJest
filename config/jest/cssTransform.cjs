// css-transformer.js
const path = require('path');

module.exports = {
    process(source, sourcePath) {
        return {
            code: `module.exports = ${JSON.stringify(
                path.basename(sourcePath)
            )};`,
        };
    },

    getCacheKey() {
        return 'css-transformer';
    },
};
