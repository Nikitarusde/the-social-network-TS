import React from "react";

export type MessagesPropsType = {
    id: number,
    message: string,
}
export type DialogsPropsType = {
    id: number,
    name: string,
}
export type PostPropsType = {
    id: number,
    post: string,
    count: number,
}
export type ProfilePagePropsType = {
    post: Array<PostPropsType>,
}
export type DialogsPagePropsType = {
    dialogs: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>,
}
export type State = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DialogsPagePropsType,
}


export const state: State = {
    profilePage: {
        post: [
            {id: 1, post: "Hi", count: 2},
            {id: 2, post: "Its my first post", count: 4},
            {id: 3, post: "I will to tell about my study in IT-Incubator", count: 5},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Dasha"},
        ],

        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your IT-Incubator"},
            {id: 3, message: "Its good"},
            {id: 4, message: "And how are you?"},
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostPropsType = {
        id: 5,
        post: postMessage,
        count: 44,
    }
    state.profilePage.post.push(newPost);
}