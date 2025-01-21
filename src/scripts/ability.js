import { abilityVideos } from "./abilityVideoLinks";

export function agentAbilityFetch(agentData, agentName) {
    let selectedAbility = null;
    let agent=""
    for (let i = 0; i < agentData.data.length; i++) {
        if (agentData.data[i].displayName.toUpperCase() === agentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
            agent = agentData.data[i]
            break;
        }
    }
    if (selectedAbility === null) {
        const previousAbilityIcon1 = document.querySelector(`#agentAbility1`);
            const previousAbilityIcon2 = document.querySelector(`#agentAbility2`);
            const previousAbilityIcon3 = document.querySelector(`#agentAbility3`);
            const previousAbilityIcon4 = document.querySelector(`#agentAbility4`);
            previousAbilityIcon1.style.transform = "";
            previousAbilityIcon2.style.transform = "";
            previousAbilityIcon3.style.transform = "";
            previousAbilityIcon4.style.transform = "";
            previousAbilityIcon1.style.border = "";
            previousAbilityIcon2.style.border = "";
            previousAbilityIcon3.style.border = "";
            previousAbilityIcon4.style.border = "";
            previousAbilityIcon1.style.boxShadow = "";
            previousAbilityIcon1.style.opacity = "0.5"; 
            previousAbilityIcon2.style.boxShadow = "";
            previousAbilityIcon2.style.opacity = "0.5"; 
            previousAbilityIcon3.style.boxShadow = "";
            previousAbilityIcon3.style.opacity = "0.5";  
            previousAbilityIcon4.style.boxShadow = "";
            previousAbilityIcon4.style.opacity = "0.5";   
    }
    const abilityIcon1 = document.querySelector(`#agentAbility1`);
    const abilityIcon2 = document.querySelector(`#agentAbility2`);
    const abilityIcon3 = document.querySelector(`#agentAbility3`);
    const abilityIcon4 = document.querySelector(`#agentAbility4`);
    const source = document.querySelector("#abilityVideoSource")
    let abilityVideoArray = []
        for (let key in abilityVideos) {
            if (key.includes(agent.displayName)) {
                abilityVideoArray.push( abilityVideos[key]);
            }
        };
    const video = document.querySelector("#abilityVideoClip");
    abilityIcon1.addEventListener("click", function (e) {
        e.preventDefault();
        if (selectedAbility === agent.abilities[0].displayName) {
            return;
        }
        if (selectedAbility) {
            const previousAbilityIcon1 = document.querySelector(`#agentAbility1`);
            const previousAbilityIcon2 = document.querySelector(`#agentAbility2`);
            const previousAbilityIcon3 = document.querySelector(`#agentAbility3`);
            const previousAbilityIcon4 = document.querySelector(`#agentAbility4`);
            previousAbilityIcon1.style.transform = "";
            previousAbilityIcon2.style.transform = "";
            previousAbilityIcon3.style.transform = "";
            previousAbilityIcon4.style.transform = "";
            previousAbilityIcon1.style.border = "";
            previousAbilityIcon2.style.border = "";
            previousAbilityIcon3.style.border = "";
            previousAbilityIcon4.style.border = "";
            previousAbilityIcon1.style.boxShadow = "";
            previousAbilityIcon1.style.opacity = "0.5"; 
            previousAbilityIcon2.style.boxShadow = "";
            previousAbilityIcon2.style.opacity = "0.5"; 
            previousAbilityIcon3.style.boxShadow = "";
            previousAbilityIcon3.style.opacity = "0.5";  
            previousAbilityIcon4.style.boxShadow = "";
            previousAbilityIcon4.style.opacity = "0.5";   
        }
        abilityIcon1.style.transform = "scale(1.6)"; 
        abilityIcon1.style.border = "3px solid rgb(221, 82, 82)";
        abilityIcon1.style.opacity = "1"; 
        abilityIcon1.style.boxShadow = "0 0 10px 3px rgb(221, 82, 82)";
        document.querySelector("#agentAbilityName").innerText = agent.abilities[0].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[0].description;
        selectedAbility = agent.abilities[0].displayName
        source.src = abilityVideoArray[0];
        video.load();
    })
    abilityIcon2.addEventListener("click", function (e) {
        e.preventDefault();
        if (selectedAbility === agent.abilities[1].displayName) {
            return;
        }
        if (selectedAbility) {
            const previousAbilityIcon1 = document.querySelector(`#agentAbility1`);
            const previousAbilityIcon2 = document.querySelector(`#agentAbility2`);
            const previousAbilityIcon3 = document.querySelector(`#agentAbility3`);
            const previousAbilityIcon4 = document.querySelector(`#agentAbility4`);
            previousAbilityIcon1.style.transform = "";
            previousAbilityIcon2.style.transform = "";
            previousAbilityIcon3.style.transform = "";
            previousAbilityIcon4.style.transform = "";
            previousAbilityIcon1.style.border = "";
            previousAbilityIcon2.style.border = "";
            previousAbilityIcon3.style.border = "";
            previousAbilityIcon4.style.border = "";
            previousAbilityIcon2.style.boxShadow = "";
            previousAbilityIcon2.style.opacity = "0.5"; 
            previousAbilityIcon3.style.boxShadow = "";
            previousAbilityIcon3.style.opacity = "0.5";  
            previousAbilityIcon4.style.boxShadow = "";
            previousAbilityIcon4.style.opacity = "0.5"; 
            previousAbilityIcon1.style.boxShadow = "";
            previousAbilityIcon1.style.opacity = "0.5"; 
        }
        document.querySelector("#agentAbilityName").innerText = agent.abilities[1].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[1].description;
        abilityIcon2.style.transform = "scale(1.6)"; 
        abilityIcon2.style.border = "3px solid rgb(221, 82, 82)";
        abilityIcon2.style.opacity = "1"; 
        abilityIcon2.style.boxShadow = "0 0 10px 3px rgb(221, 82, 82)";
        selectedAbility = agent.abilities[1].displayName
        source.src = abilityVideoArray[1];
        video.load();
    })
    abilityIcon3.addEventListener("click", function (e) {
        e.preventDefault();
        if (selectedAbility === agent.abilities[2].displayName) {
            return;
        }
        if (selectedAbility) {
            const previousAbilityIcon1 = document.querySelector(`#agentAbility1`);
            const previousAbilityIcon2 = document.querySelector(`#agentAbility2`);
            const previousAbilityIcon3 = document.querySelector(`#agentAbility3`);
            const previousAbilityIcon4 = document.querySelector(`#agentAbility4`);
            previousAbilityIcon1.style.transform = "";
            previousAbilityIcon2.style.transform = "";
            previousAbilityIcon3.style.transform = "";
            previousAbilityIcon4.style.transform = "";
            previousAbilityIcon1.style.border = "";
            previousAbilityIcon2.style.border = "";
            previousAbilityIcon3.style.border = "";
            previousAbilityIcon4.style.border = "";
            previousAbilityIcon2.style.boxShadow = "";
            previousAbilityIcon2.style.opacity = "0.5"; 
            previousAbilityIcon3.style.boxShadow = "";
            previousAbilityIcon3.style.opacity = "0.5";  
            previousAbilityIcon4.style.boxShadow = "";
            previousAbilityIcon4.style.opacity = "0.5"; 
            previousAbilityIcon1.style.boxShadow = "";
            previousAbilityIcon1.style.opacity = "0.5"; 
        }
        abilityIcon3.style.transform = "scale(1.6)"; 
        abilityIcon3.style.border = "3px solid rgb(221, 82, 82)";
        abilityIcon3.style.opacity = "1"; 
        abilityIcon3.style.boxShadow = "0 0 10px 3px rgb(221, 82, 82)";
        document.querySelector("#agentAbilityName").innerText = agent.abilities[2].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[2].description;
        selectedAbility = agent.abilities[2].displayName
        source.src = abilityVideoArray[2];
        video.load();
    })
    abilityIcon4.addEventListener("click", function (e) {
        e.preventDefault();
        if (selectedAbility === agent.abilities[3].displayName) {
            return;
        }
        if (selectedAbility) {
            const previousAbilityIcon1 = document.querySelector(`#agentAbility1`);
            const previousAbilityIcon2 = document.querySelector(`#agentAbility2`);
            const previousAbilityIcon3 = document.querySelector(`#agentAbility3`);
            const previousAbilityIcon4 = document.querySelector(`#agentAbility4`);
            previousAbilityIcon1.style.transform = "";
            previousAbilityIcon2.style.transform = "";
            previousAbilityIcon3.style.transform = "";
            previousAbilityIcon4.style.transform = "";
            previousAbilityIcon1.style.border = "";
            previousAbilityIcon2.style.border = "";
            previousAbilityIcon3.style.border = "";
            previousAbilityIcon4.style.border = "";
            previousAbilityIcon2.style.boxShadow = "";
            previousAbilityIcon2.style.opacity = "0.5"; 
            previousAbilityIcon3.style.boxShadow = "";
            previousAbilityIcon3.style.opacity = "0.5";  
            previousAbilityIcon4.style.boxShadow = "";
            previousAbilityIcon4.style.opacity = "0.5"; 
            previousAbilityIcon1.style.boxShadow = "";
            previousAbilityIcon1.style.opacity = "0.5"; 
        }
        abilityIcon4.style.transform = "scale(1.6)"; 
        abilityIcon4.style.border = "3px solid rgb(221, 82, 82)";
        abilityIcon4.style.opacity = "1"; 
        abilityIcon4.style.boxShadow = "0 0 10px 3px rgb(221, 82, 82)";
        document.querySelector("#agentAbilityName").innerText = agent.abilities[3].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[3].description;
        selectedAbility = agent.abilities[3].displayName
        source.src = abilityVideoArray[3];
        video.load();
    })
}
