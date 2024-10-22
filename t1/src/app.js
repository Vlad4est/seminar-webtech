const rle = (a, b = true) => {
    if (typeof a !== "string") {
        throw new Error("InvalidType");
    }

    if (typeof b !== "boolean") {
        throw new Error("InvalidType");
    }

    if (a.length === 0) {
        return ""; 
    }

    if (b) {
       
        let compressed = "";
        let count = 1;

        for (let i = 0; i < a.length; i++) {
            if (a[i] === a[i + 1]) {
                count++;
            } else {
                compressed += a[i] + count;
                count = 1;
            }
        }
        return compressed;
    } else {
        let decompressed = "";
        let i = 0;

        while (i < a.length) {
            let char = a[i];
            let j = i + 1;
            let count = "";

            while (j < a.length && !isNaN(a[j])) {
                count += a[j];
                j++;
            }

            decompressed += char.repeat(count);
            i = j;
        }
        return decompressed;
    }
};
module.exports = rle;
