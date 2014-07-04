module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: ['dist']
    },

    sass: {
      options: {
        loadPath: 'bower_components',
        precision: 10
      },
      dist: {
        files: {
          'dist/css/chaordic-bootstrap.css': 'src/main.scss'
        }
      }
    },

    copy: {
      fontawesome: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/font-awesome/fonts/',
            src: ['**'],
            dest: 'dist/fonts/'
          }
        ]
      },
      jquery: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: ['jquery.js'],
            dest: 'dist/scripts/'
          }
        ]
      },
      bootstrap: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap-sass-official/assets/javascripts/',
            src: ['bootstrap.js'],
            dest: 'dist/scripts/'
          }
        ]
      },
      demo: {
        files: [
          {
            expand: true,
            cwd: 'demo/',
            src: ['**'],
            dest: 'dist/demo/'
          }
        ]
      }
    },

    watch: {
      src: {
        files: [
          'Gruntfile.js',
          'src/**/*',
          'demo/**/*'
        ],
        tasks: ['dist'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dist', ['clean', 'sass', 'copy']);

  grunt.registerTask('default', 'dist');

};
