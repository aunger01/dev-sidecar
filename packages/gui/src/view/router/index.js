import Index from '../pages/index'
import Server from '../pages/server'
import Proxy from '../pages/proxy'
import Node from '../pages/plugin/node'

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/server', component: Server },
  { path: '/proxy', component: Proxy },
  { path: '/plugin/node', component: Node }

]

export default routes
