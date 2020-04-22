(function () {
  const XHR = new XMLHttpRequest()
  const MONTH_SELECT = document.getElementById('month-select')
  MONTH_SELECT.addEventListener('change', event => {
    XHR.onload = () => {
      const schedule_form_container = document.querySelector('.schedule-form-container')
      schedule_form_container.innerHTML = XHR.response
    }

    XHR.open('POST', `${window.location.origin}/scheduler-form`)
    XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    XHR.send(`month=${event.target.value}`)
  })
})();

const mutationObserver = new MutationObserver((mutations) => {
  const schedule_form = document.getElementById('schedule-form')
  schedule_form.addEventListener('submit', event => {
    event.preventDefault()
  })
  console.log(mutations)
  console.log('Mutation observed inside form section')
})

mutationObserver.observe(document.querySelector('.schedule-form-container'), {
  characterData: true,
  childList: true,
  subtree: true,
})
