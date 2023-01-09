const updateCityTime = function () {
  // Hong Kong Local Time Zone (Asia)
  let hongKong = document.querySelector("#hong-kong");
  let hongKongDate = hongKong.querySelector(".date");
  let hongKongTime = hongKong.querySelector(".time");

  let HongKongTimeElement = moment().tz("Asia/Hong_Kong");

  hongKongDate.innerHTML = HongKongTimeElement.format("Do MMMM YYYY");
  hongKongTime.innerHTML = HongKongTimeElement.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  // Louisville Local Time Zone (America)

  let louisville = document.querySelector("#louisville");
  let louisvilleDate = louisville.querySelector(".date");
  let louisvilleTime = louisville.querySelector(".time");

  let louisvilleTimeElement = moment().tz("America/Kentucky/Louisville");

  louisvilleDate.innerHTML = louisvilleTimeElement.format("Do MMMM YYYY");
  louisvilleTime.innerHTML = louisvilleTimeElement.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  // Rome Local Time Zone (Europe)

  let rome = document.querySelector("#rome");
  let romeDate = rome.querySelector(".date");
  let romeTime = rome.querySelector(".time");

  let romeTimeElement = moment().tz("Europe/Rome");

  romeDate.innerHTML = romeTimeElement.format("Do MMMM YYYY");
  romeTime.innerHTML = romeTimeElement.format("H:mm:ss [<small>]A[</small>]");

  // Johannesburg Local Time Zone (Africa)

  let johannesburg = document.querySelector("#johannesburg");
  let johannesburgDate = johannesburg.querySelector(".date");
  let johannesburgTime = johannesburg.querySelector(".time");

  let johannesburgTimeElement = moment().tz("Africa/Johannesburg");

  johannesburgDate.innerHTML = johannesburgTimeElement.format("Do MMMM YYYY");
  johannesburgTime.innerHTML = johannesburgTimeElement.format(
    "H:mm:ss [<small>]A[</small>]"
  );
};
updateCityTime();
setInterval(updateCityTime, 1000);
