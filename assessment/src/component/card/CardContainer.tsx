import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fircardContent, question, secoundCardContent } from "./cardContent";
import { Box } from "@mui/material";
import { getQuestion, postAnswer } from "../../services/question.ts";
import { Answer, AssessmentQuestion, QuestionResponse, SubmitAnswer } from "../../services/types.ts";

export const CardContainer: React.FC = () => {
  const [onboard, setIsOnBoard] = useState<number>(1);
  const [questions, setQuestions] = useState<QuestionResponse[]>();
  const [assessment, setAssessment] = useState<AssessmentQuestion[]>();
  const [userAnswersList, setUserAnswersList] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startTime, setStartTime] = useState<string | null>(null);

  const handleAnswerSelect = (questionId: string, title: string, answerId: string, answerText: string) => {
    // Set the start time for the answer selection
    const endTime = new Date().toISOString(); // Set the actual end time when the answer is selected
    const answer: Answer = {
      questionId: questionId,
      questionText: title,
      id: answerId,
      text: answerText,
      startTime: startTime || new Date().toISOString(), // If startTime is not set, use the current time
      endTime: endTime,  // Use the actual end time of the answer selection
    };

    setSelectedAnswer(answerId);
    setUserAnswersList((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleNextOnboard = () => {
    if (selectedAnswer) {
      setIsOnBoard(onboard + 1);
      setSelectedAnswer(null);
    } else {
      console.error("Please select an answer before proceeding.");
    }
  };

  const submitAssessment = async () => {
    const endTime = new Date().toISOString(); // Record the final end time
    const submitData: SubmitAnswer = {
      deviceDetail: "Device Information Placeholder", // Add device info
      clientDetail: { gender: "", age: 0 },          // Add client info
      answers: userAnswersList,
      startTime: startTime || new Date().toISOString(),  // If startTime is not set, use the current time
      endTime: endTime,
    };

    const response = await postAnswer(submitData);
    if (response) {
      console.log("Assessment submitted successfully:", response);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestion();
      setQuestions(data);
      if (data) {
        setAssessment(mapQuestions(data));
        // Set the start time when the first question is loaded
        setStartTime(new Date().toISOString());
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestionIndex >= (assessment?.length || 0)) {
      submitAssessment();
    }
  }, [currentQuestionIndex]);

  const mapQuestions = (assessment: QuestionResponse[] | undefined): AssessmentQuestion[] | undefined => {
    if (!assessment) {
      return [];
    }
    return assessment.map((question) => ({
      order: question.number,
      id: question.id,
      title: question.text,
      answer1Id: question.choices[0].id,
      answer1Title: question.choices[0].description,
      answer2Id: question.choices[1].id,
      answer2Title: question.choices[1].description,
    }));
  };

  return (
    <Card sx={{ minWidth: 600, minHeight: 500 }} style={{ borderRadius: 40 }}>
      {onboard === 1 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h4">{fircardContent.header}</Typography>
            <Typography gutterBottom variant="h4">{fircardContent.subHeader}</Typography>
            <Box style={{ paddingTop: 100 }}>
              <Typography gutterBottom variant="h5">{fircardContent.description}</Typography>
              <Typography gutterBottom variant="h5">{fircardContent.subDescription}</Typography>
            </Box>
          </CardContent>
          <CardActions style={{ flex: "row", alignItems: "center", justifyContent: "center", padding: 100 }}>
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setIsOnBoard(2)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>{fircardContent.button}</Typography>
            </Button>
          </CardActions>
        </Box>
      )}
      {onboard === 2 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h5" style={{ padding: 30 }}>{secoundCardContent.title}</Typography>
            <Typography gutterBottom variant="h6" style={{ paddingTop: 20 }}>{secoundCardContent.content1}</Typography>
            <Typography gutterBottom variant="h6" style={{ paddingTop: 20 }}>{secoundCardContent.content2}</Typography>
            <Typography gutterBottom variant="h6" style={{ paddingTop: 20 }}>
              {`${secoundCardContent.content3}${secoundCardContent.content4}${secoundCardContent.content5}`}
            </Typography>
            <Typography gutterBottom variant="h6" style={{ paddingTop: 20 }}>{secoundCardContent.content6}</Typography>
            <Typography gutterBottom variant="h6" style={{ paddingTop: 20 }}>{secoundCardContent.content7}</Typography>
          </CardContent>
          <CardActions style={{ flex: "row", alignItems: "center", justifyContent: "center", padding: 100 }}>
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setIsOnBoard(3)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>{secoundCardContent.button}</Typography>
            </Button>
          </CardActions>
        </Box>
      )}
      {onboard === 3 && assessment && (
        <CardContent style={{ paddingTop: 100 }}>
          <Typography gutterBottom variant="h6" style={{ padding: 0 }}>{assessment[currentQuestionIndex].title}</Typography>
          <Typography gutterBottom variant="h6" style={{ padding: 0 }}>{assessment[currentQuestionIndex].answer1Title}</Typography>
          <Button
            variant="contained"
            style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
            onClick={() => handleAnswerSelect(
              assessment[currentQuestionIndex].id,
              assessment[currentQuestionIndex].title,
              assessment[currentQuestionIndex].answer1Id,
              assessment[currentQuestionIndex].answer1Title
            )}
          >
            {assessment[currentQuestionIndex].answer1Title}
          </Button>
          <Button
            variant="contained"
            style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
            onClick={() => handleAnswerSelect(
              assessment[currentQuestionIndex].id,
              assessment[currentQuestionIndex].title,
              assessment[currentQuestionIndex].answer2Id,
              assessment[currentQuestionIndex].answer2Title
            )}
          >
            {assessment[currentQuestionIndex].answer2Title}
          </Button>
        </CardContent>
      )}
    </Card>
  );
};
