function findWeaponData (weaponData, weaponName) {
    let weapon =""
    for (let i = 0; i < weaponData.data.length; i++) {
        if (weaponData.data[i].displayName.toUpperCase() === weaponName.toUpperCase()) {
            weapon = weaponData.data[i]
            break;
        }
    }

    if (weapon) {
        document.querySelector("#weaponPortrait").src = weapon.displayIcon;
        document.querySelector('#magazineSize').innerText = `Magazine size: ${JSON.stringify(weapon.weaponStats.magazineSize)} bullets`;
        document.querySelector('#fireRate').innerText = `Fire rate: ${JSON.stringify(weapon.weaponStats.fireRate)} bullets per second`;
        document.querySelector('#reloadTime').innerText = `Reload time: ${JSON.stringify(weapon.weaponStats.reloadTimeSeconds)} seconds`;
        document.querySelector('#firstBulletAccuracy').innerText = `First bullet accuracy: ${JSON.stringify(weapon.weaponStats.firstBulletAccuracy)}`;
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