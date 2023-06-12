import { agentIconFetch, agentIconListener } from "./scripts/agentIcon";
import { agentDataFetch } from "./scripts/agentInfo";
import { weaponDataFetch } from "./scripts/weapon";

agentIconFetch("Astra");
agentIconFetch("Breach");
agentIconFetch("Brimstone");
agentIconFetch("Chamber");
agentIconFetch("Cypher");
agentIconFetch("Fade");
agentIconFetch("Gekko");
agentIconFetch("Harbor");
agentIconFetch("Jett");
agentIconFetch("KAY/O");
agentIconFetch("Killjoy");
agentIconFetch("Neon");
agentIconFetch("Omen");
agentIconFetch("Phoenix");
agentIconFetch("Raze");
agentIconFetch("Reyna");
agentIconFetch("Sage");
agentIconFetch("Skye");
agentIconFetch("Sova");
agentIconFetch("Viper");
agentIconFetch("Yoru");


agentDataFetch("Jett")

weaponDataFetch("Phantom")


document.addEventListener('DOMContentLoaded', function() {
    agentIconListener("Astra");
    agentIconListener("Breach");
    agentIconListener("Brimstone");
    agentIconListener("Chamber");
    agentIconListener("Cypher");
    agentIconListener("Fade");
    agentIconListener("Gekko");
    agentIconListener("Harbor");
    agentIconListener("Jett");
    // agentIconListener("KAY/O");
    agentIconListener("Killjoy");
    agentIconListener("Neon");
    agentIconListener("Omen");
    agentIconListener("Phoenix");
    agentIconListener("Raze");
    agentIconListener("Reyna");
    agentIconListener("Sage");
    agentIconListener("Skye");
    agentIconListener("Sova");
    agentIconListener("Viper");
    agentIconListener("Yoru");

});