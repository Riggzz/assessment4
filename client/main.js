const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)

const carsSelect = document.getElementById("cars")

const getCars = () => {
    axios.get("http://localhost:4000/api/cars/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

carsSelect.addEventListener('mouseout', getCars)

const carWheels = document.getElementById("wheels")

const getWheels = () => {
    axios.get("http://localhost:4000/api/wheels/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

carWheels.addEventListener('click', getWheels)


const carTurbo = document.getElementById("turbo")

const getTurbo = () => {
    axios.get("http://localhost:4000/api/turbo/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

carTurbo.addEventListener('click', getTurbo)

const dButton = document.getElementById("dontTouch")

const deleteDont = () => {
    axios.delete("http://localhost:4000/api/dontTouch/")
        .then(res => {
            const data = res.data;
            alert(data)
        })
};

dButton.addEventListener('click', deleteDont)