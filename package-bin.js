#!/usr/bin/env node

const main = require('./main.js');

const mod = {

	// DATA

	// CONTROL

	ControlCleanse () {
		if (process.env.NODE_ENV !== 'production') {
			return;
		}

		return require('glob').sync(`+(${ main.OLSKBundleProjectGlobs().join('|') })/`, {
			matchBase: true,
			cwd: require('path').join(process.cwd(), 'node_modules'),
			realpath: true,
		}).forEach(require('OLSKDisk').OLSKDiskDeleteFolder);
	},

	ControlTidy () {
		return require('glob').sync(`+(${ main.OLSKBundleProjectGlobs().join('|') })/*test*`, {
			matchBase: true,
			cwd: require('path').join(process.cwd(), 'node_modules'),
			realpath: true,
		}).filter(function (e) {
			return !e.match('ui-test_template');
		}).forEach(require('fs').unlinkSync);
	},

	// LIFECYCLE

	LifecycleScriptDidLoad() {
		if (process.argv[2] === 'cleanse') {
			return mod.ControlCleanse();
		}

		if (process.argv[2] === 'tidy') {
			return mod.ControlTidy();
		}

		main.OLSKBundleClearPackageLock();

		main.OLSKBundleCopyEnvSample();
		
		require('child_process').spawn('npm', ['install', '--no-save'], {
			stdio: 'inherit',
		});
	},

};

mod.LifecycleScriptDidLoad();
