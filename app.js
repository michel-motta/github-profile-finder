// Init github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText != '') {
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                    ui.clearProfile();
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                } 
            });
    } else {
        // Clear profile
        ui.clearProfile();
    }

    e.preventDefault;
})