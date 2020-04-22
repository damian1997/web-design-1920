export default async function(req,res,COMPONENTPATH,BUNDLE) {
  res.render(`${COMPONENTPATH}/dashboard/views/dashboard`, {
    bundledCSS: BUNDLE['main.css'],
    bundledJS: BUNDLE['main.js'],
    basePartialsPath: `${COMPONENTPATH}/base/views/partials`
  })
}
