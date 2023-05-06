let db = [];
let counterID = 1;

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  const formData = new FormData(form);
  const inputNameSurname = formData.get("nameSurname");
  const inputQuote = formData.get("quote");
  const inputSource = formData.get("source");
  const inputWordCount = formData.get("wordCount");

  const jsonObject = {
    id: counterID++,
    nameSurname: inputNameSurname,
    quote: inputQuote,
    source: inputSource,
    wordCount: inputWordCount,
  };

  db.push(jsonObject);
  console.log(JSON.stringify(jsonObject));
  console.log(db);
  form.reset();
});

console.log(db);