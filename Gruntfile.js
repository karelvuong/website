/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

      // Task configuration.
      jshint: {
        gruntfile: {
          src: 'Gruntfile.js'
        }
      },
      compass: {
        dist: {
          options: {
            banner: '<%= banner %>',
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
    }
  );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['compass', 'watch']);
};
