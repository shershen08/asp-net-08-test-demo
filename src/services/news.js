


 export const getNews = () => axios.get(`${API_URL}/news`)


//  comoponent -> state (REDUX) 
//                 -> getNews (service)  //
//                     -> state (REDUX)  //
//                         -> component  //