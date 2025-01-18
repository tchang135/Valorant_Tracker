import { agentDataFetch } from "./agentInfo";

// function findAgentIcon(agentData, agentName) {
//     let agent = ""
//     for (let i = 0; i < agentData.data.length; i++) {
//         if (agentData.data[i].displayName.toUpperCase() === agentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
//             agent = agentData.data[i]
//             break;
            
//         }
//         let sanitizedDisplayName = agentData.data[i].displayName.replace(/[^a-zA-Z0-9]/g, '');
//         if (sanitizedDisplayName.toUpperCase() === sanitizedAgentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
//             agent = agentData.data[i];
//             break;
//         }
//     }
//     try {
//         document.querySelector(`#${agent.displayName}Icon1`).src = agent.displayIcon;
    
//     } catch (error) {
//         console.log("Agent could not be found", error);
//     }
    
// }

import { agentDataFetch } from "./agentInfo";

function findAgentIcon(agentData, agentName) {
    let agent = "";
    let sanitizedAgentName = agentName.replace(/[^a-zA-Z0-9]/g, ''); // Fix here

    for (let i = 0; i < agentData.data.length; i++) {
        let sanitizedDisplayName = agentData.data[i].displayName.replace(/[^a-zA-Z0-9]/g, '');
        if (
            (agentData.data[i].displayName.toUpperCase() === agentName.toUpperCase() ||
            sanitizedDisplayName.toUpperCase() === sanitizedAgentName.toUpperCase()) &&
            agentData.data[i]["isPlayableCharacter"]
        ) {
            agent = agentData.data[i];
            break;
        }
    }

    if (!agent) {
        console.error("Agent not found:", agentName);
        return;
    }

    try {
        document.querySelector(`#${agent.displayName}Icon1`).src = agent.displayIcon;
    } catch (error) {
        console.error("Error updating agent icon:", error);
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
            previousSelectedIcon.style.border = "";
            previousSelectedIcon.style.boxShadow = "";
        }
        agentDataFetch(agentName);
        selectedAgent = agentName;
        agentIcon.style.transform = "scale(1.2)"; 
        agentIcon.style.filter = "brightness(1.7)";  
        agentIcon.style.border = "3px solid rgb(221, 82, 82)";
        agentIcon.style.boxShadow = "0 0 10px 3px rgb(221, 82, 82)";
    });
}

// function findAgentIcon(agentData, agentName) {
//     let agent = ""
//     // Sanitize agentName to avoid issues with special characters like '/'
//     const sanitizedAgentName = agentName.replace(/[^a-zA-Z0-9]/g, '-');  // Replace non-alphanumeric characters

//     for (let i = 0; i < agentData.data.length; i++) {
//         const sanitizedDisplayName = agentData.data[i].displayName.replace(/[^a-zA-Z0-9]/g, '-'); // Same sanitization for displayName

//         if (sanitizedDisplayName.toUpperCase() === sanitizedAgentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
//             agent = agentData.data[i];
//             break;
//         }
//     }

//     try {
//         if (agent) {
//             // Use sanitized name for the query selector
//             document.querySelector(`#${sanitizedAgentName}Icon1`).src = agent.displayIcon;
//         }
//     } catch (error) {
//         console.log("Agent could not be found", error);
//     }
// }

// export function agentIconFetch(agentName) {
//     fetch("https://valorant-api.com/v1/agents")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             const agentData = data;
//             findAgentIcon(agentData, agentName)
//         })
//         .catch(function (error) {
//             console.log("Error fetching data:", error);
//         });
// }

// let selectedAgent = null;

// export function agentIconListener(agentName) {
//     const sanitizedAgentName = agentName.replace(/[^a-zA-Z0-9]/g, '-'); // Sanitize agentName

//     const agentIcon = document.querySelector(`#${sanitizedAgentName}Icon1`);
//     agentIcon?.addEventListener("click", function (e) {
//         e.preventDefault();

//         // If the clicked agent is already selected, return early
//         if (selectedAgent === agentName) {
//             return;
//         }

//         // Reset the previous selected agent's icon styles
//         if (selectedAgent) {
//             const previousSelectedIcon = document.querySelector(`#${selectedAgent.replace(/[^a-zA-Z0-9]/g, '-')}Icon1`);
//             if (previousSelectedIcon) {
//                 previousSelectedIcon.style.transform = "";
//                 previousSelectedIcon.style.filter = "";
//                 previousSelectedIcon.style.border = "";
//                 previousSelectedIcon.style.boxShadow = "";
//             }
//         }

//         // Fetch data and apply styles for the new selected agent
//         agentDataFetch(agentName);
//         selectedAgent = agentName;

//         // Apply styles to the new selected agent's icon
//         agentIcon.style.transform = "scale(1.2)";
//         agentIcon.style.filter = "brightness(1.7)";
//         agentIcon.style.border = "3px solid rgb(221, 82, 82)";
//         agentIcon.style.boxShadow = "0 0 10px 3px rgb(221, 82, 82)";
//     });
// }

