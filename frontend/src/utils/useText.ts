import { atom } from "jotai";

export type TextType ={
    id: number;
    text: string;
}[]

export const  textAtom = atom<TextType>([{id:1, text: "The hawk didn’t understand why the ground squirrels didn’t want to be his friend."}])