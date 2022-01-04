const templates = Handlebars.compile(document.querySelector('#template-book').innerHTML);
class BooksList{
  constructor(){
    const thisBook = this;
    thisBook.render();
    thisBook.initActions();
  }
    
  render(){
    //const thisBook = this;
    for(let element of dataSource.books){
      const ratingWidth = element.rating * 100 / 10;
      const ratingBgc = this.determineRatingBgc(element.rating);
      let data = {
        id: element.id,
        name: element.name,
        price: element.price,
        image: element.image,
        ratingWidth: ratingWidth,
        ratingBgc: ratingBgc
      };
      const generatedHTML = templates(data);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      const listClass = document.querySelector('.books-list');
      listClass.appendChild(generatedDOM);      
    }
  }
  initActions(){
    const thisBook = this;
    thisBook.favoriteBooks = [];
    thisBook.filters = [];
    const form = document.querySelector('.filters');
    form.addEventListener('change', function(event){
      if(event.target.name === 'filter' && event.target.type === 'checkbox'){
        if(event.target.checked){
          thisBook.filters.push(event.target.value);

        } else {
          for(let i = 0; i <= thisBook.filters.length; i++){
            if(thisBook.filters[i] == event.target.value){
              thisBook.filters.splice(i, 1);
            }
          }
        }
      }
      thisBook.filterBooks();
    });

    const bookList = document.querySelector('.books-list');

    bookList.addEventListener('dblclick', function(event){
      event.preventDefault();
      
      if(event.target.offsetParent.classList.contains('book__image')){
            
        if(event.target.offsetParent.classList.value === 'book__image'){
          event.target.offsetParent.classList.add('favorite');
          thisBook.favoriteBooks.push(event.target.offsetParent.getAttribute('data-id'));
        } else {
          event.target.offsetParent.classList.remove('favorite');
            
          for(let i = 0; i <= thisBook.favoriteBooks.length; i++){
                
            if(thisBook.favoriteBooks[i] == event.target.offsetParent.getAttribute('data-id')){
              thisBook.favoriteBooks.splice(i, 1);
            }
          }
        }
        //console.log(thisBook.favoriteBooks);
      }
    });

  }
  filterBooks(){
    const thisBook = this;
    for (let book of dataSource.books){
      let shouldBeHidden = false;
      for(const filter of thisBook.filters) {
        if(book.details[filter]) {
          shouldBeHidden = true;
          break;
        }
      }
      if(shouldBeHidden){
        document.querySelector('.book__image[data-id="' + book.id + '"]').classList.add('hidden');
      } else {
        document.querySelector('.book__image[data-id="' + book.id + '"]').classList.remove('hidden');
      }
    }
  }
  determineRatingBgc(rating){
    let background;
    if(rating < 6){
      background = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
    } else if(rating > 6 && rating <= 8){
      background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
    } else if (rating > 8 && rating <= 9){
      background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
    }
    else if (rating > 9){
      background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
    }

    return background;
  }
}

const app = new BooksList();

app;