import logo from './Images/owl.png';
import p1 from './Images/nature.png';
import p2 from './Images/maths.jpg';
import p3 from './Images/physics.jpeg';
import p4 from './Images/botanique.jpg';
import p5 from './Images/chimics.jpg';
import p6 from './Images/literature.png';
import logoName from './Images/logoWITS.png';
import m from './Images/maroc.png'
import f from './Images/france.png'
import a from './Images/australie.png'
import b from './Images/belgique.png'
import q from './Images/qatar.png'
import e from './Images/espagne.png'

const data = [
    {
      "id": "1",
      "img": p1,
      "title": "Nature",
      "txt": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      'url': './images/nature.jpg',
    },
    {
      "id": "2",
      "img": p2,
      "title": "Maths",
      "txt": "",
      'url': './images/maths.jpg',
    },
    {
      "id": "3",
      "img": p3,
      "title": "Physics",
      "txt": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      'url': '/images/physics.jpg',
    },
    {
      "id": "4",
      "img": p4,
      "title": "Botanic",
      "txt": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      'url': '/images/botanique.jpg',
    },
    {
      "id": "5",
      "img": p5,
      "title": "Chimics",
      "txt": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      'url': '/images/chimics.jpg',
    },
    {
      "id": "6",
      "img": p6,
      "title": "Literature",
      "txt": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      'url': '/images/literature.jpg',
    },
]

const fields = ["Programming","Data Science","Technology","Writing","Politics","Productivity","Writing","Self Improvement","I.A.","M.L."]

const trending = [
  {
      "id":"01",
      "userName":"Maroc",
      "image":m,
      "title":"maroc",
      "date":"Nov 29",
      "readTime":"15 min"
  },
  {
      "id":"02",
      "userName":"Espagne",
      "image":e,
      "title":"espagne",
      "date":"Nov 29",
      "readTime":"9 min"
  },
  {
      "id":"03",
      "userName":"Australie",
      "image":a,
      "title":"australie",
      "date":"Nov 29",
      "readTime":"3 min"
  },
  {
      "id":"04",
      "userName":"France",
      "image":f,
      "title":"france",
      "date":"Nov 29",
      "readTime":"5 min"
  },
  {
      "id":"05",
      "userName":"Belgique",
      "image":b,
      "title":"belgique",
      "date":"Nov 29",
      "readTime":"10 min"
  },
  {
      "id":"06",
      "userName":"Qatar",
      "image":q,
      "title":"qater",
      "date":"Nov 29",
      "readTime":"12 min"
  },
]

export {data,logo,logoName,fields,trending};