## Publishing

`packagedev.json` should always mirror your `package.json` for development.
After installing dependencies for your library and running your demo, just copy contents of `package.json` to `packagedev.json`.

Then to publish:

1. Setup `packagepublish.json` the way you want your library published (Bumping correct version and setting the description, author, keywords, repo, main, and typings correctly for instance).
2. `node prep publish` (This will set your `package.json` to be your `packagepublish.json`).
3. `npm run build` (Create a fresh build of your library)
4. `npm publish`

### Back to development

After publishing, it's a good idea to set your `package.json` back to development mode before committing your changes. Your `packagedev.json` should be exactly what your development mode package was before publishing above.

1. `node prep dev`
2. Continue developing.
