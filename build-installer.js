const electronInstaller = require('electron-winstaller');
const path = require('path');
const fs = require('fs').promises; // Import fs.promises for async operations

async function buildInstaller() {
    console.log('Creating Windows installer...');
    try {
        const outputDir = path.join(__dirname, 'dist/installer');
        await fs.mkdir(outputDir, { recursive: true }); // Ensure output directory exists

        await electronInstaller.createWindowsInstaller({
            appDirectory: path.join(__dirname, 'release-builds/Codolio-win32-x64'),
            outputDirectory: outputDir, // Use the variable for the output directory
            authors: 'Codolio Wrapper',
            exe: 'Codolio.exe',
            description: 'Codolio Desktop Wrapper',
            iconUrl: 'https://codolio.com/favicon.ico', // Placeholder as local file URL might fail if not absolute
            setupIcon: path.join(__dirname, 'codolio image icon.ico'),
            setupExe: 'CodolioSetup.exe',
            noMsi: true
        });
        console.log('Installer created successfully!');
    } catch (e) {
        console.error(`No dice: ${e.message}`);
    }
}

buildInstaller();
