function popup(){
    const popupContainer = document.createElement('div');
    popupContainer.innerHTML =  `
    <div id = 'popupContainer'>
        <h1>New Note</h1>
        <textarea id='noteText placeholder='Type your note here...'></textarea>
        <div id = 'btn-container'>
            <button id='submitBtn' onclick= "createNote()">Save Note</button>
            <button id='cancelBtn' onclick="closePopUp()">Cancel</button>
        </div>  
    </div>`;
    document.body.appendChild(popupContainer);

}