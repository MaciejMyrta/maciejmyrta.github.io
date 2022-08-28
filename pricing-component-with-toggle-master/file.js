let proPrice = document.getElementById('proPrice')
let basicPrice = document.getElementById('basicPrice')
let masterPrice = document.getElementById('masterPrice')

proPrice.textContent = '24.99'
basicPrice.textContent = '19.99'
masterPrice.textContent = '39.99'

let state = 'Monthly'

let button = document.getElementById('button')
  button.onclick = function changeContent() {

    if (state == "Monthly") {
      state = "Annually"
      proPrice.textContent = '249.99'
      basicPrice.textContent = '199.99'
      masterPrice.textContent = '399.99'
    }
    else {
      state = "Monthly"
      proPrice.textContent = '24.99'
      basicPrice.textContent = '19.99'
      masterPrice.textContent = '39.99'
    }
  }