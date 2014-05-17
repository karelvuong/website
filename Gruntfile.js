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
            cssDir: 'dist/css',
            outputStyle: 'compressed',
            sassDir: 'sass',
            specify: 'sass/app.scss'
          }
        }
      },
      copy: {
        main: {
          files: [
            { expand: true, src: ['index.html'], dest: 'dist/' },
            { expand: true, src: ['img'], dest: 'dist/' },
            { expand: true, src: ['js/**/*'], dest: 'dist/' },
            { expand: true, src: ['partials/*'], dest: 'dist/' }
          ]
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
        },
        html: {
          files: ['sass/*.scss', 'index.html', 'js/**/*', 'partials/*'],
          tasks: ['copy']
        }
      }
    }
  );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['copy', 'compass', 'watch']);
};
