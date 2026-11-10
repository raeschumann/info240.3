// 1. Fetch the JSON file
fetch('data.json')
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
      // 2. Find the table body in the HTML
      const tableBody = document.getElementById('tableBody');
      
      // 3. Loop through each item in the JSON array
      data.forEach(person => {
          // Create a new row
          const row = document.createElement('tr');
          
          // Add the 4 pieces of data into the row
          row.innerHTML = `
              <td>${person.Name}</td>
              <td>${person.location}</td>
              <td>${person["birth year"]}</td>
              <td>${person.type}</td>
          `;
          
          // 4. Attach the row to the table
          tableBody.appendChild(row);
      });
  })
  .catch(error => console.error('Error fetching JSON:', error));
