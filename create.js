//create
function readImage(input) {
    if(input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
            const previewImage = document.getElementById("preview_image")
            previewImage.src = e.target.result
        }
        reader.readAsDataURL(input.files[0])
    }
}
const inputImage = document.getElementById("input_image")
inputImage.addEventListener("change", e => {
    readImage(e.target)
})