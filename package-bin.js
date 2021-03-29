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

	// LIFECYCLE

	LifecycleScriptDidLoad() {
		if (process.argv[2] === 'cleanse') {
			return mod.ControlCleanse();
		}

		main.OLSKBundleClearPackageLock();

		main.OLSKBundleCopyEnvSample();
		
		require('child_process').spawn('npm', ['install', '--no-save'], {
			stdio: 'inherit',
		});
	},

};

mod.LifecycleScriptDidLoad();
