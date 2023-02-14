const contractAddress = "0xd84eE66DF94C7bdD7ad6E59CC940B4bdF433B039";    /*"0x4ca1f6296B272e0e787c7358040d26978BeBC08f";*/
const contractABI = [{ "inputs": [{ "internalType": "string", "name": "_note", "type": "string" }], "name": "writeNote", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getNote", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }]
let signer;
let  contract;

const provider = new ethers.providers.Web3Provider(window.ethereum, 80001)//80001 = Matic Mumbai's chain_id6  Chain id = уникальный айди блокчейна
provider.send("eth_requestAccounts",[]).then(() => {
      provider.listAccounts().then(
         (accounts) =>{
            signer = provider.getSigner(accounts[0]);
            contract = new ethers.Contract(
               contractAddress,
               contractABI,
               signer
            )
         }
      )
   }
)
async function getNote(){
   console.log(await contract.getNote());
}
async function writeNote(){
   const note = document.getElementById("inputNote").value;
 //  const setNotePromise = contract.writeNote();
   await contract.writeNote(note);
}



