var _npmTaskOptions = {
    pattern: 'grunt-contrib-*',
    config: './www/package.json',
    scope: 'devDependencies'
};

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt, _npmTaskOptions);
};
