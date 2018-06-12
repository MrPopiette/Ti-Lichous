document.getElementById("nbPersonsSlider").oninput = function() {SliderToNumber()};
document.getElementById("nbPersonsNumber").oninput = function() {NumberToSlider()};

function SliderToNumber() {
    document.getElementById("nbPersonsNumber").value = document.getElementById("nbPersonsSlider").value
}
function NumberToSlider() {
    document.getElementById("nbPersonsSlider").value = document.getElementById("nbPersonsNumber").value
}