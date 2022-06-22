const posts =[{id:'1',title:"merhaba",content:"deneme yazısı 1"},{id:'2',title:"xd",content:"deneme yazısı 2"}];

function listPosts(){
    for(let i=0;i<posts.length;i++){
        console.log(posts[i].id, posts[i].title, posts[i].content)
    }
}

function addPost(postObj){
    return new Promise((res,rej)=>{
        console.log("post is adding");
        if(res){
            posts.push(postObj);
            res("post added");
        }else{
            rej("hata")
        }
       
    })
}

async function addAndListPost(){
    listPosts();
    const newPosts = await addPost({id:'3',title:"yeni",content:"deneme yazısı 3"});
    console.log(newPosts);
    listPosts();
}

addAndListPost();