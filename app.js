let provider;
let signer;
let account;


const CONTRACT_ADDRESS = "0xYOUR_CONTRACT_ADDRESS";


const ABI = [
"function addEntry(bytes encrypted) public",
];


const connectBtn = document.getElementById("connectWallet");
const walletText = document.getElementById("wallet");
const diaryText = document.getElementById("diaryText");
const saveBtn = document.getElementById("saveEntry");
const genderSelect = document.getElementById("gender");
const themeColor = document.getElementById("themeColor");


connectBtn.onclick = async () => {
if (!window.ethereum) return alert("Install MetaMask");


provider = new ethers.BrowserProvider(window.ethereum);
signer = await provider.getSigner();
account = await signer.getAddress();


walletText.innerText = `Connected: ${account}`;
};


genderSelect.onchange = () => {
document.body.className = genderSelect.value;
};


themeColor.oninput = () => {
document.body.style.background = themeColor.value;
};


saveBtn.onclick = async () => {
if (!signer) return alert("Connect wallet first");


const text = diaryText.value;
if (!text) return;


// 🔐 Encryption placeholder (Zama-compatible flow)
const encrypted = ethers.toUtf8Bytes(btoa(text));


const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
await contract.addEntry(encrypted);


diaryText.value = "";
document.getElementById("status").innerText = "Encrypted entry saved!";
};
