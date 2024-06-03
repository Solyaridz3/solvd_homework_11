const sample1 = {
    user: {
        id: 1,
        name: "John Smith",
        isActive: true,
        contact: {
            email: "john.smith@example.com",
            phone: "+1234567890",
        },
    },
    posts: [
        {
            id: 1,
            title: "First post",
            content: "This is my first post!",
            tags: ["introduction", "hello"],
        },
        {
            id: 2,
            title: "Another Post",
            content: "Here's another post.",
            tags: ["update", "news"],
        },
    ],
    settings: {
        theme: "light",
        layoutStyle: { icons: true, design: "new" },
        notifications: true,
    },
};

const sample2 = {
    name: "John",
    age: 32,
    isActive: true,
    phoneNumbers: [12345134, 123124125, 123],
    friends: [
        {
            name: "Stacy",
            age: 22,
            isActive: true,
        },
        {
            name: "Mark",
            age: 25,
            isActive: false,
        },
    ],
};

const jsonString1 = `{"name": "John", "age": 30, "city": "New York"}`;
const jsonString2 = '[{"name": "Jane"}, {"name": "Doe"}]';
const jsonString3 = '{"boolean": true, "nullValue": null, "array": [1, 2, 3]}';
const unicodeSample = `{
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "M\u00FCnchen",
      "country": "Deutschland"
    },
    "favorites": {
      "color": "\u9752",
      "food": "Sushi \uD83C\uDF63",
      "music": "\uD83C\uDFB5"
    },
    "languages": [
      "English",
      "Espa\u00F1ol",
      "\u65E5\u672C\u8A9E",
      "\u4E2D\u6587"  
    ],
    "emoticons": {
      "happy": "\uD83D\uDE0A",
      "sad": "\uD83D\uDE22",  
      "wink": "\uD83D\uDE09"  
    },
    "quote": "\u201CTo be, or not to be, that is the question.\u201D \u2013 Shakespeare"
  }
`;

const datesSample = `{"event1":{"name":"Conference","date":"2024-07-15","location":"New York"},"event2":{"name":"Meeting","date":"2024-08-20","location":"London"},"event3":{"name":"Webinar","date":"2024-09-05","location":"Online"}}`;

export {
    jsonString1 as data1,
    jsonString2 as data2,
    jsonString3 as data3,
    unicodeSample,
    datesSample,
};

export const data4 = JSON.stringify(sample1);
export const data5 = JSON.stringify(sample2);
