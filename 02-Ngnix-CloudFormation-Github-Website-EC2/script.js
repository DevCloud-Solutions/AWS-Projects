// Dil seçimi değiştikçe çalışacak işlev
document.getElementById("Dil").addEventListener("change", function () {
  var selectedLang = this.value;

  // Dil tercihini yerel depolamada sakla
  localStorage.setItem("selectedLang", selectedLang);

  // Sayfa içeriğini güncelle
  updateContent(selectedLang);
});

// Sayfa yüklendiğinde kullanıcının önceki dil tercihini kontrol et
var storedLang = localStorage.getItem("selectedLang");
if (storedLang) {
  document.getElementById("Dil").value = storedLang;
  updateContent(storedLang);
}

// Sayfa içeriğini güncelleyen işlev
function updateContent(lang) {
  const pageTitle = document.getElementById("pageTitle");
  const contentParagraph = document.getElementById("contentParagraph");
  const altParagraph = document.getElementById("altparagraf");
  const searchBox = document.getElementById("search-box");
  const searchButton = document.getElementById("search-button");

  if (lang === "tr") {
    // Türkçe içeriğini güncelle
    üyelik.textContent = "Oturum Aç";
    pageTitle.textContent = "Herkes burada!";
    contentParagraph.textContent =
      "Favori oyuncunuz, en yakın arkadaşınız, karşı komşunuz. Tabii filmin, dizinin ve belgeselin âlâsı da.";
    altParagraph.textContent =
      "İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.";
    searchButton.textContent = "Başlayın >";
    searchBox.placeholder = "E-posta adresi";
  } else if (lang === "en") {
    // İngilizce içeriğini güncelle
    üyelik.textContent = "Sign In";
    pageTitle.textContent = "Join the buzz";
    contentParagraph.textContent =
      "Your favorite actors, best friends and neighbors are here. And so are the top films, series and more.";
    altParagraph.textContent =
      "Ready to watch? Enter your email to create or restart your membership.";
    searchButton.textContent = "Get Started";
    searchBox.placeholder = "Email address";
  }
}
// E-posta adresi kutusu ve "Başlayın" butonunu alın
const emailInput = document.getElementById("search-box");
const startButton = document.getElementById("search-button");

// "Başlayın" butonuna tıklanıldığında işlem yapın
startButton.addEventListener("click", function () {
  // E-posta adresi kutusundan e-posta adresini alın
  const email = emailInput.value;

  // E-posta adresi geçerliyse belirtilen adrese git
  if (isValidEmail(email)) {
    window.location.href =
      "https://www.netflix.com/signup/registration?locale=tr-TR";
  } else {
    alert("Geçerli bir e-posta adresi girin.");
  }
});

// E-posta adresinin geçerli olup olmadığını kontrol eden işlev
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
