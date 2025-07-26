const testimonial = document.querySelector(".testimonial");
let isDown = false;
let startX;
let scrollLeft;

testimonial.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - testimonial.offsetLeft;
  scrollLeft = testimonial.scrollLeft;
});
testimonial.addEventListener("mouseleave", () => {
  isDown = false;
});
testimonial.addEventListener("mouseup", () => {
  isDown = false;
});
testimonial.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - testimonial.offsetLeft;
  const walk = (x - startX) * 2;
  testimonial.scrollLeft = scrollLeft - walk;
});

let testemunhass = [
  {
    text: "“The security of knowing our information is safe.”",
    description:
      "Customer Bryan Chandler reveals how his team uses Dropbox toorganize and share files securely.",
    image: "BrianThumb.png",
  },
  {
    text: "“The security of knowing our information is safe.”",
    description:
      "Customer Bryan Chandler reveals how his team uses Dropbox toorganize and share files securely.",
    image: "JustinThumb.png",
  },
  {
    text: "“The security of knowing our information is safe.”",
    description:
      "Customer Bryan Chandler reveals how his team uses Dropbox toorganize and share files securely.",
    image: "SecurityThumb.png",
  },
];

for (let i = 0; i < testemunhass.length; i++) {
  let box = document.createElement("div");
  box.classList.add("box");

  box.innerHTML = `
    
    <div class="img-testimonial">
    <img src="img/${testemunhass[i].image}" alt="" />
    </div>
    
    <div class="info-testimonial">
    <span>testimonial</span>
    <div class="text-testimonial">
    <h3>${testemunhass[i].text}</h3>
    </div>
    
    <div class="description-testimonial">
    <p>
    Customer Bryan Chandler reveals how his team uses Dropbox to
    organize and share files securely.
    </p>
    </div>
    </div>
    
    `;

  testimonial.appendChild(box);
}

let boxBadges = [
  "marykay-wordmark-150x150.svg",
  "mclaren-racing-wordmark-150x150.svg",
  "sundance-wordmark-150x150.svg",
  "wag-wordmark-150x150.svg",
  "figma-wordmark-150x150.svg",
  "greenhouse-wordmark-150x150.svg",
  "hydro-flask-wordmark-150x150.svg",
  "jamf-wordmark-150x150.svg",
];

let badgesContainer = document.querySelector(".badges");

for (let i = 0; i < boxBadges.length; i++) {
  let box = document.createElement("div");
  box.classList.add("box-badge");

  box.innerHTML = `
    <img
        src="./img/badges/${boxBadges[i]}"
        alt=""
    />
    `;

  badgesContainer.appendChild(box);
}

let industrias = [
  {
    image: "construction-hero@2x.webp",
    nameIndustria: "Contruction",
    descriptionIndustria:
      "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
  },
  {
    image: "The-Luupe-Genya-Oneall.webp",
    nameIndustria: "Media",
    descriptionIndustria:
      "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
  },
  {
    image: "GettyImages-1139238082.webp",
    nameIndustria: "Technology",
    descriptionIndustria:
      "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
  },
  {
    image: "etgcNMmB.webp",
    nameIndustria: "Professional services",
    descriptionIndustria:
      "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
  },
  {
    image: "GettyImages-900253108.webp",
    nameIndustria: "Manufacturing",
    descriptionIndustria:
      "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
  },
  {
    image: "education-hero@2x.webp",
    nameIndustria: "Education",
    descriptionIndustria:
      "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
  },
];

let infoBox = document.querySelector(".info-box");

for (let i = 0; i < industrias.length; i++) {
  let box = document.createElement("div");

  box.classList.add("boxes");

  box.innerHTML = `
    
        <div class="img-industries">
            <img src="./img/industrias/${industrias[i].image}" alt="" />
        </div>

        <div class="text-industries">
            <div class="title-small-industries">
                <h4>${industrias[i].nameIndustria}</h4>
            </div>

            <div class="description-industries">
                <p>
                    ${industrias[i].descriptionIndustria}
                </p>
            </div>

            <div class="link-view-more">
                <a href="">Learn more</a>
            </div>
        </div>

    `;

  infoBox.appendChild(box);
}

let infoBoxDiscover = document.querySelector(".info-box-discover");

let discoverBoxes = [
  {
    title:
      "Study: Here’s how many hours we lose to distraction—and how to get our focus back",
    image: "Asset-Distraction-Article.webp",
    description:
      "For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’sa significant cost to lost focus around the world.",
  },
  {
    title:
      "Study: Here’s how many hours we lose to distraction—and how to get our focus back",
    image: "Asset-McLaren-Article.webp",
    description:
      "For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’sa significant cost to lost focus around the world.",
  },
  {
    title:
      "Study: Here’s how many hours we lose to distraction—and how to get our focus back",
    image: "Asset-Photo-Sharing-Article.webp",
    description:
      "For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’sa significant cost to lost focus around the world.",
  },
];

for (let i = 0; i < discoverBoxes.length; i++) {
  let div = document.createElement("div");
  div.classList.add("box-discover");

  div.innerHTML = `
  
        <div class="img-discover">
          <img
            src="./img/discover/${discoverBoxes[i].image}"
            alt=""
          />
        </div>

        <div class="article-text">
          <span>Article</span>
        </div>

        <div class="title-small-discover">
          <h3>
              ${discoverBoxes[i].title}
          </h3>
        </div>

        <div class="description-discover">
          <p>
          ${discoverBoxes[i].description}
          </p>
        </div>

        <div class="link-read-article">
          <a href="">Read article</a>
        </div>

  `;
  infoBoxDiscover.appendChild(div);
}
