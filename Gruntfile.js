module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          'build/style.css': 'style.css',
        },
      },
    },

    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'style.css': 'style.scss',
        },
      },
    },
    watch: {
      styles: {
        files: ['style.scss', 'style.css'],
        tasks: ['sass', 'autoprefixer'],
      },
    },
  })
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
}
