var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }  
];
function dispayBooks(arr){
  for(let i=0; i<arr.length; i++){
    
      console.log (`Book title is ${arr[i].title}, the author is ${arr[i].author} and the status is ${arr[i].readingStatus}`);  
  }
}
dispayBooks(library);
