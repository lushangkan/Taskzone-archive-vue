"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    appId: 'cn.cutemc.taskzone',
    appName: 'Taskzone',
    webDir: './dist',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        CapacitorSQLite: {
            iosDatabaseLocation: 'Library/CapacitorDatabase',
            iosIsEncryption: true,
            iosKeychainPrefix: 'angular-sqlite-app-starter',
            iosBiometric: {
                biometricAuth: false,
                biometricTitle: "Biometric login for capacitor sqlite"
            },
        }
    }
};
exports.default = config;
