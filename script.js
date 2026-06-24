let countdown;

function startCountdown() {

    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;

    if(eventName === "" || eventDate === ""){
        alert("Please enter event details!");
        return;
    }

    document.getElementById("displayEvent").innerText =
        "Countdown to " + eventName;

    const targetDate = new Date(eventDate).getTime();

    clearInterval(countdown);

    countdown = setInterval(() => {

        const now = new Date().getTime();
        const distance = targetDate - now;

        if(distance <= 0){
            clearInterval(countdown);

            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";

            alert("🎉 Event Started!");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

    }, 1000);
}