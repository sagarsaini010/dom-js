users = [
  {
    username: "garima_saini",
    likeCount: 1200,
    commentCount: 85,
    shareCount: 30,
    caption: "Enjoying the sunset vibes 🌅✨",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    video: "./videos/video1.mp4",
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
    video: "./videos/video2.mp4",
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
    video: "./videos/video3.mp4",
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
    video: "./videos/video4.mp4",
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
    video: "./videos/video5.mp4",
    isFollow: true,
    isLike: false,
  },
];

let all_reels = document.querySelector(".all-reels");

function showData() {
  let sum = "";
  users.forEach((element) => {
    sum += `<div class="reel">
               <video autoplay muted loop width="550px" src="${
                 element.video
               }"></video>

               <div class="bottom">
                <div class="info">
                    <img src="${element.userImage}" alt="">
                    <h4>@${element.username}</h4>
                    <button class="f-button">Follow</button>
                </div>
                <div class="caption">
                    <p>${element.caption}</p>
                </div>
               </div>
               <div class="right">
                <div class="like b">
                    <div class="like-icon icon">${
                      element.isLike
                        ? `<i class="ri-heart-3-fill"></i>`
                        : `<i class="ri-heart-3-line"></i>`
                    }</div>
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
}
showData();


let btn = document.querySelectorAll("button");
btn.forEach((elem, index) => {
  elem.id = index;
});

let like = document.querySelectorAll(".ri-heart-3-line");

like.forEach((e, ind) => {
  e.id = ind;
});

all_reels.addEventListener("click", (e) => {
  if (e.target.className === "ri-heart-3-line" || e.target.className === "ri-heart-3-fill") {
    if (
      !users[e.target.id].isLike
    ) {
      users[e.target.id].likeCount++;
      users[e.target.id].isLike = !users[e.target.id].isLike;
    } else {
      users[e.target.id].likeCount--;
      users[e.target.id].isLike = !users[e.target.id].isLike;
    }
    showData();
  }
   else if (e.target.className === "f-button") {
    if (!users[e.target.id].isFollow) {
      e.target.innerHTML = "Unfollow";
      users[e.target.id].isFollow = !users[e.target.id].isFollow;
    } else {
      e.target.innerHTML = "Follow";
      users[e.target.id].isFollow = !users[e.target.id].isFollow;
    }
  }

  // console.log(users[e.target.id].likeCount, users[e.target.id].isLike);
  // console.log(users[e.target.id].isFollow, users[e.target.id].isFollow);
});
