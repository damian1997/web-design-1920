export default async function(req,res,COMPONENTPATH) {
  const month_map = [
    { month: 'januari', id: 1 },
    { month: 'februari', id: 2 },
    { month: 'maart', id: 3 },
    { month: 'april', id: 4 },
    { month: 'mei', id: 5 },
    { month: 'juni', id: 6 },
    { month: 'juli', id: 7 },
    { month: 'augustus', id: 8 },
    { month: 'september', id: 9 },
    { month: 'oktober', id: 10 },
    { month: 'november', id: 11 },
    { month: 'december', id: 12 }
  ]

  const month = month_map.find(month => {
    return month.month === req.body.month
  })
  
  const days_in_month = getDaysInMonth(month.id)
  const weeks = [
    { week: 1, days: [] },
    { week: 2, days: [] },
    { week: 3, days: [] },
    { week: 4, days: [] }
  ]
  let index = 0 
  while(index < days_in_month) {
    if(index === 7 || index < 7) {

    }  
    console.log(index)
    index++
  }

  res.render(`${COMPONENTPATH}/dashboard/views/partials/scheduler-form`, {
    month: req.body.month
  })
}

function getDaysInMonth(month,year = 2020) {
  return new Date(year, month, 0).getDate()
}
