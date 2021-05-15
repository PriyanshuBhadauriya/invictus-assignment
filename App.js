import React  from "react";


function App() {
 const submitTxtFile = ()=> {
  const element = document.currentElement('a');
  const file = new Blob([document.getElementById('input').value],{
  type:"text/plain; charset=utf-8"
 });
  element.href = URL.createObjectURL(file);
  element.download = "NewDocument.txt";
  document.body.appendChild(element);
  element.click();
}

  return <>
  <form>
  <div>
  <textarea><input type="text" id="input"/></textarea>
  <br/>
  
  <input type="submit" onClick={submitTxtFile} value="submit" />
  </div>
  </form>
  </>;
}


export default App;
