function findAgentIcon(agentData, agentName) {
    let agent = ""
    for (let i = 0; i < agentData.data.length; i++) {
        if (agentData.data[i].displayName.toUpperCase() === agentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
            agent = agentData.data[i]
            break;
        }
    }
    try {
        document.querySelector(`#${agent.displayName}Icon1`).src = agent.displayIcon;
    } catch (error) {
        console.log("Please try again later", error);
    }
}

export function AgentIconFetch(agentName) {
    fetch(
        "https://valorant-api.com/v1/agents"
     )
     .then(function (response) {
         return response.json();
     })
     .then(function (data) {
         const agentData = data;
         findAgentIcon(agentData, agentName)
     })
}