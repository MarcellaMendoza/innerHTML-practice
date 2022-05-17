

const container = document.getElementById("container")

container.innerHTML = "<button onclick='launchIntoSpace()'>LAAUUNCH!</button>"

function launchIntoSpace() {
  container.innerHTML += "<p>The rocket has launched!</p>"
}


