function isAnagram(p_hash, s_hash) {
    for (let char in p_hash) {
        if (p_hash[char] !== s_hash[char]) {
            return false;
        }
    }

    return true;
}


function isAnagram(p_chars, s_chars) {
    const p_counts = {};
    const s_counts = {};

    for (let char of p_chars) {
        p_counts[char] = (p_counts[char] || 0) + 1;
    }

    for (let char of s_chars) {
        s_counts[char] = (s_counts[char] || 0) + 1;
    }

    for (let char in p_counts) {
        if (p_counts[char] !== s_counts[char]) {
            return false;
        }
    }

    return true;
}
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


const hasil =findAnagrams("cbaebabacd", 'abc')
console.log(hasil)

// return Array.from[s].map(a,i) => Array.from

function findAnagrams(s, p) {
    const p_chars = p.split('');
    const p_len = p.length;
    const result = [];
    let s_chars = [];

    for (let i = 0; i < p_len; i++) {
        s_chars.push(s[i]);
    }

    for (let i = 0; i < s_len - p_len + 1; i++) {
        if (isAnagram(p_chars, s_chars)) {
            result.push(i);
        }

        s_chars.shift();
        s_chars.push(s[i + p_len]);
    }

    return result;
}

function isAnagram(p_chars, s_chars) {
    const p_counts = {};
    const s_counts = {};

    for (let char of p_chars) {
        p_counts[char] = (p_counts[char] || 0) + 1;
    }

    for (let char of s_chars) {
        s_counts[char] = (s_counts[char] || 0) + 1;
    }

    for (let char in p_counts) {
        if (p_counts[char] !== s_counts[char]) {
            return false;
        }
    }

    return true;
}

function findAnagrams(s, p) {
    const result = [];
    
    // Helper function to check if two strings are anagrams of each other
    function areAnagrams(str1, str2) {
        if (str1.length !== str2.length) return false;
        const charCount = {};
        for (let i = 0; i < str1.length; i++) {
            charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
            charCount[str2[i]] = (charCount[str2[i]] || 0) - 1;
        }
        for (let count of Object.values(charCount)) {
            if (count !== 0) return false;
        }
        return true;
    }
    
    for (let i = 0; i <= s.length - p.length; i++) {
        const window = s.substring(i, i + p.length);
        if (areAnagrams(window, p)) {
            result.push(i);
        }
    }
    
    return result;
}
