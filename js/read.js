fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the JSON data
    const div = document.getElementById('tableBody');
    data.forEach(element => {
      var trow = document.createElement("tr");
      var td = document.createElement("td");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var link = document.createElement("a");
      
      link.href = element.link;
      link.textContent = element.name;
      link.className = 'text-white block text-center';

      td.appendChild(link);
      trow.appendChild(td);
      trow.appendChild(td1);
      trow.appendChild(td2);
      div.appendChild(trow);
    });
  })
  .catch(error => console.error(error));