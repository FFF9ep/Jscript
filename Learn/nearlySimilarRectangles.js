function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function nearlySimilarRectangles(sides) {
    const ratioMap = new Map();
    let count = 0;

    for (const [width, height] of sides) {
        const divisor = gcd(width, height);
        const ratio = `${width / divisor}/${height / divisor}`;
        
        if (ratioMap.has(ratio)) {
            count += ratioMap.get(ratio); 
            ratioMap.set(ratio, ratioMap.get(ratio) + 1);
        } else {
            ratioMap.set(ratio, 1);
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const sidesRows = parseInt(readLine().trim(), 10);

    const sidesColumns = parseInt(readLine().trim(), 10);

    let sides = Array(sidesRows);

    for (let i = 0; i < sidesRows; i++) {
        sides[i] = readLine().replace(/\s+$/g, '').split(' ').map(sidesTemp => parseInt(sidesTemp, 10));
    }

    const result = nearlySimilarRectangles(sides);

    ws.write(result + '\n');

    ws.end();
}