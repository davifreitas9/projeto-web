const express = require("express")
const server = express()

const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title:"Cursos de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure error alias nulla odio voluptatibus accusantium dolor, architecto enim nobis animi.",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title:"Exercicios",
        category:"Saude",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure error alias nulla odio voluptatibus accusantium dolor, architecto enim nobis animi.",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title:"Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure error alias nulla odio voluptatibus accusantium dolor, architecto enim nobis animi.",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title:"Karaoke",
        category:"Diversao em familia",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure error alias nulla odio voluptatibus accusantium dolor, architecto enim nobis animi.",
        url:"https://rocketseat.com.br"
    },
]


server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true,
})

server.get("/", function(req, res){
    return res.render("index.html", { ideas })

})
server.get("/ideias", function(req, res){
    return res.render("ideias.html")
})

server.listen(3000)