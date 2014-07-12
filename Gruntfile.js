/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        jshint: {
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        compass: {
            dist: {
                options: {
                    cssDir: 'css',
                    outputStyle: 'compressed',
                    sassDir: 'sass',
                    specify: 'sass/app.scss'
                }
            }
        },
        watch: {
            options: {
                interrupt: true,
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            css: {
                files: ['sass/*.scss', 'sass/*/*.scss'],
                tasks: ['compass']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['compass', 'watch']);
};
