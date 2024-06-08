// Templates.js file

export function participantTemplate(count) {
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

export function successTemplate(info) {
    return `
        <div id="summary">
            <p>Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.fee} in fees.</p>
        </div>
    `;
}
