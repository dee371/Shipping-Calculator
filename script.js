document.getElementById("shippingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const pickup = document.getElementById("pickup").value;
    const delivery = document.getElementById("delivery").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const packageType = document.getElementById("packageType").value;
    const speed = document.getElementById("speed").value;

    // Base price
    let price = 50;

    // Weight charge
    price += weight * 40;

    // Package type charge
    if (packageType === "small") {
        price += 30;
    } else if (packageType === "large") {
        price += 80;
    }

    // Delivery speed charge
    if (speed === "express") {
        price += 100;
    }

    // Delivery days
    let days;

    if (speed === "express") {
        days = "1–2 days";
    } else {
        days = "3–5 days";
    }

    // Display result
    document.getElementById("route").textContent =
        `Route: ${pickup} → ${delivery}`;

    document.getElementById("days").textContent =
        `Estimated Delivery: ${days}`;

    document.getElementById("price").textContent =
        `₹${price.toFixed(2)}`;
});