const fs = require('fs');
const { exec } = require('child_process');

// Funkcja do odczytu pliku i pobrania zawartości jako tablica linii
function readLibraryFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.split('\n').map(line => line.trim());
        return lines.filter(line => line !== ''); // Usuwa puste linie
    } catch (err) {
        console.error(`Błąd podczas odczytu pliku ${filename}:`, err);
        return [];
    }
}

// Funkcja do sprawdzania i instalacji bibliotek npm
function checkAndInstallNpmLibraries() {
    const npmLibraries = readLibraryFile('npm_commands.txt');
    npmLibraries.forEach(library => {
        exec(`npm list ${library}`, (error, stdout, stderr) => {
            if (stdout.includes('missing')) {
                console.log(`${library} nie jest zainstalowane, instalowanie...`);
                exec(`npm install ${library}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Błąd podczas instalowania ${library}: ${error}`);
                    } else {
                        console.log(`${library} zainstalowane pomyślnie.`);
                    }
                });
            } else {
                console.log(`${library} jest już zainstalowane.`);
            }
        });
    });
}

// Funkcja do sprawdzania i instalacji bibliotek npx
function checkAndInstallNpxLibraries() {
    const npxLibraries = readLibraryFile('npx_commands.txt');
    npxLibraries.forEach(library => {
        exec(`npm show ${library}`, (error, stdout, stderr) => {
            if (stdout === '') {
                console.log(`${library} nie jest zainstalowane, instalowanie...`);
                exec(`npx expo ${library}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Błąd podczas instalowania ${library}: ${error}`);
                    } else {
                        console.log(`${library} zainstalowane pomyślnie.`);
                    }
                });
            } else {
                console.log(`${library} jest już zainstalowane.`);
            }
        });
    });
}

// Wywołanie funkcji
checkAndInstallNpmLibraries();
checkAndInstallNpxLibraries();
