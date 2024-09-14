const { glob } = require('glob');
const waitOn = require('wait-on');
const { spawn } = require('child_process');

(async () => {
    try {
        const dirs = (await glob('packages/*')).map((dir) => `${dir}/dist`);

        if (dirs.length === 0) {
            console.error('No directories found matching the pattern.');
            process.exit(1);
        }

        const waitOnOptions = {
            resources: dirs.map((dir) => `${dir}`),
            delay: 1000,
            interval: 1000,
            timeout: 30000,
            window: 1000,
        };

        await waitOn(waitOnOptions);
        console.log('Directories are ready.');

        const pnpmProcess = spawn('pnpm', ['run', '--filter', './products/form-builder', 'dev'], {
            stdio: 'inherit',
            shell: true,
        });

        pnpmProcess.on('close', (code) => {
            console.log(`pnpm process exited with code ${code}`);
            process.exit(code);
        });
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
})();
