const getData = () =>{
    return fetch('https://test-glo-db-default-rtdb.firebaseio.com/goods.json')
      .then(response => response.json());
}

export default getData;