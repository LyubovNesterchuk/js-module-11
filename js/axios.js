//бібліотека https://axios-http-com/

//робимо рефакторинг

const url = "https://jsonplaceholder.typicode.com/todos";

const list = document.querySelector(".todo-list");

// fetch(url)
//     .then(response =>{
//     if(!response.ok) {
//         throw new Error(error.status);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data));
//     })
//     .catch(error => {
//         console.log(error);
//     })

function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
    <li class="list-item" data-id=${id}>
    <input type="checkbox" ${completed && "checked"}/>
    <p>${title}</p>
    </li>
            `).join("");
}
    

//console.log(axios("https://jsonplaceholder.typicode.com/todos"));//Promise {<pending>}

//-----------------------------------------------------------1
// axios("https://jsonplaceholder.typicode.com/todos")
//     .then(response =>{
//         console.log(response);//{data: Array(200), status: 200, statusText: '', headers: r, config: {…}, …}
//         list.insertAdjacentHTML("beforeend", createMarkup(response.data));
//     })
//     .catch(error => {
//         console.log(error);
//     })

// axios("https://jsonplaceholder.typicode.com/todos1")
//     .then(response =>{
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);//ye {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
//     })


//------------------------------------------------------------2
// axios({
//     method: "GET",
//     url:"https://jsonplaceholder.typicode.com/todos"
// })
// .then(response => {
//     console.log(response); // Перевіряємо структуру відповіді
//     list.insertAdjacentHTML("beforeend", createMarkup(response.data));
// })
// .catch(error => {
//     console.error(error);
// });

//--------------------------------------------------------------------3

// const fetchData = (url) => {
//     return axios(url);
// }

// fetchData("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => {
//         console.log(res);
//         list.insertAdjacentHTML("beforeend", createMarkup(res.data));
//     })
//     .catch(error => {
//         console.log(error);
//     })

//------------------------------------------------------------------4

// axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then(response => {
//         console.log(response);
//         list.insertAdjacentHTML("beforeend", createMarkup(response.data));
//     })
//     .catch(error => {
//         console.log(error);
//     })


// рефакторинг з ключами


// const API_KEY ="50781688-4c5e14a62117c7affe0b16869";
// const list2 = document.querySelector(".photos-list");

//----------------------------------------------------------------1
// const params = new URLSearchParams({
//     key: API_KEY,
//     q: "rose"
// });

// axios(`http://pixabay.com/api?${params}`)
//     .then(({ data }) =>{
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
// })

//----------------------------------------------------------------2
// axios(`http://pixabay.com/api?`, {
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer asdfghjkljklkjhgf"
//     },
//      params: {
//         key: API_KEY,
//         q: "rose"
//     }
// })
//     .then(({ data }) =>{
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);//ye {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}
//     })



//---------------------------------------------------------------------3
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.common["Authorization"] = "Bearer sdfghjklkjhgfdxsdfghj";

// axios("./todos")
//     .then(data =>{
//         console.log(data);//{data: Array(200), status: 200, statusText: '', headers: r, config: {…}, …}
//     })


//---------------------------------------------------------------------------4
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    // headers: {
    //     "Authorization":`Bearer ${API_KEY}`
    // }
})
instance("todos")
.then((res) => {
    console.log(res.data);
    list.insertAdjacentHTML("beforeend", createMarkup(res.data));
})
.catch((err) => {
    console.error(err);
});