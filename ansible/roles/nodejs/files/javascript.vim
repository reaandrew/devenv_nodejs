let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_javascript_eslint_exec = 'eslint_d'
let g:fixmyjs_rc_filename = ['.eslintrc', '.eslintrc.json']

let test#javascript#webdriverio#file_pattern = '.js'
let g:test#runner_commands = ['Mocha', 'WebdriverIO']
