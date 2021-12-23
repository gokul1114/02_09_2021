//1

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json()).then(data => {
  var newArr = data.filter(e => {
    if(e.region == "Asia" || e.continents[0] == "Asia")
      return true
  })
newArr.map(e => console.log(e.name.common))
})


//2

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json()).then(data => {
  var newArr = data.filter(e => {
    if(e.population < 200000)
      return true
  })
newArr.map(e => console.log(e.name.common))
})

//3

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json()).then(data => {
  var newArr = data.filter(e => {
    if(e.region == "Asia" || e.continents[0] == "Asia")
      return true
  })
newArr.forEach(e => console.log(e.name.common,e.flags,e.capital))
})

//4

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json()).then(data => {
  var total;
  var newArr = data.reduce((acc,e) => {
    acc = acc + e.population;
    total = acc
    return acc
  },0)
  console.log(total)
})

//6

fetch("https://restcountries.com/v3.1/currency/USD")
.then(res => res.json()).then(data => {
  var newArr = data.map(e => e.name.common)
  console.log(newArr)
})

