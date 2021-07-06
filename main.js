const mod = {

	OLSKBundleProjectGlobs () {
		return [
			'OLSK*',
			'ROCO*',
			'SWAR*',
			'launchlet',
			'MassageTXT',
			'zerodatawrap',
		];
	},

	_OLSKBundlePackageLockPath () {
		return require('path').join(process.cwd(), 'package-lock.json');
	},

	_OLSKBundleEnvSamplePath () {
		return require('path').join(process.cwd(), '.env-sample');
	},

	_OLSKBundleEnvPath () {
		return require('path').join(process.cwd(), '.env');
	},

	OLSKBundleClearPackageLock () {
		if (!require('fs').existsSync(mod._OLSKBundlePackageLockPath())) {
			return;
		}
		
		require('fs').unlinkSync(mod._OLSKBundlePackageLockPath());
	},

	OLSKBundleCopyEnvSample () {
		if (require('fs').existsSync(mod._OLSKBundleEnvPath())) {
			return;
		}
		
		if (!require('fs').existsSync(mod._OLSKBundleEnvSamplePath())) {
			return;
		}
		
		require('fs').copyFileSync(mod._OLSKBundleEnvSamplePath(), mod._OLSKBundleEnvPath());
	},
	
};

Object.assign(exports, mod);
