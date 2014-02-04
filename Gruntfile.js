/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

      // Task configuration.
      jshint: {
        gruntfile: {
          src: 'Gruntfile.js'
        }
      },
      concurrent: {
        target: {
          tasks: ['jekyll:serve', 'watch'],
          options: {
              logConcurrentOutput: true
          }
        }
      },
      compass: {
        dist: {
          options: {
            banner: '<%= banner %>',
            cssDir: 'css',
            outputStyle: 'compressed',
            require: 'susy',
            sassDir: 'sass',
            specify: 'sass/main.scss'
          }
        }
      },
      watch: {
        gruntfile: {
          files: '<%= jshint.gruntfile.src %>',
          tasks: ['jshint:gruntfile']
        },
        files: [
          '_data/*.html',
          '_includes/*.html',
          '_layouts/*.html',
          '_posts/*.markdown',
          '_config.yml',
          'index.html'
        ],
        css: {
          files: ['sass/*.scss', 'sass/*/*.scss'],
          tasks: ['compass', 'jekyll:build']
        },
        tasks: ['jekyll:build']
      },
      jekyll: {
        build : {
          options: {
            serve: false
          }
        },
        serve : {
          options: {
            serve: true
          }
        }
      }
    }
  );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task.
  grunt.registerTask('default', ['jekyll:serve']);
  grunt.registerTask('dev', ['concurrent:target']);
};
