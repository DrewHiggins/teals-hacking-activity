function encrypt(plaintext) {
    plaintext = plaintext.toUpperCase();
    var key = 5;
    var cipherText = "";
    for (var i = 0; i < plaintext.length; i++) {
        var charCode = plaintext.charCodeAt(i) - 65;
        cipherText += String.fromCharCode(((charCode + key) % 25) + 65);
    }

    return cipherText;
};

function checkPassword() {
    document.getElementById('access-denied-msg').style = "display:none";
    var password = document.getElementById('passwd').value;
    var encryptedPass = encrypt(password);
    var encryptedTarget = 'HMJQFSLTFYXHX';
    console.log('Password input as ', password);
    console.log('Encrypting password as ', encryptedPass);
    console.log('Comparing to ', encryptedTarget);

    if (encryptedPass === encryptedTarget) {
        console.log('ACCESS GRANTED!');
        document.getElementById('access-granted-msg').style = "display:block";
    } else {
        console.error('ACCESS DENIED');
        document.getElementById('access-denied-msg').style = "display:block";
    }
};

var loginBtn = document.getElementById('login-btn');
var pasInput = document.getElementById('passwd').addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        checkPassword();
    }
});

loginBtn.addEventListener('click', checkPassword);