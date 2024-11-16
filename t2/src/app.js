/**
 * the function renders an object to a tagged string and performs token substitution
 * @param {object} input - a javascript object representing a hierachycal structure  
 * @param {object} values - a list of key value pairs where the key is a token to be replaced with the value in strings present in input
 */
function render(input, values) {
    
    if (typeof input !== "object" || input === null || typeof values !== "object" || values === null) {
        throw new Error("InvalidType");
    }

    
    if (Object.keys(input).length === 0) {
        return "";
    }

   
    function processObject(obj) {
        let result = "";

        for (let key in obj) {
            if (typeof obj[key] === "object") {
                result += `<${key}>` + processObject(obj[key]) + `</${key}>`;
            } else if (typeof obj[key] === "string") {
                
                let replacedString = obj[key].replace(/\$\{(.*?)\}/g, (_, token) => {
                    return values[token] || "";
                });
                result += `<${key}>${replacedString}</${key}>`;
            }
        }

        return result;
    }

    return processObject(input);
}

module.exports = {
    render
};