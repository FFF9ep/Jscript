'use strict';

const fs = require('fs');
const axios = require('axios');

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
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function getTotalGoals(team, year) {
    const baseURL = 'https://jsonmock.hackerrank.com/api/football_matches';
    let totalGoals = 0;

    async function fetchGoals(params) {
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages) {
            try {
                const response = await axios.get(baseURL, {
                    params: { ...params, page }
                });

                const data = response.data;
                totalPages = data.total_pages;

                data.data.forEach(match => {
                    if (params.team1) {
                        totalGoals += parseInt(match.team1goals, 10);
                    } else if (params.team2) {
                        totalGoals += parseInt(match.team2goals, 10);
                    }
                });

                page++;
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
                break;
            }
        }
    }

    await fetchGoals({ year, team1: team });

    await fetchGoals({ year, team2: team });

    return totalGoals;
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const team = readLine().trim();
    const year = parseInt(readLine().trim(), 10);

    const result = await getTotalGoals(team, year);

    ws.write(result + '\n');
    ws.end();
}
