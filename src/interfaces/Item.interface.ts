export enum ItemCategory{
food = "Food",
electronics = "Electronics",
animals = "Animals",
witchCraft = "Witch Craft",
characters = "Characters"
}

export interface IItem {
    img:string
    title:string
    desc:string
    price:number
    category:ItemCategory
}