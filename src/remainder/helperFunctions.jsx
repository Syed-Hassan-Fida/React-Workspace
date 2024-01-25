export const priorityClass = (param) => {
    return param.priority === "low" ? 'priority-low' :
        param.priority === "medium" ? 'priority-medium' :
            param.priority === "high" ? 'priority-high' : ''
};