import axios from "axios";
import { QuestionResponse, SubmitAnswer } from "./types.ts";

// ฟังก์ชันดึงข้อมูลคำถาม (GET)
export const getQuestion = async (): Promise<QuestionResponse[] | undefined> => {
    try {
        const response = await axios.get("http://jenkins.thddns.net:4551/api/v1/form/questions");
        if (response.status === 200) {
            console.log(response.data);
            return response.data as QuestionResponse[];
        } else {
            console.error("Error: Unexpected response status", response.status);
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
};

// ฟังก์ชันส่งคำตอบแบบทดสอบ (POST)
export const postAnswer = async (data: SubmitAnswer) => {
    try {
        const response = await axios.post("http://jenkins.thddns.net:4551/api/v1/personality/assessment", data);
        if (response.status === 200) {
            console.log("Successfully submitted answers:", response.data);
            return response.data;
        } else {
            console.error("Error: Unexpected response status", response.status);
        }
    } catch (error) {
        console.error("Error submitting answers:", error);
    }
};

// In services/question.ts

export const getResult = async (assessmentId: string) => {
    try {
      const response = await fetch(`http://jenkins.thddns.net:4551/api/v1/personality/assessment/${assessmentId}/result`);
      if (!response.ok) throw new Error("Failed to fetch result");
      return await response.json();
    } catch (error) {
      console.error("Error in getResult:", error);
      throw error;
    }
  };
  