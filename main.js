const activityElm = document.getElementById("activity");

function getRandomActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(resp => resp.json())
    .then(data => {
      activityElm.innerHTML = "<span class='lighter'>How about you</span><br>" +  data.activity.toLowerCase() + "?"});
    
  changeGradDeg();
}

function changeGradDeg() {
  const currentGradDeg = getComputedStyle(document.documentElement).getPropertyValue("--deg");
  const currentDeg = parseInt(currentGradDeg.slice(0, currentGradDeg.indexOf("deg")));
  
  const newDeg = currentDeg + 30;
  const newGradDeg = newDeg.toString() + "deg"
  
  document.documentElement.style.setProperty("--deg", newGradDeg);
}