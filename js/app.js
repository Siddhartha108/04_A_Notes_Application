console.log('Welcome To My First Page');
showNotes();

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click',(e)=> {
      debugger;
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj);
    showNotes();
});

//   **function to show Element

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach((element, index)=> {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${ index + 1}</h5>
          <p class="card-text">${ element }</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div> 
      `;
    });
    let noteElm = document.getElementById('notes');
    if(notesObj.length == 0){
        noteElm.innerHTML = ` Notnig hear & use to Add a Note section. `;
    } 
    else{
        noteElm.innerHTML = html;
    }

}

// **function to delete note**

function deleteNote(index){
    console.log('I am deleteing', index);

    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}