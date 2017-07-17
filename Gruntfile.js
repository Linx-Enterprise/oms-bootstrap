module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: ['dist'],
      vendor: ['vendor']
    },

    sass: {
      options: {
        precision: 10,
        loadPath: 'bower_components'
      },
      styles: {
        files: {
          'dist/styles/chaordic-bootstrap.css': 'src/styles/chaordic-bootstrap.scss'
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      styles: {
        files: {
          'dist/styles/chaordic-bootstrap.min.css': 'dist/styles/chaordic-bootstrap.css'
        }
      }
    },

    concat: {
      scripts: {
        files: {
          'dist/scripts/chaordic-bootstrap.js': [
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'src/scripts/*'
          ]
        }
      }
    },

    uglify: {
      scripts: {
        files: {
          'dist/scripts/chaordic-bootstrap.min.js': 'dist/scripts/chaordic-bootstrap.js'
        }
      }
    },

    copy: {
      styles: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap-sass-official/assets/stylesheets/',
            src: ['**'],
            dest: 'vendor/bootstrap/styles'
          }
        ]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['dist']
      },
      styles: {
        files: ['src/styles/**/*'],
        tasks: ['styles']
      },
      scripts: {
        files: ['src/scripts/**/*'],
        tasks: ['scripts']
      },
      vendor: {
        files: ['bower_components/**/*'],
        tasks: ['vendor']
      },
      demo: {
        files: ['demo/**/*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('styles', ['sass', 'cssmin']);
  grunt.registerTask('scripts', ['concat', 'uglify']);
  grunt.registerTask('vendor', ['clean:vendor', 'copy']);

  grunt.registerTask('dist', ['clean:dist', 'vendor', 'styles', 'scripts']);

  grunt.registerTask('default', 'dist', 'watch');

};
