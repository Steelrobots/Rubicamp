
function findAnagrams(s, p) {
    const p_hash = {};
    const p_len = p.length;

    for (let char of p) {
        p_hash[char] = (p_hash[char] || 0) + 1;
    }

    const result = [];
    let s_hash = {};

    for (let i = 0; i < p_len - 1; i++) {
        s_hash[s[i]] = (s_hash[s[i]] || 0) + 1;
    }

    for (let i = p_len - 1; i < s.length; i++) {
        s_hash[s[i]] = (s_hash[s[i]] || 0) + 1;

        if (isAnagram(p_hash, s_hash)) {
            result.push(i - p_len + 1);
        }

        s_hash[s[i - p_len + 1]]--;
    }

    return result;
}

function isAnagram(p_hash, s_hash) {
    for (let char in p_hash) {
        if (p_hash[char] !== s_hash[char]) {
            return false;
        }
    }

    return true;
}
const hasil =findAnagrams("cbaebabacd", 'abc')
console.log(hasil)