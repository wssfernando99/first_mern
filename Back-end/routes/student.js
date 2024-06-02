const express = require ('express');
const router = express.Router();

let Student = require('../models/student');

router.post('/add',(req,res)=>{
     const name = req.body.name;
     const age = Number(req.body.age);
     const gender = req.body.gender;

     const newStudent = new Student({
        name,
        age,
        gender
     });
     newStudent.save().then(()=>{
        res.json("Student Added");
     }).catch((err)=>{
        console.log(err);
     });

});

router.get('/',(req,res)=>{
    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    })
});

router.put('/update/:id',async(req,res)=>{
    let userId = req.params.id
    const {name,age,gender}= req.body;

    const updateStudent = {
        name,
        age,
        gender
    }
   
    const update = await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send(`success`)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating"})
    })

});

router.delete('/delete/:id', async(req,res)=>{
    let userId = req.params.id;
    
    const erase = await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:'Successfully Deleted',})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Deleting",error:err.message})
    })
});

router.get('/get/:id', async(req,res)=>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then((user)=>{
        res.status(200).send(user)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})


module.exports = router;