import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: "Mark",
        lastName: "Zuckerberg",
        email: "iOwnFb@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p11.jpeg",
        friends: [],
        location: "San Fran, CA",
        occupation: "CEO",
        viewedProfile: 14561,
        impressions: 888822,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        firstName: "Prankishor",
        lastName: "Talukdar",
        email: "prankishortalukdar0@gmail.com",
        password: "abcdefghijklmnop",
        picturePath: "p3.jpeg",
        friends: [],
        location: "Bengaluru, IN",
        occupation: "Founder @Social",
        viewedProfile: 12351897,
        impressions: 55555,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        firstName: "Ankur",
        lastName: "Warikoo",
        email: "warikoo@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        picturePath: "p4.jpeg",
        friends: [],
        location: "Mumbai, IN",
        occupation: "Self Made CA/ Youtuber",
        viewedProfile: 45468,
        impressions: 19986,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },

];

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        firstName: "Mark",
        lastName: "Zuckerberg",
        location: "New York, CA",
        description: "Khabib who?",
        picturePath: "post1.jpeg",
        userPicturePath: "p11.jpeg",
        likes: new Map([
            [userIds[0], true],
        ]),
        comments: [
            "GOAT",
            "Elon is finished",
            "Those obliques!!!",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[2],
        firstName: "Ankur",
        lastName: "Warikoo",
        location: "Mumbai, IN",
        description:
            "New Video: 5 tricks to become crorepati by the age of 10",
        picturePath: "post2.jpeg",
        userPicturePath: "p4.jpeg",
        likes: new Map([

        ]),
        comments: [
            "My net worth is 1cr after watching your videos, i started with 3 crores in hand",
        ],
    },

];