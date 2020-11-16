#!/usr/bin/env node

const mod = {

	// LIFECYCLE

	LifecycleScriptDidLoad() {
		require('./main.js').OLSKBundleClearPackageLock();

		require('child_process').spawn('npm', ['install', '--no-save'], {
			stdio: 'inherit',
		});
	},

};

mod.LifecycleScriptDidLoad();
