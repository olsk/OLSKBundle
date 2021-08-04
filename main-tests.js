const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKBundleProjectGlobs', function test_OLSKBundleProjectGlobs() {

	it('returns array', function () {
		deepEqual(mod.OLSKBundleProjectGlobs(), [
			'OLSK*',
			'ROCO*',
			'SWAR*',
			'ZDA*',
			'launchlet',
			'MassageTXT',
			'zerodatawrap',
		]); 
	});

});

describe('OLSKBundleClearPackageLock', function test_OLSKBundleClearPackageLock() {

	it('deletes package-lock.json if exists', function () {
		require('fs').writeFileSync(mod._OLSKBundlePackageLockPath(), Math.random().toString());

		mod.OLSKBundleClearPackageLock();

		deepEqual(require('fs').existsSync(mod._OLSKBundlePackageLockPath()), false);
	});

	it('does nothing', function () {
		mod.OLSKBundleClearPackageLock();

		deepEqual(require('fs').existsSync(mod._OLSKBundlePackageLockPath()), false);
	});

});

describe('OLSKBundleCopyEnvSample', function test_OLSKBundleCopyEnvSample() {

	it('copies .env-sample if exists', function () {
		const item = Math.random().toString();
		
		require('fs').writeFileSync(mod._OLSKBundleEnvSamplePath(), item);

		mod.OLSKBundleCopyEnvSample();

		deepEqual(require('fs').readFileSync(mod._OLSKBundleEnvPath(), 'utf8'), item);
	});

	it('maintains .env if exists', function () {
		const item = Math.random().toString();
		
		require('fs').writeFileSync(mod._OLSKBundleEnvPath(), item);
		
		require('fs').writeFileSync(mod._OLSKBundleEnvSamplePath(), Math.random().toString());

		mod.OLSKBundleCopyEnvSample();

		deepEqual(require('fs').readFileSync(mod._OLSKBundleEnvPath(), 'utf8'), item);
	});

	it('does nothing if no .env-sample', function () {
		require('fs').writeFileSync(mod._OLSKBundleEnvSamplePath(), Math.random().toString());

		mod.OLSKBundleCopyEnvSample();

		deepEqual(require('fs').existsSync(mod._OLSKBundlePackageLockPath()), false);
	});

	afterEach(function () {
		require('fs').unlinkSync(mod._OLSKBundleEnvPath());
		require('fs').unlinkSync(mod._OLSKBundleEnvSamplePath());
	});

});
