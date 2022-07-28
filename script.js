
const chartBox = document.querySelector('.chart')

const data = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
]

const maxLength = Math.max(...data.map((current) => current.amount))

data.map((current) => {  // map mehod returns new array of elements 
  // creating chart Bars and chips above
    let chartBar = document.createElement('div')
    chartBar.classList.add('chartBar')
    let chartChip = document.createElement('div')
    chartChip.classList.add('chartChip')
    let chartDay = document.createElement('div')
    chartDay.classList.add('chartDay')
// adding data to the chart chips and days
    chartChip.textContent = `$${current.amount}`
    chartDay.textContent = current.day
// appending created elements to the chartBox
    chartBox.appendChild(chartBar)
    chartBar.appendChild(chartChip)
    chartBar.appendChild(chartDay)
// changing the length on basis of the calcuation of amount of chartBar
    chartBar.style.height = `${0.1814 * current.amount}rem` 
// by default the chip is not visible
    chartChip.style.display = 'none'
})

const allChartBars = document.querySelectorAll('.chartBar')
allChartBars.forEach((current) => {  // foreach don't return anything
  current.addEventListener('mouseenter', () => {
    current.firstChild.style.display = 'block'
  })
  current.addEventListener('mouseleave', () => {
    current.firstChild.style.display = 'none'
  })

})

