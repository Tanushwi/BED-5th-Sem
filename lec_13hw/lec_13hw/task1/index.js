function sendPost() {
  const myData = {
    name: "Tanushwi",
    age: 21
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myData)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Data sent successfully:", data);
    alert("POST request successful!");
  })
  .catch(error => {
    console.log("Error:", error);
  });
}
