import { agentDataFetch } from "./agentInfo";

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
        console.log("Agent could not be found", error);
    }
}


export function agentIconFetch(agentName) {
    fetch("https://valorant-api.com/v1/agents")
     .then(function (response) {
         return response.json();
     })
     .then(function (data) {
         const agentData = data;
         findAgentIcon(agentData, agentName)
        //  agentAbilityFetch(agentData, agentName)
     })
}

let selectedAgent = null;

export function agentIconListener(agentName) {
    const agentIcon = document.querySelector(`#${agentName}Icon1`);
    agentIcon?.addEventListener("click", function (e) {
        e.preventDefault();
        if (selectedAgent === agentName) {
            return;
        }
        if (selectedAgent) {
            const previousSelectedIcon = document.querySelector(`#${selectedAgent}Icon1`);
            previousSelectedIcon.style.transform = "";
            previousSelectedIcon.style.filter = "";
        }
        agentDataFetch(agentName);
        selectedAgent = agentName;
        agentIcon.style.transform = "scale(1.2)"; 
        agentIcon.style.filter = "brightness(1.7) sepia(3) hue-rotate(80deg) ";  
        console.log(selectedAgent)
    });
}