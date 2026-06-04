const data = [
  {
    "id": 1,
    "title": "Atomic Habits",
    "publicationDate": "2018-10-16",
    "author": "James Clear",
    "genres": {
      "primary": "Self Help",
      "secondary": "Productivity"
    },
    "hasMovieAdaption": false,
    "pages": 320,
    "translations": {
      "english": true,
      "bangla": true,
      "spanish": true
    },
    "reviews": {
      "goodReview": {
        "rating": 4.8,
        "ratingCount": 850000,
        "reviewCount": 42000
      },
      "libraryThing": {
        "rating": 4.5,
        "ratingCount": 12000,
        "reviewCount": 1800
      }
    }
  },
  {
    "id": 2,
    "title": "The Alchemist",
    "publicationDate": "1988-04-15",
    "author": "Paulo Coelho",
    "genres": {
      "primary": "Fiction",
      "secondary": "Adventure"
    },
    "hasMovieAdaption": false,
    "pages": 208,
    "translations": {
      "english": true,
      "bangla": true,
      "french": true
    },
    "reviews": {
      "goodReview": {
        "rating": 4.2,
        "ratingCount": 2700000,
        "reviewCount": 98000
      },
      "libraryThing": {
        "rating": 4.0,
        "ratingCount": 25000,
        "reviewCount": 3200
      }
    }
  },
  {
    "id": 3,
    "title": "Harry Potter and the Sorcerer's Stone",
    "publicationDate": "1997-06-26",
    "author": "J.K. Rowling",
    "genres": {
      "primary": "Fantasy",
      "secondary": "Young Adult"
    },
    "hasMovieAdaption": true,
    "pages": 309,
    "translations": {
      "english": true,
      "bangla": true,
      "german": true
    },
    "reviews": {
      "goodReview": {
        "rating": 4.7,
        "ratingCount": 9800000,
        "reviewCount": 150000
      },
      "libraryThing": {
        "rating": 4.6,
        "ratingCount": 50000,
        "reviewCount": 6000
      }
    }
  }
]

function getBooks(){
    return data;
}
function getBook(id){
  return data.find((d) => d.id === id);
}

// const books = getBooks()
// console.log(books)

const book = getBook(2)

// const title = book.title;
// const author = book.author;
const {title, author, genres} = book

console.log(title, author, genres)
document.getElementById("demo").innerHTML = [author, title, "primary:" + genres.primary, "Secondary: " + genres.secondary];