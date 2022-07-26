function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 




  const networkLogo = document.getElementById("network-logo")
  let submitBtn = document.getElementById("submit-btn")

  let formInput = document.getElementById("phone");
  formInput.addEventListener('change', () => {
    let phoneNum =
      document.getElementById("phone").value;
    findSubscriber(phoneNum);
    if (phoneNum == '') {
      networkLogo.src = '';
      let para = document.getElementById('para');
      para.innerText = "";
      networkLogo.classList.remove('scale');
    }
  })


  // formInput.addEventListener("change", findSubscriber(phoneNum))

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let phoneNum = document.getElementById("phone").value;
    let para = document.getElementById('para');
    para.innerText = phoneNum;
    para.classList.add('addClass');
    findSubscriber(phoneNum)

  })




}

function findSubscriber(phoneNumberCC) {
  // Airtel
  let networkLogo = document.getElementById("network-logo");


  if (phoneNumberCC.includes("0701") || phoneNumberCC.includes("0708") ||
    phoneNumberCC.includes("0802") || phoneNumberCC.includes("0808") ||
    phoneNumberCC.includes("0812") || phoneNumberCC.includes("0901") ||
    phoneNumberCC.includes("0902") || phoneNumberCC.includes("0904") ||
    phoneNumberCC.includes("0907") || phoneNumberCC.includes("0912")) {



    networkLogo.src = '/img/Airtel Nigeria Logo.svg';
    let para = document.getElementById('para');
    para.innerText = "";
    networkLogo.classList.add('scale');
    // add img src to Airtel logo
    // src = "link to logo";               
  }

  // MTN
  if (phoneNumberCC.includes("07025") || phoneNumberCC.includes("07026") ||
    phoneNumberCC.includes("0703") || phoneNumberCC.includes("0704") ||
    phoneNumberCC.includes("0706") || phoneNumberCC.includes("0803") ||
    phoneNumberCC.includes("0806") || phoneNumberCC.includes("0810") ||
    phoneNumberCC.includes("0813") || phoneNumberCC.includes("0816") ||
    phoneNumberCC.includes("0903") || phoneNumberCC.includes("0906") ||
    phoneNumberCC.includes("0913") || phoneNumberCC.includes("0916")) {

    let para = document.getElementById('para');
    para.innerText = "*Enter Airtel Number";
    para.classList.add('addClass');
    networkLogo.src = '/img/MTN Logo.svg';
    networkLogo.classList.add('scale');
    // add img src to MTN logo

  }

  // GLO
  if (phoneNumberCC.includes("0705") || phoneNumberCC.includes("0805") ||
    phoneNumberCC.includes("0807") || phoneNumberCC.includes("0811") ||
    phoneNumberCC.includes("0815") || phoneNumberCC.includes("0905") ||
    phoneNumberCC.includes("0915")) {

    let para = document.getElementById('para');
    para.innerText = "*Enter Airtel Number";
    para.classList.add('addClass');
    networkLogo.src = '/img/Globacom Limited Logo.svg';
    networkLogo.classList.add('scale');
    // add img src to GLO logo
  }

  // 9mOBLIE
  if (phoneNumberCC.includes("0809") || phoneNumberCC.includes("0817") ||
    phoneNumberCC.includes("0818") || phoneNumberCC.includes("0909") ||
    phoneNumberCC.includes("0908")) {

    let para = document.getElementById('para');
    para.innerText = "*Enter Airtel Number";
    para.classList.add('addClass');
    networkLogo.src = '/img/9mobile Logo.svg';
    networkLogo.classList.add('scale');
    // add img src to 9MOBILE logo
  }
}



// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //