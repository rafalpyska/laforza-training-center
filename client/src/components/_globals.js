import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './Base',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

export const registerComponents = app => requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  app.component(
    componentName,
    componentConfig.default || componentConfig
  )
})