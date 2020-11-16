const mod = {

	_OLSKBundlePackageLockPath () {
		return require('path').join(process.cwd(), 'package-lock.json');
	},

	OLSKBundleClearPackageLock () {
		if (!require('fs').existsSync(mod._OLSKBundlePackageLockPath())) {
			return;
		}
		
		require('fs').unlinkSync(mod._OLSKBundlePackageLockPath());
	},
	
};

Object.assign(exports, mod);
