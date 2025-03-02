const dictionary = (word) => {


  const options = {
    method: 'GET',

    headers: {
      'x-rapidapi-key': '22341e0cbemsh9d701fb2a1cbf0ep1c1fbajsn0fcc7dce6638',
      'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(Response => Response.json())
    .then((Response) => {
      wordheading.innerHTML = "Here Is The Meaning Of:-" + Response.word;
      definition.innerHTML = Response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.");

    })
    .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value)
})