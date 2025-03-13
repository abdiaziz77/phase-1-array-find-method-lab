// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

const broncosRecord = [
    { year: "2015", team: "Denver Broncos", result: "W" },
    { year: "2013", team: "Denver Broncos", result: "L" },
    { year: "1998", team: "Denver Broncos", result: "W" },
    { year: "1997", team: "Denver Broncos", result: "W" }
];

console.log(superbowlWin(broncosRecord));
