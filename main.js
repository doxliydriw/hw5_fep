let year = prompt('Please neter your year of birth');
let city = prompt('Please enter your city');
let sport = prompt('Please enter your favorite sport');
age = 2023 - year
if (year == null) {
    alert ("Sorry you haven't entered your year of birth") 
} else {
    alert('Your age is '+age)
}
if (city == null) {
    alert ("Sorry you haven't entered your city of living")
}else if (city == 'kyiv') {
    alert('You are living in Ukraine')
} else if (city == 'washington') {
    alert ('You are living in USA')
} else if (city == 'london') {
    alert('You are living in England')
} else {
    alert('You are living in city '+city)
}
if (sport == null) {
    alert ("Sorry you haven't entered your favorit sport")
} else if (sport == 'box') {
    alert ('Wow, want to be like Klitchko?!')
} else if (sport == 'football') {
    alert ('Wow, want to be like Schevchenko?!')
} else if (sport == 'tennis') {
    alert ('Wow, want to be like Svitolina?!')
}


