const show = async () => {
  const data = await fetchData();
  const root = document.getElementById("root");
  const list = data.map(
    elem =>
      `<tr>
            <td>${elem.id}</td>
            <td>${elem.name}</td>
            <td>${elem.type}</td>
            <td>${elem.age}</td>
            <td>${elem.food}</td>
          </tr>`
  );
  root.innerHTML = `<table class="table table-striped table-sm">
    <thead>
      <tr>
        <th>№</th>
        <th>Имя</th>
        <th>Порода</th>
        <th>Возраст</th>
        <th>Еда</th>
      </tr>
    </thead>
    <tbody>
    ${list.join("")}
    </tbody>`;
};

const fetchData = async () => {
  const data = await fetch("http://localhost:3000/api/")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      return data;
    });
  return data;
};

document.getElementById("registerForm").onsubmit = async e => {
  e.preventDefault();
  const { elements } = e.target;
  const coll = Array.from(e.target.elements).slice(0,4);
  if (!coll.every((elem) => elem.value !== '')
  ) {
    alert("Вы не заполнили все поля регистрации! Попробуйте еще раз!");
    return;
  }
  const data = {
    name: elements[0].value,
    type: elements[1].value,
    age: elements[2].value,
    food: elements[3].value
  };
  console.log(data);
  await fetch("http://localhost:3000/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  console.log(e.target);
  console.log(elements);
  Array.prototype.forEach.call(e.target.elements, elem => {
    elem.value = "";
  });
  await show();
};
