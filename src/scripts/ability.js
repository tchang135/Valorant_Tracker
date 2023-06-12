import { abilityVideos } from "./abilityVideoLinks";

export function agentAbilityFetch(agentData, agentName) {
    let agent=""
    for (let i = 0; i < agentData.data.length; i++) {
        if (agentData.data[i].displayName.toUpperCase() === agentName.toUpperCase() && agentData.data[i]["isPlayableCharacter"]) {
            agent = agentData.data[i]
            break;
        }
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
        document.querySelector("#agentAbilityName").innerText = agent.abilities[0].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[0].description;
        source.src = abilityVideoArray[0];
        video.load();
    })

    abilityIcon2.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#agentAbilityName").innerText = agent.abilities[1].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[1].description;
        source.src = abilityVideoArray[1];
        video.load();
    })

    abilityIcon3.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#agentAbilityName").innerText = agent.abilities[2].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[2].description;
        source.src = abilityVideoArray[2];
        video.load();
    })

    abilityIcon4.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#agentAbilityName").innerText = agent.abilities[3].displayName;
        document.querySelector("#agentAbilityDescription").innerText = agent.abilities[3].description;
        source.src = abilityVideoArray[3];
        video.load();
    })
}

