function currentTime() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let year = date.getFullYear();

    hour = updateTime(hour);
    min = updateTime(min);

    document.getElementById('clock').innerText = `${hour}:${min}`;
    document.getElementById('year').innerText = `since. ${year}`;
}

let t = setTimeout(currentTime, 1000);

function updateTime(k) {
    if (k < 10) {   
        return '0' + k;
    } else {
        return k;
    }
}

currentTime();