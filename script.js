function generateQRCode() {
    var url = document.getElementById("url-input").value;
    var qrCodeDiv = document.getElementById("qrcode");

    // Clear previous QR codes
    qrCodeDiv.innerHTML = "";

    if (url.trim() === "") {
        alert("Please enter a valid URL");
        return;
    }

    // Generate QR Code
    new QRCode(qrCodeDiv, {
        text: url,
        width: 200,
        height: 200
    });
}
