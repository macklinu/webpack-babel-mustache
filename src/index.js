import $ from 'jquery'
import header from './header.hjs'

let $root = $('#root')

$root.append(header.render({ title: 'Title' }))

// Import templates asynchronously
import('./list.hjs')
  .then(module => module.default)
  .then(template => {
    $root.append(
      template.render({
        items: [
          { id: 1, value: 'one' },
          { id: 2, value: 'two' },
          { id: 3, value: 'three' },
        ],
      })
    )
  })
