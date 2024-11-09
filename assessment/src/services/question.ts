import axios from "axios";
import {QuestionResponse} from "./types.ts";

export const getQuestion = async () => {
    try {
        const response = await axios.get("http://jenkins.thddns.net:4551/api/v1/form/questions");
        if (response.status === 200) {
            console.log(response.data)
            return response.data as QuestionResponse[];
        } else {
            console.error("Error: Unexpected response status", response.status);
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
};

export const postAnswer = async () => {
    try {
        const response = await axios.get("http://jenkins.thddns.net:4551/api/v1/personality/assessment");
        if (response.status === 200) {
            console.log(response.data)
            return response.data as QuestionResponse[];
        } else {
            console.error("Error: Unexpected response status", response.status);
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
};