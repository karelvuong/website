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
            cssDir: 'assets/stylesheets',
            outputStyle: 'compressed',
            require: 'susy',
            sassDir: 'assets/sass',
            specify: 'assets/sass/main.scss'
          }
        }
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
          tasks: ['compass', 'jekyll:build']
        },
        html: {
          files: [
            '_data/*.html',
            '_includes/*.html',
            '_layouts/*.html',
            '_posts/*.markdown',
            '_config.yml',
            'index.html'
          ],
          tasks: ['jekyll:build']
        }
      }
    }
  );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['compass', 'jekyll:build']);
  grunt.registerTask('dev', ['concurrent:target']);
  grunt.registerTask('serve', ['jekyll:serve']);
  grunt.registerTask('C', ['compass']);
  grunt.registerTask('b', ['jekyll:build']);
};
