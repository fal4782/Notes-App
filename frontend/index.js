const addedNote = document.getElementById("note")
const res_msg = document.querySelector("#response-msg")
const updateIp = document.querySelector("#update-input")

function addNote() {
    console.log("addded", addedNote)
    const note = addedNote.value
    // console.log(note);
    res_msg.textContent = "Saving..."
    // console.log(note);
    fetch('http://localhost:3300/addNotes', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            description: note
        })
    }).then((res) => {
        res.json().then((data) => {
            if (data.e) {
                res_msg.textContent = "Error saving the note T_T"
            }
            res_msg.textContent = "Added note: " + data.description + " ✅"
        })
    })
}

function readNotes() {
    res_msg.textContent = "Loading..."
    fetch('http://localhost:3300/readNotes').then((res) => {
        res.json().then((data) => {
            if (data.e) {
                res_msg.textContent = "Error viewing all notes T_T"
            }
            res_content = ''
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].description);
                res_content += `<div class="note-wrapper"><p>${i+1}. ${data[i].description} </p><button type="button" id="${data[i]._id}-${data[i].description}" onclick="updateNote(event)">✏️</button><button type="button" id=${data[i]._id} onclick="deleteNote(event)">🗑️</button></div>`
            }
            res_msg.innerHTML = res_content
        })
    })
}

function updateNote(event) {
    res_msg.textContent = "Edit your note"
    // let update_content = ''
    const inp = event.target.id
    let [id, desc] = inp.split('-')
    console.log(typeof id)
    let update_content = `<input type = "text" class = "form-control" id = "oldNote" placeholder="${desc}">`

    update_content += `<button type="button" class="btn btn-success" id=${id} onclick="saveId(event)">Save</button>`
    // 
    // document.querySelector("#oldNote").value=desc
    updateIp.innerHTML = update_content

    console.log(id);


}

function saveId(event) {
    const id=event.target.id
    console.log('sgy', id)
    const val = document.getElementById("oldNote").value
    console.log(val);
    fetch(`http://localhost:3300/updateNote/${id}`, {
        method: 'PATCH',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            description: val
        })
    }).then(()=>{
        updateIp.style.display="none"
        this.readNotes()
    })
}

function deleteNote(event) {
    const id = event.target.id
    console.log(id)
    fetch(`http://localhost:3300/deleteNote/${id}`, {
        method: 'DELETE'
    }).then(() => {
        this.readNotes()
    })
}