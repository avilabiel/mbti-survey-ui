import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import axios from "axios";
import type React from "react";
import { useEffect, useState } from "react";

import type MbtiQuestion from "../../../../types/MbtiQuestion";

const MbtiSurvey = () => {
  const [questions, setQuestions] = useState<MbtiQuestion[]>([]);
  const [answers, setAnswers] = useState<
    { questionId: string; response: number }[]
  >([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get("http://localhost:3000/mbti/questions");

      setQuestions(response.data);
    };

    fetchQuestions();
  }, []);

  const handleChangeAnswer = (event, questionId: string) => {
    const answer = { questionId, response: parseInt(event.target.value, 10) };

    setAnswers((answers) => [...answers, answer]);
  };

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/mbti/surveys", {
      email: "define", // TODO
      answers,
    });

    alert(`Your Perspective Type is "${response?.data?.result}"`);
  };

  return (
    <form onSubmit={submitForm}>
      <FormControl as="fieldset">
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <FormLabel as="legend">{question.question}</FormLabel>
              <RadioGroup name={question.id}>
                <HStack spacing="24px">
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="1"
                  >
                    1
                  </Radio>
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="2"
                  >
                    2
                  </Radio>
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="3"
                  >
                    3
                  </Radio>
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="4"
                  >
                    4
                  </Radio>
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="5"
                  >
                    5
                  </Radio>
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="6"
                  >
                    6
                  </Radio>
                  <Radio
                    onChange={(event) => handleChangeAnswer(event, question.id)}
                    value="7"
                  >
                    7
                  </Radio>
                </HStack>
              </RadioGroup>
              <br />
            </div>
          );
        })}

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default MbtiSurvey;
