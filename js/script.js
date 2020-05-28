const tableRef = document
  .getElementById("statesTable")
  .getElementsByTagName("tbody")[0];

document.onload = loadData();

function loadData(states) {
  //   for (state in states) {
  //     tableRef.insertRow().innerHTML = `
  //     <td class="text-center" id="stateName">${states[state]}</td>
  //     <td class="text-right font-weight-bold">500</td>
  //     <td class="text-center">
  //         <a class="btn btn-primary btn-sm text-white">Breakdown By City</a>
  //     </td>
  //     `;
  //   }
}

loadData(states.sort());
console.log(states[0].name);
