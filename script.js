function detectCheating() {
    const alerts = [
        "⚠️ Mobile Phone Detected!",
        "⚠️ Multiple Face Detected!",
        "⚠️ Head Movement Suspicious!",
        "✅ No Cheating Detected"
    ];

    const result = alerts[Math.floor(Math.random() * alerts.length)];
    document.getElementById("result").innerText = result;
}