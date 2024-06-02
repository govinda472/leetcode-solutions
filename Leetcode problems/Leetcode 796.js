/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    
    let lens = [];
    for (let i = 0; i < s.length; i++) {
        if (goal[i] === s[0]) {
            lens.push(i);
        }
    }

    for (let i = 0; i < lens.length; i++) {
        let curr = lens[i];
        let match = true;
        for (let j = 0; j < s.length; j++) {
            if (goal[(curr + j) % s.length] !== s[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }

    return false;
};
