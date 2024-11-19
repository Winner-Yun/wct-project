const textContent = {
  en: {
    headerText: "Sign in with Google",
    subtitleText:
      "Choose an account to continue to <span class='highlight'>Kanesha</span>",
    addAccountText: "Use another account",
    infoText:
      "Before using this software, you can check <a href='#' class='link'>Kanesha's privacy policy</a> and <a href='#' class='link'>terms of use</a>.",
    privacyText: "Privacy",
    termsText: "Terms of Service",
    helpText: "Help",
  },
  km: {
    headerText: "ចូលជាមួយគណនី Google",
    subtitleText:
      "ជ្រើសរើសគណនី ដើម្បីបន្តទៅ <span class='highlight'>Kanesha</span>",
    addAccountText: "ប្រើគណនីផ្សេងទៀត",
    infoText:
      "មុនពេល​ប្រើកម្មវិធី​នេះ អ្នកអាច​ពិនិត្យមើល <a href='#' class='link'>គោលការណ៍  ​ឯកជនភាព</a> និង <a href='#' class='link'>លក្ខខណ្ឌ​ប្រើប្រាស់</a> ​របស់ Kanesha ជាមុនសិន។",
    privacyText: "ឯកជនភាព",
    termsText: "លក្ខខណ្ឌសេវាកម្ម",
    helpText: "ជំនួយ",
  },
};

let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "km" : "en";
  updateText();

  document.querySelector(".language-switch").textContent =
    currentLang === "en" ? "khmer" : "អង់គ្លេស";
}

function updateText() {
  document.getElementById("subtitleText").innerHTML =
    textContent[currentLang].subtitleText;
  document.getElementById("addAccountText").textContent =
    textContent[currentLang].addAccountText;
  document.getElementById("infoText").innerHTML =
    textContent[currentLang].infoText;
  document.getElementById("privacyText").textContent =
    textContent[currentLang].privacyText;
  document.getElementById("termsText").textContent =
    textContent[currentLang].termsText;
  document.getElementById("helpText").textContent =
    textContent[currentLang].helpText;
}

updateText();
