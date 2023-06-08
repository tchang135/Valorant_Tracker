function findAgentData(agentName, agentData ) {
    let agent=""
    for (let i = 0; i < agentData.data.length; i++) {
        if (agentData.data[i].displayName.toUpperCase() === agentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
            agent = agentData.data[i]
            break;
        }
    }
    try {
        document.querySelector("#agentName").innerText = agent.displayName;
        document.querySelector("#agentDescription").innerText = agent.description;
        document.querySelector("#agentPortrait").innerText = agent.fullPortrait;
        document.querySelector("#agentRoleName").innerText = agent.role.displayName;
        document.querySelector("#agentRoleIcon").innerText = agent.role.displayIcon;

        document.querySelector("#agentAbility1").innerText = agent.abilities[0].displayIcon;
        document.querySelector("#agentAbility2").innerText = agent.abilities[1].displayIcon;
        document.querySelector("#agentAbility3").innerText = agent.abilities[2].displayIcon;
        document.querySelector("#agentUlt").innerText = agent.abilities[3].displayIcon;
        
        document.querySelector("#agentAbilityName").innerText = agent.abilities[0].displayIcon;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[0].displayIcon;
        

    } catch (error) {
        console.log("Agent could not be found", error);
    }
}


export function AgentDataFetch(agentName) {
    fetch("https://valorant-api.com/v1/agents")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const agentData = data;
        findAgentData(agentData, agentName)
    })
}