var br = document.createElement('br')
var showData = document.getElementById('showData')
var url = 'http://localhost:3001/user'
axios.get(url)
.then(function(response){
    render(response.data)
})

var input = document.getElementById('inputData')


var button = document.getElementById('btnUpdata')
var buttonRemove = document.getElementsByClassName('btnRemove')



function upData (){
    var setData = {
        content:input.value
    }
    axios.post(url,setData)
    .then(function(x){
        location.href = "/"
    })
}

showData.addEventListener('click', clickOnRemove)


function clickOnRemove(e){
    var i = parseInt(e.target.dataset.id)
    axios.delete(`http://localhost:3001/user/${i}`)
    // axios.delete(url + '/' + i)
    location.href = '/'
}

var editData = document.getElementsByClassName('editData')
editData.onclick = clickOnEditData
function clickOnEditData(e){
    console.log(e)
}


function render(db){
    var users = db.map(function(x){
    return '<li>'+x.content+' <button class="editData" data-id="'+x.id+'">Edit</button> <button class="btnRemove" data-id="'+x.id+'">Delete</button></li>'
    })
    showData.innerHTML = users.join('')
}