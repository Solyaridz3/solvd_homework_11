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

export const data1 = JSON.stringify(sample1);
export const data2 = JSON.stringify(sample2);
