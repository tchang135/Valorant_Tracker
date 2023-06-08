function AgentIcons(agentData, agentName) {
    const agent = ""
    for (let i = 0; i < agentData.data.length; i++) {
        if (agentData.data.displayName.toUpperCase() === agentName.toUpperCase() && agentData.data["isPlayableCharacter"]) {
            agent = agentData.data
            break;
        }
    }
    return agent 
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
         AgentIcons(agentData, agentName)
     })
}