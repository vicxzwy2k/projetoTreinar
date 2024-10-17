//importando o express
import express,{Request, Response} from 'express'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

//usando o express
const server = express()

server.use(mainRoutes)

server.set('view engine','mustache')

server.set('views',path.join(__dirname,'views'))


server.use(express.static(path.join(__dirname,'../public')))

server.engine('mustache',mustache())




//gerando o servidor na porta 2000
server.listen(5000)