// funksjon for å fetche plain tekst fra ett API
async function fetchPlainText() {
    try {
        // lager en GET request til ett API endpoint så du får igjen plain tekst
        const response = await fetch('https://nodered.fredrikstad.kommune.no:1880/test');

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // få tekst dataen fra en response
        const sensor = await response.text();
        const test = JSON.parse(sensor); //parser objektet eller sensor til json
        const tid = test[0].time;
        const temp = test[0].temperatur; //dele opp tid og temp 
        const date = new Date(tid); //lager datoen finere til en format dato
   
// nb-NO er norsk format for dato
const formattedDate = date.toLocaleString("nb-NO", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "UTC"
});

console.log(formattedDate);
      console.log(temp) // log

      document.getElementById('tid').innerText = formattedDate;
      document.getElementById('badetemp').innerText = temp; //finner eller snakker med html elementet og sender det over dit for å visualisere det


    } catch (error) {
        // logger error
        console.error('Error fetching text data:', error);
    }
}

// kaller funksjonen og logger dataen 
fetchPlainText();
