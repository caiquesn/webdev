/* Buscando e contando dados no array

Baseado no array de livros por categoria abaixo, faça os seguintes  desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segrdos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George s. Clason",
            },
        ],
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title:"Você é insubstituivel",
                author:"Augusto Cury",
            },
            {
                title:"ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ],
    },
];

// const com tamanho do array
const totalCategories = booksByCategory.length
// escreve a const
console.log(totalCategories);

// pegou objeto category dentro da categoria de livros e transformou em variável
for(let category of booksByCategory) {
    // pegou a propriedade category
    console.log('Total de livros da categoria: ', category.category)
    // total de livros da category
    console.log(category.books.length)
}

// segunda questão
function countAuthors() {
    let authors = [];

    // pegou objeto category dentro da categoria de livros e transformou em variável
    for(let category of booksByCategory) {
        // pegou objeto books dentro do array category.books e transformou em variável
        for(let books of category.books) {
            // se o array authors estiver vazio add author
            if(authors.indexOf(books.author) == -1) {
                authors.push(books.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

// terceira e quarta questão
function booksOfAuthor(author) {
    let books = [];

    // pegou objeto category dentro da categoria de livros e transformou em variável
    for(let category of booksByCategory) {
        // pegou objeto books dentro do array category.books e transformou em variável
        for(let books of category.books) {
            // se a propriedade author do array books for igual Augusto cury add os titles
            if(books.author === author) {
                books.push(books.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(",")}`)
}
booksOfAuthor('Augusto Cury')