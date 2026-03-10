const a = 'a'.charCodeAt(0);
const A = 'A'.charCodeAt(0);

export const ceasarCipher = function(string, shift) {
    const code = string.split("").map(char => {
        const charCode = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
            const newCode = (charCode - a + shift) % 26 + a;
            return String.fromCharCode(newCode)
        } else if (char >= 'A' && char <= 'Z') {
            const newCode = (charCode - A + shift) % 26 + A;
            return String.fromCharCode(newCode)
        } else {
            return char;
        }
    }).join("")
    return code
}