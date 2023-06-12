function findWeaponData (weaponData, weaponName) {
    let weapon =""
    for (let i = 0; i < weaponData.data.length; i++) {
        if (weaponData.data[i].displayName.toUpperCase() === weaponName.toUpperCase() && weaponData.data[i]["isPlayableCharacter"]) {
            weapon = weaponData.data[i]
            break;
        }
    }

    if (weapon) {
        
    }
}

export function weaponDataFetch(weaponName) {
    fetch("https://valorant-api.com/v1/weapons")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const weaponData = data;
        findWeaponData (weaponData, weaponName)
        const weaponOptions = document.querySelector('#weaponOptions');
        weaponOptions.addEventListener("change", (e) => {
            const weaponName2 = e.target.value;
            findWeaponData( weaponData, weaponName2)
        })
    })
}