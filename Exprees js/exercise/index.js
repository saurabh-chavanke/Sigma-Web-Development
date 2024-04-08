import { copyFileSync } from "fs"
import fs from "fs/promises"

let files =await fs.readdir("C:\\Users\\ankit\\Desktop\\Sigma Web Development\\Exprees js\\exercise")

console.log(files)