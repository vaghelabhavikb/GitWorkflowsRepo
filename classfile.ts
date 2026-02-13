export class School {
    public name: string
    public floorRooms = new Map<Floor, Rooms>()
    public nurseryRooms = new Array<Room>()
    public students = new Set<Student>()
    constructor(n: string) {
        this.name = n
    }
}

export class Room {
    public capacity: number = 0
    public roomNo: number
    public floorNo: number
    constructor(rn: number, fn: number) {
        this.roomNo = rn
        this.floorNo = fn
    }
}

export class Rooms {
    public noOfRoomsOnFloor: number
    public rooms = new Array<Room>()
    constructor(n: number) {
        this.noOfRoomsOnFloor = n
    }
}

export class Floor {
    public floorNo: number
    constructor(fn: number) {
        this.floorNo = fn
    }
}

export class Student {
    public name: string
    public roomNo: number
    public rollNo: number
    constructor(n: string, rn: number, i: number) {
        this.name = n
        this.roomNo = rn
        this.rollNo = i
    }
}