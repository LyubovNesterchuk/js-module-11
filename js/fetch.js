// function fetchData(statusCode) {
//     return fetch(`https://httpstat.us/${statusCode}`).then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//     });
//   }
  
//   fetchData(200)
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));
//   fetchData(404)
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));
//   fetchData(500)
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));


// ---------------------------------------------------------------------------------------1

// console.log("Fetching data...");
// fetch('https://jsonplaceholder.typicode.com')
//       .then(response => response.json())
//       .then(json => console.log(json))


// ---------------------------------------------------------------------------------------2

// const list = document.querySelector(".todo-list");

// fetch("https://jsonplaceholder.typicode.com/todos?_limit=10&_page=5")
//     .then(res => {
//         if (!res.ok) {
//             throw new Error("Ooops!");
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data));
//     })
//     .catch(error => {
//         console.log("catch", error);
//     });

// function createMarkup(arr) {
//     return arr.map(({ id, title, completed }) => `
//         <li data-id="${id}" class="list-item">
//             <input type="checkbox" ${completed ? "checked" : ""}/>
//             <p>${title}</p>
//         </li>
//     `).join("");
// }



// ---------------------------------------------------------------------3

// const list = document.querySelector(".todo-list");

// const params = new URLSearchParams({
//     _limit: 10,
//     _page: 4
// });

// console.log(params.toString());

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error("Ooops!");
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data));
//     })
//     .catch(error => {
//         console.log("catch", error);
//     });

// function createMarkup(arr) {
//     return arr.map(({ id, title, completed }) => `
//         <li data-id="${id}" class="list-item">
//             <input type="checkbox" ${completed ? "checked" : ""}/>
//             <p>${title}</p>
//         </li>
//     `).join("");
// }


// -----------------------------------------------------------------------------4

// function foo(url) {
//     return fetch(url)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error("Ooops!");
//             }
//             return res.json();
//         })
          
// }


// foo("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("catch", error);
//     });


    // ------------------------------------------------------------------5
    


// const list2 = document.querySelector(".posts-list");
 

// function foo(url) {
//     return fetch(url)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error("Ooops!");
//             }
//             return res.json();
//         })
          
// }

// const params = new URLSearchParams({
//     _limit: 12,
//     _page: 8
// })
    
//  foo(`https://jsonplaceholder.typicode.com/posts?${params}`)
//     .then(data => {
//         console.log(data);
//      list2.insertAdjacentHTML("beforeend", createMarkup2(data));
//     })
//     .catch(error => {
//         console.log("catch", error);
//     });

//     function createMarkup2(arr) {
//     return arr.map(({ id,  title, body}) => `
//         <li data-id="${id}" class="list-item">
//            <h2>${title}</h2>
//             <p>${body}</p>
//         </li>
//     `).join("");
// }


// ----------------------------------------------------------------------------------------6
const API_KEY ="50781688-4c5e14a62117c7affe0b16869";
const list= document.querySelector(".photos-list")

fetch("https://pixabay.com/api/?key=50781688-4c5e14a62117c7affe0b16869&q=yellow+flowers&image_type=photo") 
    .then(response => {
        if (!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    }  )
    .then(data => {
        console.log(data);
        list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
    })
    .catch (error => {
        console.log("catch", error);
    })

    function createMarkup(arr) {
       return arr.map(({ id, previewURL, tags }) => `
            <li data-id=${id} class="list-item">
    <img src="${previewURL}" alt="${tags}" width="300">
 </li>
 `).join("");
        }