const dateDisplay = document.getElementById('date');
const sehriDisplay = document.getElementById('sehri');
const iftarDisplay = document.getElementById('iftar');
const sehriCountdownDisplay = document.getElementById('sehri-countdown');
const iftarCountdownDisplay = document.getElementById('iftar-countdown');

const timetableData = {
    "Sreemangal": {
        "2025-03-12": { "sehri": "04:56 AM", "iftar": "05:56 PM" },
        "2025-03-13": { "sehri": "04:56 AM", "iftar": "05:57 PM" },
        "2025-03-14": { "sehri": "04:55 AM", "iftar": "05:57 PM" },
        "2025-03-15": { "sehri": "04:54 AM", "iftar": "05:58 PM" },
        "2025-03-16": { "sehri": "04:53 AM", "iftar": "05:58 PM" },
        "2025-03-17": { "sehri": "04:52 AM", "iftar": "05:59 PM" },
        "2025-03-18": { "sehri": "04:51 AM", "iftar": "05:59 PM" },
        "2025-03-19": { "sehri": "04:50 AM", "iftar": "05:59 PM" },
        "2025-03-20": { "sehri": "04:49 AM", "iftar": "06:00 PM" },
        "2025-03-21": { "sehri": "04:48 AM", "iftar": "06:00 PM" },
        "2025-03-22": { "sehri": "04:47 AM", "iftar": "06:01 PM" },
        "2025-03-23": { "sehri": "04:46 AM", "iftar": "06:01 PM" },
        "2025-03-24": { "sehri": "04:45 AM", "iftar": "06:02 PM" },
        "2025-03-25": { "sehri": "04:44 AM", "iftar": "06:02 PM" },
        "2025-03-26": { "sehri": "04:44 AM", "iftar": "06:02 PM" },
        "2025-03-27": { "sehri": "04:43 AM", "iftar": "06:03 PM" },
        "2025-03-28": { "sehri": "04:41 AM", "iftar": "06:03 PM" },
        "2025-03-29": { "sehri": "04:40 AM", "iftar": "06:04 PM" },
        "2025-03-30": { "sehri": "04:39 AM", "iftar": "06:04 PM" },
        "2025-03-31": { "sehri": "04:38 AM", "iftar": "06:05 PM" },
        "2025-04-01": { "sehri": "04:37 AM", "iftar": "06:05 PM" },
        "2025-04-02": { "sehri": "04:35 AM", "iftar": "06:06 PM" },
        "2025-04-03": { "sehri": "04:34 AM", "iftar": "06:06 PM" },
        "2025-04-04": { "sehri": "04:33 AM", "iftar": "06:06 PM" },
        "2025-04-05": { "sehri": "04:32 AM", "iftar": "06:07 PM" },
        "2025-04-06": { "sehri": "04:31 AM", "iftar": "06:07 PM" },
        "2025-04-07": { "sehri": "04:30 AM", "iftar": "06:08 PM" },
        "2025-04-08": { "sehri": "04:29 AM", "iftar": "06:08 PM" },
        "2025-04-09": { "sehri": "04:28 AM", "iftar": "06:08 PM" },
        "2025-04-10": { "sehri": "04:27 AM", "iftar": "06:09 PM" }
    }
};

const city = "Sreemangal";

function updateTimetable() {
    const now = new Date();
    const year = 2025; // Set the year to 2025
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const today = `<span class="math-inline">\{year\}\-</span>{month}-${day}`;

    if (timetableData[city] && timetableData[city][today]) {