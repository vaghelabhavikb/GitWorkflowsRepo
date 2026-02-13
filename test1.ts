import { School, Floor, Rooms, Room } from "./classfile"

let s = new School("MK")
s.floorRooms.set(new Floor(1), new Rooms(6))
s.floorRooms.set(new Floor(2), new Rooms(4))

s.floorRooms.forEach((r: Rooms, f: Floor) => {
    let n = 1
    while (n <= r.noOfRoomsOnFloor) {
        r.rooms.push(new Room(Number(f.floorNo.toString() + "0" + n.toString()), f.floorNo))
        n++
    }
})

s.floorRooms.forEach((r: Rooms, f: Floor) => {
  console.log(r.rooms)
  console.log("=")
})

s.floorRooms.forEach((r: Rooms, f: Floor) => {
    if (f.floorNo === 1) {
        s.nurseryRooms.push(...r.rooms)
    }
})

console.log(s.nurseryRooms)
