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