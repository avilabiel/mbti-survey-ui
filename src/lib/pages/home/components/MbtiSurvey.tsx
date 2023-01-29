import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import type MbtiQuestion from "../../../../types/MbtiQuestion";

const MbtiSurvey = () => {
  const [questions, setQuestions] = useState<MbtiQuestion[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get("http://localhost:3000/mbti/questions");

      setQuestions(response.data);
    };

    fetchQuestions();
  }, []);

  return (
    <FormControl as="fieldset">
      {questions.map((question) => {
        return (
          <>
            <FormLabel as="legend">{question.question}</FormLabel>
            <RadioGroup name={question.id}>
              <HStack spacing="24px">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
                <Radio value="6">6</Radio>
                <Radio value="7">7</Radio>
              </HStack>
            </RadioGroup>
            <br />
          </>
        );
      })}

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};

export default MbtiSurvey;
