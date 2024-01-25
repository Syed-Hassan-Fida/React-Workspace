export const priorityClass = (param) => {
    return param.priority === "low" ? 'priority-low' :
        param.priority === "medium" ? 'priority-medium' :
            param.priority === "high" ? 'priority-high' : ''
};

export const formatCountdown = (countdown) => {
    const countdownSeconds = Math.ceil(countdown / 1000);
    const countdownMinutes = Math.floor(countdownSeconds / 60);
    const countdownRemainingSeconds = countdownSeconds % 60;
    return `${countdownMinutes} minutes ${countdownRemainingSeconds} seconds`;
};


export const taskOverdue = (value) => {
    const currentTime = new Date();
    const taskTime = new Date(`${value.date}T${value.time}`);
    return taskTime < currentTime
}