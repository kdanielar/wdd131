import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    document.getElementById('addParticipant').addEventListener('click', () => {
        participantCount++;
        const participants = document.getElementById('participants');
        const newParticipant = participantTemplate(participantCount);
        participants.insertAdjacentHTML('beforeend', newParticipant);
    });

    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const adultName = document.querySelector('input[name="name1"]').value;
        const totalParticipants = participantCount;
        const totalFee = totalFees();
        const successMessage = successTemplate({ name: adultName, count: totalParticipants, fee: totalFee });
        document.getElementById('registrationForm').style.display = 'none';
        document.body.insertAdjacentHTML('beforeend', successMessage);
    });

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
    }
});
