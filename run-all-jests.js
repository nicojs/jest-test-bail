const { execSync } = require('child_process');
const jestVersions = require('./jest-versions.json');

jestVersions.reverse();

for(const version of jestVersions){
    console.log(`Testing version ${version}`)
    execSync(`npm i -D jest@${version}`);
    execSync('node ./run-jest.js');
}