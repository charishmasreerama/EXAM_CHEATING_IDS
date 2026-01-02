let violations = 0;
let examStarted = false;
let inactivityTimer;

function startExam() {
    violations = 0;
    examStarted = true;
    document.getElementById("violations").innerText = "Violations: 0";
    document.getElementById("status").innerText = "Status: Exam Started";
    resetInactivityTimer();
}

// Tab switch detection
document.addEventListener("visibilitychange", function () {
    if (examStarted && document.hidden) {
        violations++;
        updateViolation("Tab switching detected");
    }
});

// Inactivity detection (10 seconds)
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        if (examStarted) {
            violations++;
            updateViolation("Inactivity detected");
        }
    }, 10000);
}

document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);

function updateViolation(reason) {
    document.getElementById("violations").innerText =
        "Violations: " + violations;
    document.getElementById("status").innerText =
        "Alert: " + reason;

    if (violations >= 3) {
        alert("❌ Exam Terminated due to Cheating!");
        examStarted = false;
        document.getElementById("status").innerText =
            "Status: Exam Terminated";
    }
}
