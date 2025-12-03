fetch("http://localhost:3000/animales")
  .then(res => res.json())
  .then(data => {
    console.log("Lista de animales desde la API:");
    console.log(data);
  })
  