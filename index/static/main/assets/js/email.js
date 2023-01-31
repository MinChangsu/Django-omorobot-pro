function copyEmail(number) {
    var copyText = $(`.copyEmail-${number}`)[0];
    copyText.select();
    document.execCommand("Copy");
    alert('E-mail Copied!');
}