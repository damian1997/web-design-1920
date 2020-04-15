export default async function(req,res,COMPONENTPATH) {
  res.render(`${COMPONENTPATH}/base/views/home`, {
    title: 'Overview',
  })
}
