

/*

const xhr = new XMLHttpRequest();


xhr.onreadystatechange = function(){

    if (xhr.readyState==4){
        if (xhr.status==200){
            console.log(xhr.responseText)
        }
        if(xhr.status==400){
            console.log('file or resource is not found')
        }
    }
}

xhr.open('GET','Data.txt',true)

xhr.send();

*/
/*
const ajay = fetch('data.txt')
.then((response)=>{
    return response.text()


}).then((data)=>{
    console.log(data)
    document.getElementById('div1').innerHTML = data;
})
.catch((err)=>{
    console.log('somthing fucking is wrong',err)
})
*/

//document.getElementById('bth1').addEventListener('click',getuser);

document.getElementById('btn2').addEventListener('click',getPost)



function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res){
        return res.json()
    
    .then(function(data){
        let output = '<h2>users</h2>'
        data.forEach(function(post){
            output += `
            <div>
            <h3>${post.title}</h3>
            <p> ${post.body}</p>
            </div>
            `;
            
        })
        document.getElementById('output').innerHTML = output;
    })
})
}





