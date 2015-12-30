module.exports = function(grunt) {
  grunt.initConfig({
    build_dir: {
       all: {
        options: {
        create: [
            'app/lib',
            'app/images',
            'app/shared/css',
            'app/shared/models',
            'app/shared/utils',
            'app/views',
        ]
      },
      mode: 655
    }
  },
});
grunt.loadNpmTasks('grunt-build-dir');
grunt.registerTask('default',['build_dir']);
};
