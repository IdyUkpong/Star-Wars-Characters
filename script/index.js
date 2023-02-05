const output = document.getElementById("app");
var content = document.getElementById("content");

function main() {
  const URL = "https://swapi.dev/api/people";
  const images = [
    "Images/dakota-randall-luke-skywalker-smaller.jpeg",
    "Images/cs.jpeg",
    "Images/R2-d2.jpeg",
    "Images/darth.jpeg",
    "Images/leia.jpeg",
    "Images/Owen-OP.webp",
    "Images/BeruWhitesunLars.webp",
    "Images/R5-D4.webp",
    "Images/Genetle-Giant-ANH-Biggs-Bust-009.jpeg",
    "Images/Obiwankenobi_dsws.webp",
  ];
  try {
    fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((data) => {
        console.log(data);
        const apiValue = data.results;
        apiValue.forEach((user, index) => {
          console.log(typeof user.name);

          output.innerHTML += `
              <li onclick="opens(this)" class="design"
              title="${user.name}" 
               id="${user.gender}" value="${user.height}">
               <img src="${images[index]}" style="width: 100%; height:100%"/>
                         <div>
                           
                          </div>
                        </li>
            `;
        });
      })
      .catch((error) => {
        throw new Error(error + "something went wrong");
      });
  } catch (error) {
    console.log(error);
  }
}
main();

let opens = (user) => {
  content.style.display = "flex";
  var names = user.title;
  var gender = user.id;
  var height = user.value;

  var imageArrays = [
    `Name: ${names}`,
    `Gender: ${gender}`,
    `Height: ${height}`,
  ];
  var container = document.createElement("div");
  var close = document.createElement("button");
  var textButton = document.createTextNode("Close");
  close.id = "clickOut";
  close.appendChild(textButton);
  container.appendChild(close);

  imageArrays.map((item, index) => {
    var pTag = document.createElement("p");
    var nodeP = document.createTextNode(imageArrays[index]);

    pTag.appendChild(nodeP);
    container.appendChild(pTag);
  });
  container.className = "divContent";

  content.appendChild(container);

  var closeOut = document.getElementById("clickOut");
  closeOut.addEventListener("click", (x) => {
    container.remove();
    content.style.display = "none";
  });
};
