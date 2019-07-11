
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  

  grunt.initConfig({
    compress: {
      main: {
        options: {
          archive: 'nodeappl.zip',
          pretty: true
        },
        expand: true,
        cwd: './',
        src: ['./Main.js','./manifest.json','./package.json','./node_modules/express/**/*','./node_modules/body-parser/**/*'],
        dest: './'
      }
    }
  });

  grunt.registerTask('default', ['compress']);
};
