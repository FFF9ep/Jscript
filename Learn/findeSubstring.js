function findSubstring(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowels = 0;
    let currentVowels = 0;
    let result = 'Not found!';

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
    }

    if (currentVowels > 0) {
        maxVowels = currentVowels;
        result = s.substring(0, k);
    }

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
        if (vowels.has(s[i - k])) {
            currentVowels--;
        }
        if (currentVowels > maxVowels) {
            maxVowels = currentVowels;
            result = s.substring(i - k + 1, i + 1);
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = findSubstring(s, k);

    ws.write(result + '\n');

    ws.end();
}