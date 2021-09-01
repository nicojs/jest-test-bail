require('./monkey-patch');
const fs = require('fs');
const { runCLI, getVersion } = require('jest');

runCLI({ 
    $0: 'stryker',
    _: [],
    config: JSON.stringify({ bail: true }),
    runInBand: true,
    silent: true
}, [process.cwd()]).then(({results}) => {
    const testFiles = results.testResults.map(r => ({
        file: r.testFilePath, 
        skipped: r.testResults.filter(({status})=> status !== 'passed' && status !== 'failed').length
    }));
    const output = require('./output.json');
    output[getVersion()] = testFiles.length === 2 && testFiles.every(testFile => testFile.skipped === 0) ? '❌' : '✅';
    console.error('writing', getVersion(), JSON.stringify(output, null, 2));
    fs.writeFileSync('./output.json', JSON.stringify(output, null, 2));
});
