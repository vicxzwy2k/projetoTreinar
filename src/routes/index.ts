import {Router,Request,Response, RequestHandler} from 'express'
 
const router = Router()
 
router.get('/',(req,res)=>{
    res.render('home')

})
router.get('/contato', (req:Request,res:Response)=>{
    res.render('contato')
})

router.get('/sobre', (req:Request,res:Response)=>{
    res.render('sobre')
})


export default router