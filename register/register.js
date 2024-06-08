document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    document.getElementById('addParticipant').addEventListener('click', () => {
        addParticipant();
    });

    function addParticipant() {
        participantCount++;

        const participants = document.getElementById('participants');
        const newParticipant = participantTemplate(participantCount);

        participants.insertAdjacentHTML('beforeend', newParticipant);
    }

    function participantTemplate(count) {
        return `
            <div class="participant">
                <label for="name${count}">Name:</label>
                <input type="text" id="name${count}" name="name${count}" required>
                <label for="email${count}">Email:</label>
                <input type="email" id="email${count}" name="email${count}" required>
                <label>Gender:</label>
                <input type="radio" id="male${count}" name="gender${count}" value="male" required>
                <label for="male${count}">Male</label>
                <input type="radio" id="female${count}" name="gender${count}" value="female" required>
                <label for="female${count}">Female</label>
            </div>
        `;
    }
});

