const { glob } = require('glob');
const fs = require('fs').promises;

(async () => {
    try {
        const dirs = await glob('packages/*/dist');

        if (dirs.length === 0) {
            console.log('No dist directories found to delete.');
            return;
        }

        await Promise.all(
            dirs.map(async (dir) => {
                await fs.rm(dir, { recursive: true, force: true });
                console.log(`Deleted: ${dir}`);
            })
        );

        console.log('All dist directories have been deleted.');
    } catch (error) {
        console.error('Error deleting dist directories:', error);
        process.exit(1);
    }
})();
