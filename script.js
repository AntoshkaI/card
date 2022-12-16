import Card from "./components/Card/index.js";

if(!customElements.get("dream-pc")){
    customElements.define("dream-pc",Card);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=3")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.data.forEach(card => {
      let tag = document.createElement("dream-сc");
      console.log(card);
      tag.setAttribute("user",card.owner);
      tag.setAttribute("tel",card.number);
      tag.setAttribute("type",card.type);
      document.body.append(tag);
    })
  })