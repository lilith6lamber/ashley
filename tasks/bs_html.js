import browserSync from 'browser-sync';

function bs_html() {
	browserSync.init({
		server: {
			baseDir: 'build/',
			host: '192.168.0.104',
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}

export default bs_html;