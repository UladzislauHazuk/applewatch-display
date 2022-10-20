class AppleWatch {
    constructor() {
        this.currentTime();
    }

    updateTime(k) {
        if (k < 10) {   
            return '0' + k;
        } else {
            return k;
        }
    }

    currentTime() {
        const date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let year = date.getFullYear();

        hour = this.updateTime(hour);
        min = this.updateTime(min);
    
        document.getElementById('clock').innerText = `${hour}:${min}`;
        document.getElementById('year').innerText = `since. ${year}`;

        setTimeout(this.currentTime, 1000);
    }
}

const appleWatch = new AppleWatch();