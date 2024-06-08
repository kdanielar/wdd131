document.getElementById('addParticipant').addEventListener('click', function () {
    const participants = document.getElementById('participants');
    const participantCount = participants.children.length + 1;

    const newParticipant = document.createElement('div');
    newParticipant.classList.add('participant');
    newParticipant.innerHTML = `
        <label for="name${participantCount}">Name:</label>
        <input type="text" id="name${participantCount}" name="name${participantCount}" required>
        <label for="email${participantCount}">Email:</label>
        <input type="email" id="email${participantCount}" name="email${participantCount}" required>
        <label>Gender:</label>
        <input type="radio" id="male${participantCount}" name="gender${participantCount}" value="male" required>
        <label for="male${participantCount}">Male</label>
        <input type="radio" id="female${participantCount}" name="gender${participantCount}" value="female" required>
        <label for="female${participantCount}">Female</label>
    `;

    participants.appendChild(newParticipant);
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const participantElements = form.querySelectorAll('.participant');
    const participantData = Array.from(participantElements).map((participant, index) => {
        const name = participant.querySelector(`input[name="name${index + 1}"]`).value;
        const email = participant.querySelector(`input[name="email${index + 1}"]`).value;
        const gender = participant.querySelector(`input[name="gender${index + 1}"]:checked`).value;
        return { name, email, gender };
    });

    alert('Registration Successful!\n' + JSON.stringify(participantData, null, 2));
});
