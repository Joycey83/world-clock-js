// Time and second
const updateCityTime = function () {
  // Hong Kong Local Time Zone (Asia)
  let hongKong = document.querySelector("#hong-kong");
  if (hongKong) {
    let hongKongDate = hongKong.querySelector(".date");
    let hongKongTime = hongKong.querySelector(".time");

    let HongKongTimeElement = moment().tz("Asia/Hong_Kong");

    hongKongDate.innerHTML = HongKongTimeElement.format("Do MMMM YYYY");
    hongKongTime.innerHTML = HongKongTimeElement.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  // Louisville Local Time Zone (America)

  let louisville = document.querySelector("#louisville");
  if (louisville) {
    let louisvilleDate = louisville.querySelector(".date");
    let louisvilleTime = louisville.querySelector(".time");

    let louisvilleTimeElement = moment().tz("America/Kentucky/Louisville");

    louisvilleDate.innerHTML = louisvilleTimeElement.format("Do MMMM YYYY");
    louisvilleTime.innerHTML = louisvilleTimeElement.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  // Rome Local Time Zone (Europe)

  let rome = document.querySelector("#rome");
  if (rome) {
    let romeDate = rome.querySelector(".date");
    let romeTime = rome.querySelector(".time");

    let romeTimeElement = moment().tz("Europe/Rome");

    romeDate.innerHTML = romeTimeElement.format("Do MMMM YYYY");
    romeTime.innerHTML = romeTimeElement.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  // Johannesburg Local Time Zone (Africa)

  let johannesburg = document.querySelector("#johannesburg");
  if (johannesburg) {
    let johannesburgDate = johannesburg.querySelector(".date");
    let johannesburgTime = johannesburg.querySelector(".time");

    let johannesburgTimeElement = moment().tz("Africa/Johannesburg");

    johannesburgDate.innerHTML = johannesburgTimeElement.format("Do MMMM YYYY");
    johannesburgTime.innerHTML = johannesburgTimeElement.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
};
// Random City Image Function

let differentCityImage = document.querySelector("#city-option");

const getCityImage = function () {
  let mixCityImages = [
    "../images/city-image-1.jpg",
    "../images/city-image-2.jpg",
    "../images/city-image-3.jpg",
    "../images/city-image-4.jpg",
    "../images/city-image-5.jpg",
    "../images/city-image-6.jpg",
    "../images/city-image-7.jpg",
    "../images/city-image-8.jpg",
    "../images/city-image-9.jpg",
    "../images/city-image-10.jpg",
    "../images/city-image-11.jpg",
    "../images/city-image-12.jpg",
    "../images/city-image-13.jpg",
    "../images/city-image-14.jpg",
    "../images/city-image-15.jpg",
    "../images/city-image-16.jpg",
  ];

  let randomImageNumber = Math.floor(Math.random() * 16);
  return mixCityImages[randomImageNumber];
};

// City option Selector
const updateCityOption = function (event) {
  let multiCityTimeZoneOption = event.target.value;
  if (multiCityTimeZoneOption === "current") {
    multiCityTimeZoneOption = moment.tz.guess();
  }
  let cityName = multiCityTimeZoneOption.replace("_", " ").split("/")[1];
  let cityTimeDate = moment().tz(multiCityTimeZoneOption);
  let citiesElement = document.querySelector("#city-container");
  citiesElement.innerHTML = `
  <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTimeDate.format("Do MMMM YYYY")}</div>
            </div>
            <div class="time">${cityTimeDate.format(
              "HH:mm:ss"
            )}<small>${cityTimeDate.format("A")}</small></div>
          </div>
          <img src="${getCityImage()}" alt="Mixed City Images" class="city-image">
  
  
  
  `;
};

updateCityTime();
setInterval(updateCityTime, 1000);

let cityOptionSelect = document.querySelector("#city-option");
cityOptionSelect.addEventListener("change", updateCityOption);

// Theme Button
let themeModeBtn = document.querySelector("#theme-button");
let themeModeElement = document.querySelector(".clock-container");

function changeTheme() {
  if (themeModeElement.classList.contains("dark")) {
    themeModeElement.classList.remove("dark");
    themeModeBtn.innerHTML = `<span class="material-symbols-outlined">
dark_mode
</span>`;
  } else {
    themeModeElement.classList.add("dark");
    themeModeBtn.innerHTML = `<span class="material-symbols-outlined">
    lightbulb
        </span>`;
  }
}
themeModeBtn.addEventListener("click", changeTheme);

// Changing random color function for the bg using random Rgba() number 255

let bodyElement = document.querySelector("#color");
let rgbaNum = 255;
const randomColor = function () {
  return Math.floor(Math.random() * rgbaNum);
};

bodyElement.addEventListener("click", () => {
  bodyElement.style.backgroundColor =
    "rgba(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
});

// Switch bg color

let randoColor = [
  "#3D1766",
  "#FEC868",
  "#0081C9",
  "#FF7B54",
  "#2DCDDF",
  "#9D3C72",
  "#FFE162",
  "#ADA2FF",
  "#439A97",
  "#F8F988",
  "#FF7000",
  "#BCEAD5",
  "#2146C7",
  "#BCCEF8",
  "#A66CFF",
  "#FF5B00",
];
let i = 0;
const switchRandoColors = function () {
  i = i < randoColor.length ? ++i : 0;
  document.querySelector("body").style.backgroundColor = randoColor[i];
};

let switchBtn = document.querySelector("#switch");
switchBtn.addEventListener("click", switchRandoColors);
