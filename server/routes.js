module.exports = function(app) {
  app.get('*', (req, res) => {
    console.log('DIRNAME', __dirname);
    res.write(middleware.fileSystem.readFileSync(
      path.join(__dirname, 'dist/index.html'))
    );
    res.end();
  });
}
