import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {fircardContent, secoundCardContent} from "./cardContent";
import { Box } from "@mui/material";
import {getQuestion} from "../../services/question.ts";
import {AssessmentQuestion, QuestionResponse} from "../../services/types.ts";

export const CardContainer: React.FC = () => {
  const [onboard, setIsOnBoard] = useState<number>(1);
  const [questions, setQuestions] = useState<QuestionResponse[]>();
  const [assessment , setAssessment] = useState<AssessmentQuestion[]>();
  const [currentCard, setCurrentCard] = useState<number>(1);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestion();
      setQuestions(data);
      if (data) {
        setAssessment(mapQuestions(data));
      }
    };
    fetchQuestions();
  }, []);

  // TODO: Map this to liner object to be used in the assessment
  const mapQuestions = (assessment: QuestionResponse[] | undefined): AssessmentQuestion[] | undefined => {
    if (!assessment) {
      return [];
    }
    return assessment.map((question) => {
      return {
        order: question.number,
        id: question.id,
        title: question.text,
        answer1Id: question.choices[0].id,
        answer1Title: question.choices[0].description,
        answer2Id: question.choices[1].id,
        answer2Title: question.choices[1].description,
      };
    });

  };



  return (
    <Card sx={{ minWidth: 600, minHeight: 500 }} style={{ borderRadius: 40 }}>
      {onboard === 1 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h4">
              {fircardContent.header}
            </Typography>
            <Typography gutterBottom variant="h4">
              {fircardContent.subHeader}
            </Typography>
            <Box style={{ paddingTop: 100 }}>
              <Typography gutterBottom variant="h5">
                {fircardContent.description}
              </Typography>
              <Typography gutterBottom variant="h5">
                {fircardContent.subDescription}
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            style={{
              flex: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 100,
            }}
          >
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setIsOnBoard(2)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>
                {fircardContent.button}
              </Typography>
            </Button>
          </CardActions>
        </Box>
      )}
      {onboard === 2 && (
        <Box>
          <CardContent style={{ paddingTop: 100 }}>
            <Typography gutterBottom variant="h3" style={{ padding: 30 }}>
              {secoundCardContent.title}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content1}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content2}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {`${secoundCardContent.content3}${secoundCardContent.content4}${secoundCardContent.content5}`}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content6}
            </Typography>
            <Typography gutterBottom variant="h4" style={{ paddingTop: 20 }}>
              {secoundCardContent.content7}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              style={{ paddingTop: 20 }}
            ></Typography>
          </CardContent>
          <CardActions
            style={{
              flex: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 100,
            }}
          >
            <Button
              variant="contained"
              style={{ margin: 20, minWidth: 100, borderRadius: 30 }}
              onClick={() => setIsOnBoard(3)}
            >
              <Typography variant="h6" style={{ margin: 10 }}>
                {secoundCardContent.button}
              </Typography>
            </Button>
          </CardActions>
        </Box>
      )}
    </Card>
  );
};
