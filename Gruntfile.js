module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                asi: true
            }
        },
        uglify: {
            all: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: ['**'],
                    dest: 'dest',
                    filter: 'isFile'
                }]
            }
        },
        connect: {
            server: {
              options: {
                port: 1234,
                base: '.'
              }
            }
        },
        mocha: {
            all: ['test/**/*.html'],
            options: {
                reporter: 'Nyan',
                run: true
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("test", ["connect", "mocha"]);
    grunt.registerTask("default", ["jshint", "uglify"]);
}