document.getElementById("nbPersonsSliderPart").oninput = function() {SliderToNumber()};
document.getElementById("nbPersonsNumberPart").oninput = function() {NumberToSlider()};

document.getElementById("nbPersonsSliderPro").oninput = function() {SliderToNumber()};
document.getElementById("nbPersonsNumberPro").oninput = function() {NumberToSlider()};

function SliderToNumber() {
    document.getElementById("nbPersonsNumberPart").value = document.getElementById("nbPersonsSliderPart").value;
    document.getElementById("nbPersonsNumberPro").value = document.getElementById("nbPersonsSliderPro").value;
}
function NumberToSlider() {
    document.getElementById("nbPersonsSliderPart").value = document.getElementById("nbPersonsNumberPart").value;
    document.getElementById("nbPersonsSliderPro").value = document.getElementById("nbPersonsNumberPro").value;
}