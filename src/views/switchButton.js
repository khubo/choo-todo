import html from 'choo/html'

export default (changeState, current) => {

  return html `
    <div>
    <button class="mdl-button mdl-js-button mdl-button--raised pad ${current == 'active' ? 'mdl-button--colored' : '' }" onclick=${() => changeState('active')}>
      Active
    </button>
    <button class="mdl-button mdl-js-button mdl-button--raised pad ${current == 'complete' ? 'mdl-button--colored' : '' }" onclick=${() => changeState('complete')}>
      Completed
    </button>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect pad ${current == 'all' ? 'mdl-button--colored' : '' }" onclick=${() => changeState('all')}>
      All
    </button>
    </div>
  `
}