document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const message = document.getElementById('message');

    let startTime, endTime, timer;

    startButton.addEventListener('click', () => {
        message.textContent = 'Wait for green...';
        startButton.style.display = 'none';
        
        const randomDelay = Math.floor(Math.random() * 5000) + 2000;

        timer = setTimeout(() => {
            message.textContent = 'Click now!';
            startTime = new Date().getTime();
            document.body.style.backgroundColor = 'green';
        }, randomDelay);
    });

    document.addEventListener('click', () => {
        if (startTime) {
            endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            message.textContent = `${reactionTime} ms.`;
            startButton.style.display = 'inline-block';
            document.body.style.backgroundColor = '#f0f0f0';
            startTime = null;
            clearTimeout(timer);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            if (startTime) {
                endTime = new Date().getTime();
                const reactionTime = endTime - startTime;
                message.textContent = `Your reaction time is ${reactionTime} ms. Click the button to try again.`;
                startButton.style.display = 'block';
                document.body.style.backgroundColor = '#f0f0f0';
                startTime = null;
                clearTimeout(timer);
            }
        }
    });
});
