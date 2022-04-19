const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


empties.forEach(empty => {

  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
  empty.addEventListener('dragover', dragOver)
})

function dragStart() {
  this.classList += ' hold'
  setTimeout(() => this.classList = 'invisible', 0)
}

function dragEnd() {
  this.classList = 'fill'
}


function dragEnter(e) {
  e.preventDefault()
  this.classList += ' hovered'

}

function dragOver(e) {
  e.preventDefault()
}



function dragLeave() {
  this.classList = 'empty'
}

function dragDrop() {
  this.classList = 'empty'
  this.append(fill)

}