import express from 'express';
import { User as UserModal} from '../models/authenModel.js';

const router = express.Router();

// route create account login
// router.post('/login',async (req, res) => {
//     try {
//         const newUser = {
//             email: req.body.email,
//             password: req.body.password
//         }
//         const user = await UserModal.create(newUser);
//         res.status(200).send(user);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({massage: error.message});
//     }
// })

// // route get all accounts 
router.get('/signup', async (req, res) => {
    try {
        const users = await UserModal.find({});
        return res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({massage: error.message});
    }
})

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const check = await UserModal.findOne({ email: email, password: password });
        if(check) {
            res.json('exist');
        }
        else {
            res.json('notexist');
        }
    } catch (err) {
        console.log(err)
    }
})
router.post('/signup', async(req, res) => {
    const { email, password, rePassword, nameUser} = req.body;
    const data = {
        nameUser,
        email,
        password,
        rePassword,
    }
    try {
        const check = await UserModal.findOne({ email: email})
        if(check) {
            res.json('exist');
        }
        else {
            res.json('notexist');
            await UserModal.insertMany([data]);
        }
    } catch (error) {
        console.log(error)
    }
})

export default router;