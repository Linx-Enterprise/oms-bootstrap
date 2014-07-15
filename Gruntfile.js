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
      dist: {
        files: {
          'dist/scripts/chaordic-bootstrap.js': 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js'
        }
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
