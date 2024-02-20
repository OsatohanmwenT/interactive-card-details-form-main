const cardNumberDisplay = document.getElementById("card-number")
const cardNumberInput = document.getElementById("card-number-input")
const ownerOfCard = document.getElementById("owner-name")
const cardOwnerInput = document.getElementById("card-owner-input")
const cardExpiryMonth = document.getElementById("card-month")
const cardExpiryYear = document.getElementById("card-year")
const expiryDisplay = document.getElementById("expiry-date")
const cvvDisplay = document.getElementById("cvv")
const cardCVC = document.getElementById("cardCVC")
const confirmBtn = document.getElementById("confirm-btn")
const continueBtn = document.getElementById("continue-btn")
const form = document.querySelector(".card-details")
let error = false

cardNumberInput.addEventListener("input", function (e) {
    let formattedValue = formatCreditCardNumber(e.target.value)
    e.target.value = formattedValue;
})

confirmBtn.addEventListener("click",() =>{
    if(cardNumberInput.value === ""){
        cardNumberInput.classList.add("error-border")
        cardNumberInput.nextElementSibling.innerHTML = "Cannot be empty"
        error = true
    }

    if(cardOwnerInput.value === ""){
        cardOwnerInput.classList.add("error-border")
        cardOwnerInput.nextElementSibling.innerHTML = "Cannot be empty"
        error = true
    }

    if(cardExpiryMonth.value === ""){
        cardExpiryMonth.classList.add("error-border")
        error = true
    }

    if(cardExpiryYear.value === ""){
        cardExpiryYear.classList.add("error-border")
        cardExpiryYear.parentElement.nextElementSibling.innerHTML = "Cannot be blank"
        error = true
    }
    if(cardCVC.value === ""){
        cardCVC.classList.add("error-border")
        cardCVC.nextElementSibling.innerHTML = "Cannot be blank"
        error = true
    }
    if(!error) {
        form.style.display = "none"
        form.nextElementSibling.style.display = "flex"
        cardNumberDisplay.innerHTML = cardNumberInput.value
        ownerOfCard.innerHTML = cardOwnerInput.value
        cvvDisplay.innerHTML = cardCVC.value
        expiryDisplay.textContent = `${cardExpiryMonth.value}/${cardExpiryYear.value}`
    }
})

continueBtn.addEventListener("click",() => {
    form.style.display = "flex"
    form.nextElementSibling.style.display = "none"
    reset()
})

function reset() {
    cardNumberDisplay.innerHTML = "0000 0000 0000 0000"
    ownerOfCard.innerHTML = "Jane Appleseed"
    cvvDisplay.innerHTML = "000"
    expiryDisplay.textContent = `00/00`
}

function formatCreditCardNumber(value) {
    let formattedValue = value.replace(/\s/g, '').match(/.{1,4}/g);
    return formattedValue ? formattedValue.join(' ') : '';
}