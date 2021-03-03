// Määritellään palvelimelle portti.
const PORT = process.env.PORT || 8081;

// Otetaan moduuleja käyttöön.
var express = require("express");
var app = express();

// otetaan EJS käyttöön
app.set("view engine", "ejs");

// Tällä pakotetaan sivupohja tuottamaan sisennettyä, kaunista HTML:ää. 
app.locals.pretty = true;

// Sisätlö haetaan public-hakemistosta.
//app.use(express.static("./views"));

// Luodaan sivu. Res.render()-funktio lähettää sivut template-moottorille ennen niiden päätymistä loppukäyttäjälle selaimeen.
app.get("/", function(req, res) {
    res.render("pages/index", {
      new_heading: "Workshop 5",
      new_paragraph: "This is my WS5 practise.",
    });
  })

  // Luodaan web-palvelin.
app.listen(PORT, () => {
  console.log("Example app listening on port 8081!");
});