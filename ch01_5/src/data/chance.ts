import Chance from 'chance'
import { setEngine } from 'crypto'
const chance = new Chance()

export const randomUUID = () => chance.guid()
export const randomName = () => chance.name()
export const randomEmail = () => chance.email()
export const randomID = () => chance.fbid()
export const randomJobTitle = () => chance.profession()
export const randomCompanyNmae = () => chance.company()
export const randomSentence = (words = 5) => chance.sentence({words})
export const randomTitleText = (words = 3) => chance.sentence({words})
export const randomParagraphs = (sentences = 3) => chance.paragraph({sentences})