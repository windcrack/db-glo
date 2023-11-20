const getData = () =>{
    return fetch('../../db/db.json')
      .then(response => response.json());
}

export default getData;