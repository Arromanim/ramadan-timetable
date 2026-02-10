document.addEventListener("DOMContentLoaded", () => {

    // ===== CONFIG (easily changeable rules) =====
    const SEHRI_END = -5;     // minutes
    const FAJR_DELAY = 10;    // minutes
    const IFTAR_DELAY = 2;    // minutes

    // ===== BASE DATA =====
    const baseData = [
        { day: 1, date: "19 Feb", s: "04:55", i: "17:35" },
        { day: 2, date: "20 Feb", s: "04:54", i: "17:36" },
        { day: 3, date: "21 Feb", s: "04:53", i: "17:37" },
        { day: 4, date: "22 Feb", s: "04:53", i: "17:37" },
        { day: 5, date: "23 Feb", s: "04:52", i: "17:38" },
        { day: 6, date: "24 Feb", s: "04:51", i: "17:38" },
        { day: 7, date: "25 Feb", s: "04:50", i: "17:39" },
        { day: 8, date: "26 Feb", s: "04:50", i: "17:39" },
        { day: 9, date: "27 Feb", s: "04:49", i: "17:40" },
        { day: 10, date: "28 Feb", s: "04:48", i: "17:40" },
        { day: 11, date: "01 Mar", s: "04:46", i: "17:42" },
        { day: 12, date: "02 Mar", s: "04:45", i: "17:42" },
        { day: 13, date: "03 Mar", s: "04:44", i: "17:43" },
        { day: 14, date: "04 Mar", s: "04:43", i: "17:43" },
        { day: 15, date: "05 Mar", s: "04:43", i: "17:44" },
        { day: 16, date: "06 Mar", s: "04:42", i: "17:44" },
        { day: 17, date: "07 Mar", s: "04:41", i: "17:45" },
        { day: 18, date: "08 Mar", s: "04:40", i: "17:45" },
        { day: 19, date: "09 Mar", s: "04:39", i: "17:46" },
        { day: 20, date: "10 Mar", s: "04:38", i: "17:46" },
        { day: 21, date: "11 Mar", s: "04:37", i: "17:47" },
        { day: 22, date: "12 Mar", s: "04:36", i: "17:47" },
        { day: 23, date: "13 Mar", s: "04:35", i: "17:48" },
        { day: 24, date: "14 Mar", s: "04:34", i: "17:48" },
        { day: 25, date: "15 Mar", s: "04:33", i: "17:48" },
        { day: 26, date: "16 Mar", s: "04:31", i: "17:49" },
        { day: 27, date: "17 Mar", s: "04:30", i: "17:49" },
        { day: 28, date: "18 Mar", s: "04:29", i: "17:50" },
        { day: 29, date: "19 Mar", s: "04:28", i: "17:50" },
        { day: 30, date: "20 Mar", s: "04:27", i: "17:51" }
    ];

    // ===== TIME UTILITY =====
    function convertTo12Hr(timeStr, offsetMinutes = 0) {
        let [hours, minutes] = timeStr.split(':').map(Number);
        let totalMinutes = hours * 60 + minutes + offsetMinutes;

        totalMinutes = (totalMinutes + 1440) % 1440;

        let h = Math.floor(totalMinutes / 60);
        let m = totalMinutes % 60;

        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;

        return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
    }

    // ===== TABLE RENDER =====
    const tableBody = document.getElementById('timetableBody');
    let html = "";

    baseData.forEach(row => {

        const khatamSehri = convertTo12Hr(row.s, SEHRI_END);
        const azanFajar = convertTo12Hr(row.s, SEHRI_END + FAJR_DELAY);
        const iftar = convertTo12Hr(row.i, IFTAR_DELAY);

        html += `
            <tr>
                <td>${row.day}</td>
                <td dir="ltr">${row.date}</td>
                <td class="time-col sehri">${khatamSehri}</td>
                <td class="time-col fajr">${azanFajar}</td>
                <td class="time-col iftar">${iftar}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;

});
