let table=document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
	let trow=table.insertRow(0);

	let cell1=trow.insertCell(0);
	let cell2=trow.insertCell(1);

	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";

}
  
  

