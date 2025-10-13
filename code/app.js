const products = [
  {
    name: "Uniqlo Parka",
    description: "The Favorite Jacket",
    price: "$49.90",
    img: "jacket.PNG",
    alt: "Uniqlo Parka",
    category: "tops"
  },
  {
    name: "New Balance 530s",
    description: "The Most Used Shoe",
    price: "$109.99",
    img: "shoe.PNG",
    alt: "New Balance 530s",
    category: "shoes"
  },
  {
    name: "Aeropostale Shirts",
    description: "The go-to home shirt",
    price: "$32.95",
    img: "aero.PNG",
    alt: "Aeropostale Shirt",
    category: "tops"
  },
  {
    name: "Uniqlo AIRISM Shirts",
    description: "Home shirt part 2",
    price: "$19.90",
    img: "uniqlo.PNG",
    alt: "Uniqlo AIRISM Shirt",
    category: "tops"
  },
  {
    name: "Michael Kors Purse",
    description: "Because women don't get good pockets",
    price: "$118.50",
    img: "purse.PNG",
    alt: "Michael Kors Purse",
    category: "bags"
  },
  {
    name: "Cool Chain",
    description: "My mom got this for free somehow",
    price: "$59.00",
    img: "chain.PNG",
    alt: "Cool Chain",
    category: "jewelry"
  },
  {
    name: "Hijab",
    description: "Nothing but black",
    price: "$20.00",
    img: "hijab.jpg",
    alt: "Hijab",
    category: "tops"
  },
  {
    name: "Kate Spade Heart Earrings",
    description: "I lost the other ones",
    price: "$35.00",
    img: "heartearrings.PNG",
    alt: "Kate Spade Heart Earrings",
    category: "jewelry"
  },
  {
    name: "Kate Spade Huggies",
    description: "Only real gold",
    price: "$38.00",
    img: "earrings.PNG",
    alt: "Kate Spade Huggies",
    category: "jewelry"
  },
  {
    name: "Jansport Backpack",
    description: "Pain in the back",
    price: "$44.00",
    img: "bag.png",
    alt: "Jansport Backpack",
    category: "bags"
  },
  {
    name: "Hoodie",
    description: "Comes off after first period",
    price: "$30.00",
    img: "hoodie.PNG",
    alt: "Hoodie",
    category: "tops"
  },
  {
    name: "Name Chain",
    description: "Somehow every brown person has one",
    price: "$65.00",
    img: "name.PNG",
    alt: "Name Chain",
    category: "jewelry"
  },
  {
    name: "Old Navy Jeans",
    description: "An outfit repeater's dream",
    price: "$40.00",
    img: "jeans.PNG",
    alt: "Old Navy Jeans",
    category: "pants"
  },
  {
    name: "Guess Bag",
    description: "The retired purse",
    price: "$50.00",
    img: "retiredbag.PNG",
    alt: "Guess Bag",
    category: "bags"
  },
  {
    name: "GAP Cargo Jeans",
    description: "Woah pockets",
    price: "$44.00",
    img: "gapjeans.PNG",
    alt: "GAP Jeans",
    category: "pants"
  },
  {
    name: "H&M Flannel",
    description: "Closet of a middle aged dad",
    price: "$20.00",
    img: "flannel.PNG",
    alt: "H&M Flannel",
    category: "tops"
  },
  {
    name: "Nike AF1s",
    description: "First good pair of shoes",
    price: "$115.00",
    img: "af1.PNG",
    alt: "Nike AF1s",
    category: "shoes"
  },
  {
    name: "New Balance 550s",
    description: "Makes a cool sound",
    price: "$110.00",
    img: "550.PNG",
    alt: "New Balance 550s",
    category: "shoes"
  },
  {
    name: "H&M Joggers",
    description: "At home pants",
    price: "$17.00",
    img: "joggers.PNG",
    alt: "H&M Joggers",
    category: "pants"
  },
  {
    name: "Amazon Gold Studs Earrings",
    description: "Some random earrings idk",
    price: "$13.00",
    img: "studs.PNG",
    alt: "Amazon Gold Studs Earrings",
    category: "jewelry"
  },
];


const container = document.querySelector(".container");

function add(product) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h2>${product.name}</h2>
      <div class="image">
      <img src="${product.img}" alt="${product.alt}"/>
      </div>
      <p>"${product.description}"</p>
      <h4>price: ${product.price}</h4>
      <button class="button">buy!</button>
    </div>`
  );
}

products.forEach(product => add(product));

const filterButtons = document.querySelectorAll(".filterbutton");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        container.innerHTML = "";
        const filteredProducts = products.filter(product => product.category === category || category === "ALL");
        filteredProducts.forEach(product => add(product));
    });
});

let cart = [];
const buttons = document.querySelectorAll(".button");


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cart.push(products[index]);
        console.log(cart);
    });
});  
