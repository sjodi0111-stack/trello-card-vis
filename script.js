dscc.subscribeToData(function(data) {
  const container = document.getElementById('cards-container');
  container.innerHTML = "<p>Data received from Looker Studio!</p>";
});
