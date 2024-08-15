import axios from "axios";

export const getQuestion = () => {
  axios
    .get("http://ninthawat.trueddns.com:50313/api/v1/form/questions")
    .then((response) => {
      if (response.status === 200) {
        const responseData = response.data;
        return responseData;

        // แก้ไข: ตรวจสอบและแก้ไขข้อมูลที่ผิดปกติ
        // const correctedQuestions = responseData.data.map(question => { // เปลี่ยนชื่อฟิลด์ "question" เป็น "item"
        //   // ตรวจสอบและแก้ไขค่า text และ choices ตามความต้องการ
        //   return {
        //     id: question.id,
        //     number: question.number,
        //     text: question.text  'ไม่มีข้อความ', // แก้ไขค่า text ถ้าว่าง
        //     choices: question.choices.map(choice => ({
        //       id: choice.id,
        //       description: choice.description  'ไม่มีคำอธิบาย' // แก้ไขค่า description ถ้าว่าง
        //     }))
        //   };
        // });

        // เรียงลำดับคำถามตาม number
        // correctedQuestions.sort((a, b) => a.number - b.number);

        // กำหนดข้อมูลที่แก้ไขให้กับ questions
        // questions = correctedQuestions;
        // displayQuestion(0);
      } else {
        // ...
      }
    })
    .catch((error) => {
      console.log(error, "Something");
    });
};
