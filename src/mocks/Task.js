const { v4: uuidv4 } = require('uuid');
let items = [ 
    {
        id: uuidv4(),
        name: "Đây là đoạn test, Đây là đoạn test, Đây là đoạn test 123 ",
        level: 2,
    },
    {
        id: uuidv4(),
        name: "Đây là đoạn test, Đây là đoạn test, Đây là đoạn test 345 ",
        level: 1,
    },
    {
        id: uuidv4(),
        name: "Đây là đoạn test, Đây là đoạn test, Đây là đoạn test 567 ",
        level: 2,
    },
    {
        id: uuidv4(),
        name: "Đây là đoạn test, Đây là đoạn test, Đây là đoạn test 789 ",
        level: 3,
    },
    {
        id: uuidv4(),
        name: "Đây là đoạn test, Đây là đoạn test, Đây là đoạn test 901 ",
        level: 1,
    }
];
export default items;
