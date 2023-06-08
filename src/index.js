document.addEventListener("DOMContentLoaded", () => {
    fetch(
       "https://valorant-api.com/v1/agents"
    )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const agentData = data;
        
    })
})