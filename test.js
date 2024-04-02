function solution(s) {
    let count = 1;
    for(let i = 1; i < s.length; i++){
        if(s[i] == s[i - 1])
            count++;
        else {
            console.log(count);
            if (count > 1) {
                s = s.replace(s.slice(i - count, i), count + s[i - 1]);
                count = 1;
            }
        }
    }
    return s;
}
console.log(solution("wwwwwwwawwwwwww"));