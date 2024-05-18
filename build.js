/**
 * BUILD SCRIPT FOR JAVASCRIPT
 */

const fs = require('fs');

const getSecretProperties = () => JSON.parse(fs.readFileSync('./secret-properties.json', 'utf-8'));

const validateSecretProperties = (secretProperties) => secretProperties.MLB && secretProperties.SystemSerialNumber && secretProperties.SystemUUID;

const processReplace = (secretProperties) => {
    const originalConfigPlist = fs.readFileSync('./EFI/OC/config.plist', 'utf-8');

    const replaced = originalConfigPlist.replace(
        '${{MLB}}',
        secretProperties.MLB
    ).replace(
        '${{SystemSerialNumber}}',
        secretProperties.SystemSerialNumber
    ).replace(
        '${{SystemUUID}}',
        secretProperties.SystemUUID
    )

    fs.writeFileSync('./EFI/OC/config.plist', replaced);
}

console.log('getting secret properties...');

const secretProperties = getSecretProperties();

console.log('validate secret properties...');

if (!validateSecretProperties(secretProperties)) {
    throw new Error('failed to validate secret properties!');
}

console.log('Processing replace...');

processReplace(secretProperties);

console.log('Successfully build config.plist!');