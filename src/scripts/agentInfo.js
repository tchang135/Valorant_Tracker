import { abilityVideos } from "./abilityVideoLinks";
import { agentAbilityFetch } from "./ability";

function findAgentData(agentData, agentName ) {
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
        document.querySelector("#agentPortrait").src = agent.fullPortrait;
        document.querySelector("#agentRoleName").innerText = agent.role.displayName;
        document.querySelector("#agentRoleIcon").src = agent.role.displayIcon;

        document.querySelector("#agentAbility1").src = agent.abilities[0].displayIcon;
        document.querySelector("#agentAbility2").src = agent.abilities[1].displayIcon;
        document.querySelector("#agentAbility3").src = agent.abilities[2].displayIcon;
        document.querySelector("#agentAbility4").src = agent.abilities[3].displayIcon;
        
        document.querySelector("#agentAbilityName").innerText = agent.abilities[0].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[0].description;
        
        const source = document.querySelector("#abilityVideoSource")
        for (let key in abilityVideos) {
            if (key.includes(agent.displayName)) {
                source.src = abilityVideos[key];
                break;
            }
        }
        const video = document.querySelector("#abilityVideoClip")
        video.load();

    } catch (error) {
        console.log("Agent could not be found", error);
    }
}

export function agentDataFetch(agentName) {
    fetch("https://valorant-api.com/v1/agents")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const agentData = data;
        findAgentData(agentData, agentName)
        agentAbilityFetch(agentData, agentName)
    })
}