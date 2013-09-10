/**
 * Usage
 *
 * $ npm install
 * $ grunt (jshint|qunit)
 *
**/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* jshint */
        jshint: {
            all: ['src/**/*.js', 't/**/*.js', '!t/tlib/**/*.js']
        },

        /* qunit */
        qunit: {
            all: ['t/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
};
