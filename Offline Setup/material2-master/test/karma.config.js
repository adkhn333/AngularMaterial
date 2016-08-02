// This file is named differently than its JS bootstrapper to avoid the ts compiler to overwrite it.
System.register(['path', './browser-providers.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var path, browser_providers_ts_1;
    function config(config) {
        config.set({
            basePath: path.join(__dirname, '..'),
            frameworks: ['jasmine'],
            plugins: [
                require('karma-jasmine'),
                require('karma-browserstack-launcher'),
                require('karma-sauce-launcher'),
                require('karma-chrome-launcher'),
                require('karma-firefox-launcher'),
            ],
            files: [
                { pattern: 'dist/vendor/es6-shim/es6-shim.js', included: true, watched: false },
                { pattern: 'dist/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
                { pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
                { pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false },
                { pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false },
                { pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false },
                { pattern: 'dist/vendor/zone.js/dist/fake-async-test.js', included: true, watched: false },
                { pattern: 'test/karma-test-shim.js', included: true, watched: false },
                // paths loaded via module imports
                { pattern: 'dist/**/*.js', included: false, watched: true },
                // paths loaded via Angular's component compiler
                // (these paths need to be rewritten, see proxies section)
                { pattern: 'dist/**/*.html', included: false, watched: true },
                { pattern: 'dist/**/*.css', included: false, watched: true },
                // paths to support debugging with source maps in dev tools
                { pattern: 'dist/**/*.ts', included: false, watched: false },
                { pattern: 'dist/**/*.js.map', included: false, watched: false }
            ],
            proxies: {
                // required for component assests fetched by Angular's compiler
                '/components/': '/base/dist/components/',
                '/core/': '/base/dist/core/',
            },
            customLaunchers: browser_providers_ts_1.customLaunchers,
            exclude: [],
            preprocessors: {},
            reporters: ['dots'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            sauceLabs: {
                testName: 'material2',
                startConnect: false,
                recordVideo: false,
                recordScreenshots: false,
                options: {
                    'selenium-version': '2.48.2',
                    'command-timeout': 600,
                    'idle-timeout': 600,
                    'max-duration': 5400
                }
            },
            browserStack: {
                project: 'material2',
                startTunnel: false,
                retryLimit: 1,
                timeout: 600,
                pollingTimeout: 20000
            },
            browserDisconnectTimeout: 20000,
            browserNoActivityTimeout: 240000,
            captureTimeout: 120000,
            browsers: ['Chrome_1024x768'],
            singleRun: false
        });
        if (process.env['TRAVIS']) {
            var buildId = "TRAVIS #" + process.env.TRAVIS_BUILD_NUMBER + " (" + process.env.TRAVIS_BUILD_ID + ")";
            // The MODE variable is the indicator of what row in the test matrix we're running.
            // It will look like <platform>_<alias>, where platform is one of 'saucelabs' or 'browserstack',
            // and alias is one of the keys in the CIconfiguration variable declared in
            // browser-providers.ts.
            var _a = process.env.MODE.split('_'), platform = _a[0], alias = _a[1];
            if (platform == 'saucelabs') {
                config.sauceLabs.build = buildId;
                config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
                // TODO(mlaval): remove once SauceLabs supports websockets.
                // This speeds up the capturing a bit, as browsers don't even try to use websocket.
                console.log('>>>> setting socket.io transport to polling <<<<');
                config.transports = ['polling'];
            }
            else if (platform == 'browserstack') {
                config.browserStack.build = buildId;
                config.browserStack.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
            }
            else {
                throw new Error("Platform \"" + platform + "\" unknown, but Travis specified. Exiting.");
            }
            config.browsers = browser_providers_ts_1.platformMap[platform][alias.toUpperCase()];
        }
    }
    exports_1("config", config);
    return {
        setters:[
            function (path_1) {
                path = path_1;
            },
            function (browser_providers_ts_1_1) {
                browser_providers_ts_1 = browser_providers_ts_1_1;
            }],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=karma.config.js.map