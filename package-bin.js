#!/usr/bin/env node

const mod = {

	// CONTROL

	ControlCleanse () {
		if (process.env.NODE_ENV !== 'production') {
			return;
		}

		return require('glob').sync(`+(${ [
			'OLSK*',
			'ROCO*',
			'launchlet',
			'MassageTXT',
		].join('|') })/`, {
			matchBase: true,
			cwd: require('path').join(process.cwd(), 'node_modules'),
			realpath: true,
		}).forEach(require('OLSKDisk').OLSKDiskDeleteFolder);
	},

	// LIFECYCLE

	LifecycleScriptDidLoad() {
		if (process.argv[2] === 'cleanse') {
			return mod.ControlCleanse(process.argv.slice(2), true);
		}

		require('./main.js').OLSKBundleClearPackageLock();

		require('./main.js').OLSKBundleCopyEnvSample();
		
		require('child_process').spawn('npm', ['install', '--no-save'], {
			stdio: 'inherit',
		});
	},

};

mod.LifecycleScriptDidLoad();
