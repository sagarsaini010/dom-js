let main = document.querySelector('main')
user = [
  {
    "name": "Sagar Saini",
    "role": "Web Developer",
    "image": "https://i.pinimg.com/736x/26/ef/9d/26ef9d6c14ba8e0060e5baa7487d655d.jpg",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut q"
  },
  {
    "name": "Garima Saini",
    "role": "Frontend Developer",
    "image": "https://i.pinimg.com/1200x/0d/6a/35/0d6a35d6cb603e349f64dd4645dd79cb.jpg",
    "description": "Passionate about creating responsive UI and improving user experience."
  },
  {
    "name": "Rohit Verma",
    "role": "Backend Engineer",
    "image": "https://i.pinimg.com/736x/4e/c2/66/4ec2662183d3c787d5fdc76aa4a78f29.jpg",
    "description": "Experienced in building scalable backend APIs using Node.js."
  },
  {
    "name": "Aditi Sharma",
    "role": "UI/UX Designer",
    "image": "https://i.pinimg.com/1200x/38/a2/23/38a22370fd90c4ec6b9f40ba1c0b0d01.jpg",
    "description": "Designs clean and modern interfaces with a user-centric approach."
  },
  {
    "name": "Yash Gupta",
    "role": "Full Stack Developer",
    "image": "https://i.pinimg.com/736x/f0/06/bd/f006bd3543814495d46b8f5f2c9b6318.jpg",
    "description": "Specializes in React, Node.js and cloud-based application development."
  },
  {
    "name": "Pooja Singh",
    "role": "Data Analyst",
    "image": "https://i.pinimg.com/736x/09/98/71/0998718bd2d2ecf1278da69916c7bb2e.jpg",
    "description": "Transforms raw data into meaningful insights using visualization tools."
  },
  {
    "name": "Arjun Mehta",
    "role": "Mobile App Developer",
    "image": "https://i.pinimg.com/1200x/1b/b2/54/1bb25458fbf3d28e9f059a3decde78e9.jpg",
    "description": "Builds cross-platform apps with Flutter and React Native."
  },
  {
    "name": "Simran Kaur",
    "role": "Content Writer",
    "image": "https://i.pinimg.com/1200x/8f/e8/10/8fe810ccf20740e1832dd9d893e13076.jpg",
    "description": "Creates engaging and SEO-friendly content for web platforms."
  },
  {
    "name": "Aman Yadav",
    "role": "DevOps Engineer",
    "image": "https://i.pinimg.com/1200x/2d/44/26/2d4426aa7fd1c24d78599f990d571e3f.jpg",
    "description": "Automates deployment pipelines and manages cloud infrastructure."
  },
  {
    "name": "Neha Patel",
    "role": "Software Tester",
    "image": "https://i.pinimg.com/736x/11/74/c2/1174c20c986dd76d6067097e1a4a2ce7.jpg",
    "description": "Ensures application quality with manual and automated testing."
  }
]

let sum = ''

for(let users of user){
   sum += ` <div class="card">
            <img src="${users.image}" alt="img">
            <h2>${users.name}</h2>
            <h3>${users.role}</h3>
            <p>
               ${users.description}
            </p>
            </div>`
}

main.innerHTML = sum

