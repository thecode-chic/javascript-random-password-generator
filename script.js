// Generate random password
function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Update password display
function updatePasswordDisplay() {
    const passwordLength = 10; // Change this value as per your requirements
    const password = generatePassword(passwordLength);
    document.getElementById('password').textContent = password;
}

// Generate password on button click
document.getElementById('generate-btn').addEventListener('click', updatePasswordDisplay);