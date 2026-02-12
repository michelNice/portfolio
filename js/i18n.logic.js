import { test } from "./supa.js"


export async function getTexts (lang){

  const texts = await test(lang)

  return texts
}

