function submitForm() {

    const name = document.getElementById("name").value;

    const age = document.getElementById("age").value;

    const gameId = document.getElementById("gameId").value;

    const paymentMethod = document.getElementById("paymentMethod").value;

    const paymentScreenshot = document.getElementById("paymentScreenshot").files[0];

    if (!name || !age || !gameId || !paymentMethod || !paymentScreenshot) {

        alert("Please fill in all the details and upload a screenshot.");

        return;

    }

    const message = `

        🔥 *Payment Order* 🔥

        

        👤 *Name:* ${name}

        🎂 *Age:* ${age}

        🎮 *Game ID:* ${gameId}

        💰 *Payment Method:* ${paymentMethod}

        ✅ *Payment Screenshot:* ${paymentScreenshot.name}

        

        Thank you for your order! We will process it shortly. 🙏

    `;

    

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "9762596912"; // Change to your WhatsApp number

    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

}