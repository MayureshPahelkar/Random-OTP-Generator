// Get DOM Elements
const otpDisplay = document.getElementById("otp");
const copyOtp = document.getElementById("copyOtp");
const generateOtp = document.getElementById("generateOtp");

// Function to generate a random OTP
function generateRandomOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  return otp.toString();
}

// Set OTP in the display
function setOTP() {
  const otp = generateRandomOTP();
  otpDisplay.textContent = otp;
}

// Copy OTP to clipboard
copyOtp.addEventListener("click", () => {
  const otp = otpDisplay.textContent;
  navigator.clipboard.writeText(otp).then(() => {
    alert(`OTP Copied: ${otp}`);
  });
});

// Generate OTP on button click
generateOtp.addEventListener("click", setOTP);

// Generate an OTP when the page loads
setOTP();
