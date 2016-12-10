## Publishing

`developpackage.json` should always mirror your `package.json` for development.
After installing dependencies for your library and running your demo, just copy contents of `package.json` to `developpackage.json`.

Then to publish:

1. Setup `publishpackage.json` the way you want your library published (Bumping correct version and setting the description, keywords, repo, main, and typings correctly for instance).
2. `node preparepublish` (This will set your `package.json` to your publish package).
3. `npm publish`

### Back to development

After publishing, it's a good idea to set your `package.json` back to development mode before committing your changes. Your `developpackage.json` should be exactly what your development mode package was before publishing above.

1. `node preparedevelop`
2. Continue developing.
