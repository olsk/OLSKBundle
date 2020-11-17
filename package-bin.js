#!/usr/bin/env node

const mod = {

	// LIFECYCLE

	LifecycleScriptDidLoad() {
		require('./main.js').OLSKBundleClearPackageLock();

		require('./main.js').OLSKBundleCopyEnvSample();
		
		require('child_process').spawn('npm', ['install', '--no-save'], {
			stdio: 'inherit',
		});
	},

};

mod.LifecycleScriptDidLoad();
