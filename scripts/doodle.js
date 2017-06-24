var doodles = ["https://www.google.com/doodles/halloween-2016",
               "https://www.google.com/doodles/valentines-day-2014-international",
               "https://www.google.com/doodles/world-cup-2014-2",
               "https://www.google.com/doodles/celebrating-ludwig-van-beethovens-245th-year",
               "https://www.google.com/doodles/icc-2017-womens-cricket-world-cup-begins",
               "https://www.google.com/doodles/fourth-of-july-2014",
               "https://www.google.com/doodles/rubiks-cube",
               "https://www.google.com/doodles/sugarloaf-cable-cars-100th-anniversary",
               "https://www.google.com/doodles/halloween-global-candy-cup-2015",
               "https://www.google.com/doodles/world-cup-2014-final",
               "https://www.google.com/doodles/oskar-fischingers-117th-birthday",
               "https://www.google.com/doodles/perseid-meteor-shower-2014",
               "https://www.google.com/doodles/halloween-2013",
               "https://www.google.com/doodles/bartolomeo-cristoforis-360th-birthday",
               "https://www.google.com/doodles/world-cup-2014-1"];

function goToLuckyUrl() {
  var index = parseInt(Math.random() * doodles.length);
  console.log(index);
  window.open(doodles[index]);
}