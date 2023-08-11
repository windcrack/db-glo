const postData = () =>{
    const data = {
		title: "Baldur’s Gate 3",
		price: 3000,
		sale: true,
		img: "https://upload.wikimedia.org/wikipedia/ru/d/dc/Baldur%27s_Gate_III_Logo.png",
		category: "Игры и софт"
	}

    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
  
      
}

export default postData;