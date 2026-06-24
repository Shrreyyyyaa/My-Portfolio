// 1. Console message check karne ke liye ki script chal rahi hai
console.log("Shreya's Portfolio Script Loaded Successfully! 🚀");

// 2. Time ke hisab se dynamic greeting message console ya screen par dikhane ke liye
const currentHour = new Date().getHours();
let greeting = "";

if (currentHour < 12) {
    greeting = "Good Morning! ☀️ Welcome to my portfolio.";
} else if (currentHour < 18) {
    greeting = "Good Afternoon! 🌤️ Welcome to my portfolio.";
} else {
    greeting = "Good Evening! 🌙 Welcome to my portfolio.";
}

// Aap is greeting ko console mein dekh sakti hain
console.log(greeting);