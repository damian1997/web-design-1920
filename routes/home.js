export default async function(req,res,COMPONENTPATH) {
  res.render(`${COMPONENTPATH}/base/views/home`, {
    bundledCSS: BUNDLE['main.css'],
    bundledJS: BUNDLE['main.js']
  })
}
