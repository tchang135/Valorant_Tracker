function findWeaponData (weaponData, weaponName) {
    let weapon =""
    for (let i = 0; i < weaponData.data.length; i++) {
        if (weaponData.data[i].displayName.toUpperCase() === weaponName.toUpperCase()) {
            weapon = weaponData.data[i]
            break;
        }
    }

    if (weapon) {
        document.querySelector("#weaponMainPortrait").src = weapon.displayIcon;
        document.querySelector('#weaponNameDisplay').innerText = weapon.displayName
        document.querySelector('#magazineSize').innerText = `Magazine size: ${JSON.stringify(weapon.weaponStats.magazineSize)} bullets`;
        document.querySelector('#fireRate').innerText = `Fire rate: ${JSON.stringify(weapon.weaponStats.fireRate)} bullets per second`;
        document.querySelector('#reloadTime').innerText = `Reload time: ${JSON.stringify(weapon.weaponStats.reloadTimeSeconds)} seconds`;
        document.querySelector('#firstBulletAccuracy').innerText = `First bullet accuracy: ${JSON.stringify(weapon.weaponStats.firstBulletAccuracy)}`;
    }
}

function weaponImageGrid (weaponData, weaponName) {
    let weapon = ""
    for (let i = 0; i < weaponData.data.length; i++) {
        if (weaponData.data[i].displayName.toUpperCase() === weaponName.toUpperCase()) {
            weapon = weaponData.data[i]
            break;
        }
    }

    if (weapon) {
        console.log(weapon.shopData)
        document.querySelector(`#${weapon.displayName}BuyImage`).src = weapon.shopData.newImage;
        document.querySelector(`#${weapon.displayName}Cost`).innerText = weapon.shopData.cost;
        if (weapon.displayName === 'Classic') {
            document.querySelector(`#${weapon.displayName}Cost`).innerText = 'FREE';
        }
    }
}

export function defaultGunLoad (weaponName) {
    fetch("https://valorant-api.com/v1/weapons")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const weaponData = data;
        let weapon =""
        for (let i = 0; i < weaponData.data.length; i++) {
            if (weaponData.data[i].displayName.toUpperCase() === weaponName.toUpperCase()) {
                weapon = weaponData.data[i]
                break;
            }
        }

        if (weapon) {
            document.querySelector("#weaponMainPortrait").src = weapon.displayIcon;
            document.querySelector('#weaponNameDisplay').innerText = weapon.displayName
            document.querySelector('#magazineSize').innerText = `Magazine size: ${JSON.stringify(weapon.weaponStats.magazineSize)} bullets`;
            document.querySelector('#fireRate').innerText = `Fire rate: ${JSON.stringify(weapon.weaponStats.fireRate)} bullets per second`;
            document.querySelector('#reloadTime').innerText = `Reload time: ${JSON.stringify(weapon.weaponStats.reloadTimeSeconds)} seconds`;
            document.querySelector('#firstBulletAccuracy').innerText = `First bullet accuracy: ${JSON.stringify(weapon.weaponStats.firstBulletAccuracy)}`;
        }
    })
}

export function weaponDataFetch(weaponName) {
    fetch("https://valorant-api.com/v1/weapons")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const weaponData = data;
        weaponIconListener (weaponName, weaponData)
        weaponImageGrid(weaponData, weaponName)
    })
}

export function weaponIconListener(weaponName, weaponData) {
    const weaponIcon = document.querySelector(`#${weaponName}Item`);
    weaponIcon?.addEventListener("click", function (e) {
        e.preventDefault();
        findWeaponData(weaponData, weaponName)
    });
}