users = [
  {
    username: "garima_saini",
    likeCount: 1200,
    commentCount: 85,
    shareCount: 30,
    caption: "Enjoying the sunset vibes 🌅✨",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    video: "",
    isFollow: false,
    isLike: false,
  },
  {
    username: "rahul_traveler",
    likeCount: 5620,
    commentCount: 320,
    shareCount: 150,
    caption: "Exploring the mountains 🏔️🤍",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    video: "",
    isFollow: true,
    isLike: true,
  },
  {
    username: "divya_foodie",
    likeCount: 2450,
    commentCount: 142,
    shareCount: 60,
    caption: "Best street food ever 😋🔥",
    userImage: "https://randomuser.me/api/portraits/women/68.jpg",
    video: "",
    isFollow: false,
    isLike: false,
  },
  {
    username: "code_with_aarav",
    likeCount: 985,
    commentCount: 40,
    shareCount: 20,
    caption: "Coding all night 💻☕",
    userImage: "https://randomuser.me/api/portraits/men/15.jpg",
    video: "",
    isFollow: false,
    isLike: true,
  },
  {
    username: "style_by_meera",
    likeCount: 3100,
    commentCount: 210,
    shareCount: 90,
    caption: "New look ✨💄",
    userImage: "https://randomuser.me/api/portraits/women/12.jpg",
    video: "",
    isFollow: true,
    isLike: false,
  },
];
let all_reels = document.querySelector(".all-reels");
sum = "";
users.forEach((element) => {
  sum += `<div class="reel">
               <img src="https://images.unsplash.com/photo-1763713512968-fef8805cc6cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
               
               <div class="bottom">
                <div class="info">
                    <img src="${element.userImage}" alt="">
                    <h4>@${element.username}</h4>
                    <button></button>
                </div>
                <div class="caption">
                    <p>${element.caption}</p>
                </div>
               </div>
               <div class="right">
                <div class="like b">
                    <div class="like-icon icon"><i class="ri-heart-3-line"></i></div>
                    <div class="like-count">${element.likeCount}</div>
                </div>
                <div class="comment b">
                    <div class="comment-icon icon"><i class="ri-chat-3-line"></i></div>
                    <div class="comment-count">${element.commentCount}</div>
                </div>
                <div class="share b">
                    <div class="share-icon icon"><i class="ri-share-forward-line"></i></div>
                    <div class="share-count">${element.shareCount}</div>
                </div>
                <div class="option">
                    <div class="option-icon icon"><i class="ri-more-2-fill"></i></div>
                </div>
               </div>
            </div>`;
});
all_reels.innerHTML = sum;

let btn = document.querySelectorAll("button");
btn.forEach((elem,index)=>{
if(users[index].isFollow){
        elem.innerHTML = "Unfollow"  
    }
    else{
        elem.innerHTML = "Follow"
    }

    elem.addEventListener('click',()=>{
    users[index].isFollow = !(users[index].isFollow)
    if(users[index].isFollow){
        elem.innerHTML = "Unfollow"  
    }
    else{
        elem.innerHTML = "Follow"
    }
})
})