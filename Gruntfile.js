module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: ['dist']
    },

    sass: {
      options: {
        precision: 10,
        loadPath: 'bower_components'
      },
      dist: {
        files: {
          'dist/styles/chaordic-bootstrap.css': 'src/chaordic-bootstrap.scss'
        }
      }
    },

    copy: {
      fontawesome: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/font-awesome/fonts/',
            src: ['*'],
            dest: 'dist/fonts/'
          }
        ]
      },
      jquery: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: ['jquery.js', 'jquery.min.js'],
            dest: 'dist/scripts/'
          }
        ]
      },
      bootstrap: {
        files: [
          {
            src: 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            dest: 'dist/scripts/chaordic-bootstrap.js'
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

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      dist: {
        files: {
          'dist/styles/chaordic-bootstrap.min.css': 'dist/styles/chaordic-bootstrap.css'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/scripts/chaordic-bootstrap.min.js': 'dist/scripts/chaordic-bootstrap.js'
        }
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dist', ['clean', 'sass', 'copy', 'cssmin', 'uglify']);

  grunt.registerTask('default', 'dist');

};
