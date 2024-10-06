'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'renameFile' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING newName
 *  2. STRING oldName
 */

function renameFile(newName, oldName) {
    const MOD = 1e9 + 7;
    const n = newName.length;
    const m = oldName.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (oldName[i - 1] === newName[j - 1]) {
                dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % MOD;
            } else {
                dp[i][j] = dp[i - 1][j] % MOD;
            }
        }
    }

    return dp[m][n];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const newName = readLine();

    const oldName = readLine();

    const result = renameFile(newName, oldName);

    ws.write(result + '\n');

    ws.end();
}
