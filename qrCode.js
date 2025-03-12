function genQR(stringValues) {
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: stringValues,
    width: 256,
    height: 256,
    colorDark : '#000',
    colorLight : '#fff',
    correctLevel : QRCode.CorrectLevel.H
  });
}
