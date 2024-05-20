const fs = require('fs');
const { exec } = require('child_process');

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

function checkAndInstallNpmLibraries(callback) {
    const start = performance.now();
    const npmLibraries = readLibraryFile('npm_commands.txt');
    let pending = npmLibraries.length;
    let results = { success: [], failed: [], time: [] };

    npmLibraries.forEach(library => {
        exec(`npm list ${library}`, (error, stdout, stderr) => {
            if (stdout.includes('missing')) {
                console.log(`${library} nie jest zainstalowane, instalowanie...`);
                exec(`npm install ${library}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Błąd podczas instalowania ${library}: ${error}`);
                        results.failed.push(library);
                    } else {
                        console.log(`${library} zainstalowane pomyślnie.`);
                        results.success.push(library);
                    }
                    if (--pending === 0) {
                        const end = performance.now()
                        const czas = (start-end)/1000
                        results.time.push(czas);
                        callback(results);
                    }
                });
            } else {
                console.log(`${library} jest już zainstalowane.`);
                results.success.push(library);
                if (--pending === 0) {
                    const end = performance.now()
                    const czas = (start-end)/1000
                    results.time.push(czas);
                    callback(results);
                }
            }
        });
    });
}

function checkAndInstallNpxLibraries(callback) {
    const start = performance.now();
    const npxLibraries = readLibraryFile('npx_commands.txt');
    let pending = npxLibraries.length;
    let results = { success: [], failed: [] , time: []};

    npxLibraries.forEach(library => {
        exec(`npm show ${library}`, (error, stdout, stderr) => {
            if (stdout === '') {
                console.log(`${library} nie jest zainstalowane, instalowanie...`);
                exec(`npx expo ${library}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Błąd podczas instalowania ${library}: ${error}`);
                        results.failed.push(library);
                    } else {
                        console.log(`${library} zainstalowane pomyślnie.`);
                        results.success.push(library);
                    }
                    if (--pending === 0) {
                        const end = performance.now()
                        const czas = (start-end)/1000
                        results.time.push(czas);
                        callback(results);
                    }
                });
            } else {
                console.log(`${library} jest już zainstalowane.`);
                results.success.push(library);
                if (--pending === 0) {
                    const end = performance.now()
                    const czas = (start-end)/1000
                    results.time.push(czas);
                    callback(results);
                }
            }
        });
    });
}

function summarizeResults(npmResults, npxResults) {
    console.log("\nPodsumowanie instalacji bibliotek npm:");
    console.log("Zainstalowane pomyślnie:", npmResults.success);
    console.log("Błędy podczas instalacji:", npmResults.failed);
    console.log("Czas programu npm:", npxResults.time), " sekund";

    console.log("\nPodsumowanie instalacji bibliotek npx:");
    console.log("Zainstalowane pomyślnie:", npxResults.success);
    console.log("Błędy podczas instalacji:", npxResults.failed);
    console.log("Czas programu npx:", npxResults.time, " sekund");
}

// Wywołanie funkcji i podsumowanie wyników
checkAndInstallNpmLibraries(npmResults => {
    checkAndInstallNpxLibraries(npxResults => {
        summarizeResults(npmResults, npxResults);
    });
});
