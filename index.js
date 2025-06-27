/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertNumber = Number(document.getElementById("convert-number").textContent);
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

convertBtn.addEventListener("click", function() {
    const feet = (convertNumber * 3.281).toFixed(3)
    const meters = (convertNumber / 3.281).toFixed(3)
    const gallons = (convertNumber * 0.264).toFixed(3)
    const liters = (convertNumber / 0.264).toFixed(3)
    const pounds = (convertNumber * 2.204).toFixed(3)
    const kilos = (convertNumber / 2.204).toFixed(3)

    lengthP.textContent = `${convertNumber} meters = ${feet} feet | ${convertNumber} feet = ${meters} meters`
    volumeP.textContent = `${convertNumber} liters = ${gallons} gallons | ${convertNumber} gallons = ${liters} liters`
    massP.textContent = `${convertNumber} kilos = ${pounds} pounds | ${convertNumber} pounds = ${kilos} kilos`
});