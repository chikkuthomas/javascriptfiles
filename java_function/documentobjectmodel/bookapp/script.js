function createBook(){
    // alert("inside create book")
    let bookname=namee.value;
    let author=authr.value;
    let price=pric.value;
    let pages=page.value;
    let book={
        bookname,author,price,pages
    }
  localStorage.setItem(bookname,JSON.stringify(book))
  alert("book created")

}

function search(){
  let search =serch.value
  let bname=JSON.parse(localStorage.getItem(("brida")))
  if(bname.bookname==search){
     console.log(bname);
      // alert(detail)
  }
  else{
      console.log("no book found");
  }
}