module.exports = function(app) {
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(
      path.join(__dirname, 'dist/index.html'))
    );
    res.end();
  });
}
