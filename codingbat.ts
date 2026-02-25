function canBalance() {
    let l = [2]
    let len = l.length
    let result = false

    if(len===1){
        return false
    }

    for (let eleIndex = 0; eleIndex < len; eleIndex++) {
        let rSum = 0
        let lSum = 0
        for (let i = 0; i <= eleIndex; i++) {
            rSum = rSum + l[i]
        }
        if (eleIndex !== len - 1) {
            for (let i = eleIndex + 1; i < len; i++) {
                lSum = lSum + l[i]
            }
        } else {
            lSum = l[eleIndex]
        }
        if (rSum === lSum) {
            return true
        }
    }
    return result
}  

console.log(canBalance())
