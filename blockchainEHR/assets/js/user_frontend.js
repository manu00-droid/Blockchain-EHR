

window.addEventListener("DOMContentLoaded", (event) => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.getElementById("btn");
    updateDateTime();
    setInterval(updateDateTime, 1000);


    function updateDateTime() {
        const currentDate = new Date();
        const formattedDateTime = formatTimeAndDate(currentDate);
        document.getElementById("current_date").textContent = formattedDateTime;
    }

    function formatTimeAndDate(date) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm} ${dayOfWeek}, ${day} ${month} ${year}`;
    }

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class

        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }

    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
    });


});
