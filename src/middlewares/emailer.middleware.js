import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({

    service:'gmail',
    auth:{
        user:'codingninjas2k16@gmail.com',
        pass:'slwvvlczduktvhdj'
    }
       
});

export async function sendMail(mailto, name){

    const mailOptions = {
        from:"codingninjas2k16@gmail.com",
        to: mailto,
        subject:'Job Appliation',
        text: `Hi ${name}, Your have applied Succesfully for the job!!`
    }

    try{
        const result = await transporter.sendMail(mailOptions)
        console.log("Mail Sent !!")
    }
    catch(err){
        console.log(err);
    }
}





