import  express  from "express";
const router = express.Router()
import UserController from "../controllers/userController.js";

//Public Routes
router.post('/register',UserController.userRegistration)

//Private/Protected Routes


export default router;