import Layout from 'layout'

export default {
	component: Layout,
	routes: 
	[
		{
			path: '/',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("components/MainPage").default)
				}, 'mainpage.chunk')
			},
		},
		{
			path: "*",
			getComponent: (location, callback) => {
				require.ensure([], require => {
					callback(null, require("components/NotFound").default)
				}, '404.chunk')
			}
		}
	]
}