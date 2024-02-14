// Get references to the 'yes' and 'no' buttons using their respective IDs
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')

// Event listener for the 'yes' button click
yesBtn.addEventListener('click', () => {
    // Display a simple alert when the 'yes' button is clicked
    alert('Thanks, I will be your Valentine')
})

// Event listener for the 'no' button hover
noBtn.addEventListener('mouseover', () => {
    // Generate random top and left positions within the browser window
    let top = Math.floor(Math.random() * 90)
    let left = Math.floor(Math.random() * 90)

    // Apply absolute positioning to the 'no' button
    noBtn.style.position = `absolute`
    
    // Move the 'no' button to the randomly generated positions
    noBtn.style.top = `${top}%`
    noBtn.style.left = `${left}%`
})