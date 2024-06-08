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
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
        `;
    }
});

