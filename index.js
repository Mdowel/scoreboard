let homeCount = 0
let guestCount = 0
let scoreElHome = document.getElementById("score-el-home")
let scoreElGuest = document.getElementById("score-el-guest")

function add1home() {
    homeCount += 1
    scoreElHome.innerText = homeCount
}
function add1guest() {
    guestCount += 1
    scoreElGuest.innerText = guestCount
}


function add2home() {
    homeCount += 2
    scoreElHome.innerText = homeCount
}
function add2guest() {
    guestCount += 2
    scoreElGuest.innerText = guestCount
}


function add3home() {
    homeCount += 3
    scoreElHome.innerText = homeCount
}
function add3guest() {
    guestCount += 3
    scoreElGuest.innerText = guestCount
}
