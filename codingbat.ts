let l: number[] = [1, 4, 2, 1, 4, 4, 4]
let len = l.length
let result = 0
let sMap = new Map<number, number>()
let eMap = new Map<number, number>()

for (let i = 0; i < len; i++) {
    if (!sMap.has(l[i])) {
        sMap.set(l[i], i)
    } else {
        eMap.set(l[i], i)
    }
}

    sMap.forEach((value: number, key: number) => {
        if (eMap.has(key)) {
            const eMapValue = eMap.get(key);
            if (eMapValue !== undefined) {
                result = Math.max(result, eMapValue - value + 1);
            }
        }
        else {
            result = Math.max(result, 1)
        }
    })

    console.log(result)
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
