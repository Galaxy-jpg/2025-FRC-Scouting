function genQR(stringValues) {
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: stringValues,
    width: 128,
    height: 128,
    colorDark : '#000',
    colorLight : '#fff',
    correctLevel : QRCode.CorrectLevel.H
  });
}
