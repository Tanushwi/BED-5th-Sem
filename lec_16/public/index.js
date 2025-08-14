// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")

//     .then((res)=>{
//         console.log(res.data);
//     })
// }

//----> convertion of this code to async await syntax
async function getCommentData() {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getCommentData();

function adduser(email,password){
    axios.post('/user', {
        email: email,
        password: password
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.error(err);
    });
}
adduser("tanushwisingh27@gmail.com", "1234");