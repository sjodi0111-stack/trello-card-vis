google.visualization.events.addListener(
  dscc,
  'onData',
  updateViz
);

function updateViz(data) {
  const container = document.getElementById('cards-container');
  container.innerHTML = "";

  const rows = data.tables.DEFAULT;

  rows.forEach(row => {
    const title = row["Title"] || "Untitled";
    const desc = row["Progress"] || "";
    const status = row["Status"] || "";

    const card = `
      <div class="card">
        <div class="card-title">${title}</div>
        <div class="card-desc">${desc}</div>
        <div class="card-status">${status}</div>
      </div>
    `;

    container.innerHTML += card;
  });
}
