const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKBundleClearPackageLock', function test_OLSKBundleClearPackageLock() {

	it('deletes package-lock.json if exists', function () {
		require('fs').writeFileSync(mod._OLSKBundlePackageLockPath(), Math.random().toString());

		mod.OLSKBundleClearPackageLock();

		deepEqual(require('fs').existsSync(mod._OLSKBundlePackageLockPath()), false);
	});

	it('deletes package-lock.json if exists', function () {
		mod.OLSKBundleClearPackageLock();

		deepEqual(require('fs').existsSync(mod._OLSKBundlePackageLockPath()), false);
	});

});
