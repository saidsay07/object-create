// Значения видемы в циклах
const defaultPerson = {
    name: "Said",
    birthYear: 2007
}

// Значения не выдемы в циклах
const person = Object.create({
    // Создается в prototype object
    calculatorAge() {
        return new Date().getFullYear() - this.birthYear
    }
},{
    name: {
        value: "Said",
        // Значение видно
        enumerable: true,
        // Значение изменяемо
        writable: true,
        // Значение удалиться
        configurable: true
    },
    birthYear: {
        value: 2007,
        // Значение не видно default
        enumerable: false,
        // Значение не изменяемо default
        writable: false,
        // Значение удалиться default
        configurable: false
    },
    age: {
        // Возращает при запросе
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        // Возращает при изменении
        set(value) {
            alert(`Изменения не на всегда, ваш возраст ${value}`)
        }
    }
})
// Неизмениться без property descriptor
person.name = "Saidjan"
// неудалиться без property descriptor
delete person.name

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log("key:", key, person[key])
    }
}