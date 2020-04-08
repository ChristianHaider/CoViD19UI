'use strict';

module.exports = function (grunt) {
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('@ambers/sdk');

    var path = require('path'),
        helpers = require('@ambers/sdk').helpers;

    // Default task.
    grunt.registerTask('default', ['amdconfig:app', 'amberc:all']);
    grunt.registerTask('test', ['amdconfig:app', 'requirejs:test_runner', 'exec:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy']);

    var id = function (x) {
        return x
    };

    function mkDefine (deps, cb) {
        return "define(" + JSON.stringify(deps) + "," + cb + ");"
    }

    var cbRequireAndPromiseMain = function (require) {
        return new Promise(function (resolve, reject) {
            require(["app/main"], resolve, reject);
        });
    };

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON(''),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: path.join(__dirname, "node_modules", "@ambers", "lang"),
                configFile: "config.js"
            },
            all: {
                src: [
                    'src/Covid19Model.st', // list all sources in dependency order
                    'src/Covid19view.st', // list all sources in dependency order
                    'src/Covid19view-Tests.st' // list all tests in dependency order
                ],
                amd_namespace: 'amber-covid19view',
                libraries: ['amber/core/SUnit', 'amber/web/Web', 'silk/Silk']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            options: {
                mainConfigFile: "config.js",
                paths: {
                    "es6-promise/auto": "node_modules/es6-promise/dist/es6-promise.auto"
                },
                useStrict: true
            },
            deploy: {
                options: {
                    rawText: {
                        "helios/index": "",
						"app/timestamp": mkDefine([], Date.now()),
                        "app": mkDefine(["require", "es6-promise/auto"], cbRequireAndPromiseMain),
                        "app/main": mkDefine(["deploy", "amber/core/Platform-Browser"], id)
                    },
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['config', 'app/timestamp', 'node_modules/requirejs/require', 'app'],
                    findNestedDependencies: true,
                    exclude: ['helios/index'],
                    optimize: "uglify2",
                    out: "the.js"
                }
            },
            devel: {
                options: {
                    rawText: {
                        "app": mkDefine(["require", "es6-promise/auto"], cbRequireAndPromiseMain),
						"app/timestamp": mkDefine([], Date.now()),
                        "app/main": mkDefine(["devel", "amber/core/Platform-Browser"], id)
                    },
                    include: ['config', 'app/timestamp', 'node_modules/requirejs/require', 'app', 'app/main'],
                    exclude: ['devel', 'amber/core/Platform-Browser'],
                    out: "the.js"
                }
            },
            test_runner: {
                options: {
                    rawText: {
                        "jquery": "/* do not load in node test runner */",
                        "app/main": mkDefine(["testing", "amber/core/Platform-Node", "amber_devkit/NodeTestRunner"], function (amber) {
                            amber.initialize().then(function () {
                                amber.globals.NodeTestRunner._main();
                            });
                        }),
                        "app": mkDefine(["require"], cbRequireAndPromiseMain)
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        excludeIdeData: true
                    },
                    include: ['app'],
                    findNestedDependencies: true,
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "test_runner.js"
                }
            }
        },
			
		watch: {
			css: {
				files: ['css/*.css'],
			},
			options: {
				// Start a live reload server on the default port 35729
				livereload: true,
			}
		},

        exec: {
            test_runner: 'node test_runner.js'
        },

        clean: {
            test_runner: ['test_runner.js']
        }
    });
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

};
